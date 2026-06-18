import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import { themeScreenshots, faqsList, featuresList } from './data.jsx';

const LogoSVG = ({ size = 32 }) => (
  <img 
    src="/apple-touch-icon.png" 
    alt="Money Tracker" 
    style={{ 
      width: size, 
      height: size, 
      display: 'block', 
      flexShrink: 0, 
      borderRadius: '6px',
      objectFit: 'contain'
    }} 
  />
);

let hasIncrementedVisit = false;

function App() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [currentTime, setCurrentTime] = useState('11:42 AM');
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNepal, setIsNepal] = useState(() => {
    try {
      // Nepal Timezone offset is UTC+5:45, which JS returns as -345 minutes
      return new Date().getTimezoneOffset() === -345;
    } catch (e) {
      return false;
    }
  });

  // Sync virtual phone status clock
  useEffect(() => {
    if (showTerms || showPrivacy || isMobileMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showTerms, showPrivacy, isMobileMenuOpen]);

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    if (!hasIncrementedVisit) {
      hasIncrementedVisit = true;
      fetch('https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fmoney-tracker-android-web.vercel.app%2F')
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.total_hits === 'number') {
            setVisitorCount(data.total_hits);
          }
        })
        .catch(err => console.error('Error fetching visitors:', err));
    }
  }, []);

  // Save scroll position on scroll and beforeunload to survive refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const saveScroll = () => {
      sessionStorage.setItem('mt_scroll_y', String(window.scrollY));
    };
    window.addEventListener('scroll', saveScroll, { passive: true });
    window.addEventListener('beforeunload', saveScroll);
    return () => {
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []);

  // Restore scroll position on page reload instantly using auto scrollBehavior bypass
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('mt_scroll_y');
    if (savedScrollY) {
      const scrollVal = parseInt(savedScrollY, 10);
      const restoreScroll = () => {
        const html = document.documentElement;
        const prevStyle = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollVal);
        html.style.scrollBehavior = prevStyle;
      };

      // Try restoring immediately when mounted
      restoreScroll();

      // Retry after small delays to handle React DOM paints and layout shifts
      const t1 = setTimeout(restoreScroll, 50);
      const t2 = setTimeout(restoreScroll, 120);
      const t3 = setTimeout(restoreScroll, 300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, []);

  // Sync virtual phone status clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hrs = now.getHours();
      const mins = String(now.getMinutes()).padStart(2, '0');
      const ampm = hrs >= 12 ? 'PM' : 'AM';
      hrs = hrs % 12 || 12;
      setCurrentTime(`${hrs}:${mins} ${ampm}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reusable Smartphone Frame component
  const PhoneMockup = ({ imgSrc, altText }) => (
    <div className="phone-mockup-wrapper">
      <div className="phone-glow" />
      
      <div className="phone-frame">
        {/* Unbranded Samsung side keys on right */}
        <div className="phone-side-button volume-up" />
        <div className="phone-side-button volume-down" />
        <div className="phone-side-button power" />

        {/* Top speaker grill */}
        <div className="phone-speaker" />
        
        {/* Centered punch-hole camera */}
        <div className="phone-camera-hole" />
        
        {/* Mockup Viewport */}
        <div className="phone-viewport">
          {/* Status Bar */}
          <div className="phone-status-bar">
            <span>{currentTime}</span>
            <div className="status-bar-icons">
              {/* Wifi */}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M1.5 9.5a15 15 0 0 1 21 0" />
              </svg>
              {/* Android Signal Icon */}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 22h20V2L2 22z" fillOpacity="0.3" />
                <path d="M2 22h16V6L2 22z" />
              </svg>
              {/* Battery Percentage */}
              <span style={{ fontSize: '8px', opacity: 0.95, letterSpacing: '-0.2px' }}>85%</span>
              {/* Battery */}
              <svg width="12" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                <line x1="22" x2="22" y1="11" y2="13" />
              </svg>
            </div>
          </div>

          {/* Screenshot Content */}
          <img 
            src={imgSrc} 
            alt={altText}
          />

          {/* Virtual Android Navigation Bar (Samsung default: Recents, Home, Back) */}
          <div className="phone-nav-bar">
            <div className="nav-btn">
              {/* Recents */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="8" y1="5" x2="8" y2="19" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="5" x2="16" y2="19" />
              </svg>
            </div>
            <div className="nav-btn">
              {/* Home */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <rect x="5" y="5" width="14" height="14" rx="4" />
              </svg>
            </div>
            <div className="nav-btn">
              {/* Back */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="landing-wrapper">
      
      {/* Sticky Glassmorphic Header */}
      <header className="landing-header">
        <a href="/" onClick={(e) => { scrollToTop(e); setIsMobileMenuOpen(false); }} className="brand-section">
          <LogoSVG size={32} />
          <span className="brand-name">Money Tracker</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="landing-nav">
          <button onClick={scrollToSection('security')} className="landing-nav-link">Security</button>
          <button onClick={scrollToSection('features')} className="landing-nav-link">Features</button>
          <button onClick={scrollToSection('faq')} className="landing-nav-link">FAQ</button>
          <ThemeToggle />
          <a href="/money-tracker/download" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Download APK
          </a>
        </nav>

        {/* Mobile Header Controls */}
        <div className="mobile-header-controls">
          <ThemeToggle />
          <button 
            type="button"
            className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <button type="button" className="mobile-nav-link" onClick={(e) => { scrollToSection('security')(e); setIsMobileMenuOpen(false); }}>
            Security
          </button>
          <button type="button" className="mobile-nav-link" onClick={(e) => { scrollToSection('features')(e); setIsMobileMenuOpen(false); }}>
            Features
          </button>
          <button type="button" className="mobile-nav-link" onClick={(e) => { scrollToSection('faq')(e); setIsMobileMenuOpen(false); }}>
            FAQ
          </button>
          <a href="/money-tracker/download" className="btn btn-primary" style={{ width: '100%', marginTop: '12px', textDecoration: 'none', textAlign: 'center', display: 'block' }} onClick={() => setIsMobileMenuOpen(false)}>
            Download APK
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="landing-section landing-hero" id="hero">
        <div className="animate-fade-up">
          <div className="hero-tagline">Offline Android Tracker</div>
          <h1 className="hero-title">Track income and expenses without an account.</h1>
          <p className="hero-desc">
            Money Tracker is a simple offline Android app for logging income, expenses, monthly budgets, and backups. Your financial data stays on your device, and you can export backups whenever you need.
          </p>
          <div className="hero-actions">
            <a href="/money-tracker/download" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Download Android APK
            </a>
            <button onClick={scrollToSection('features')} className="btn btn-secondary">
              Explore Features &darr;
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-val">Offline</span>
              <span className="hero-stat-lbl">No account required</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-val">Budgets</span>
              <span className="hero-stat-lbl">Monthly limits</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-val">Backups</span>
              <span className="hero-stat-lbl">Manual backups</span>
            </div>
          </div>
        </div>

        <PhoneMockup imgSrc="/dark theme.jpg" altText="Money Tracker Main Dashboard" />
      </section>

      {/* Problem & Solution Section */}
      <section className="landing-section animate-fade-up" id="problem-solution" style={{ borderTop: '1px solid var(--border)', paddingTop: '100px' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">The Challenge & The Answer</span>
          <h2 className="landing-section-title">Cut through the financial noise</h2>
          <p className="landing-section-desc">
            Too many apps feel complicated, push account setup, or make basic tracking slower than it needs to be.
          </p>
        </div>

        <div className="problem-solution-grid">
          <div className="prob-sol-card problem-card">
            <span className="card-pill">The Friction</span>
            <h3 className="prob-sol-title">Standard Apps are Overwhelming</h3>
            <p className="prob-sol-desc">
              Most tools force you into high-friction flows that make tracking feel like a second job.
            </p>
            <ul className="prob-sol-list">
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span><strong>Overly Complex:</strong> Too many buttons, menus, and configurations.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span><strong>Account Required:</strong> Demands login credentials just to track expenses.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span><strong>Cloud Sync Default:</strong> Uploads your personal data without offline alternatives.</span>
              </li>
            </ul>
          </div>

          <div className="prob-sol-card solution-card">
            <span className="card-pill">Our Answer</span>
            <h3 className="prob-sol-title">Simplicity & Speed First</h3>
            <p className="prob-sol-desc">
              Money Tracker is built for rapid control and local storage.
            </p>
            <ul className="prob-sol-list">
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Quick logging:</strong> Enter amount, pick category, save.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Income & Expenses:</strong> Track money coming in and going out with monthly budget limits.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Offline local storage:</strong> Your data stays on your device. Backup/export manually.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Showcase 1: Security and SQLite */}
      <section className="landing-section" id="security" style={{ borderTop: '1px solid var(--border)', paddingTop: '100px' }}>
        <div className="feature-showcase-row">
          <div className="feature-showcase-content animate-fade-up">
            <span className="feature-showcase-tag">Security Guard</span>
            <h2 className="feature-showcase-title">Local-first data control</h2>
            <p className="feature-showcase-desc">
              Money Tracker stores your transactions on your Android device using local SQLite storage. The app does not require an account or cloud sync for tracking. You can protect the app with passcode or biometric lock if enabled, and export backups from Settings.
            </p>
            <ul className="feature-showcase-list">
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>No account required:</strong> Start tracking instantly without signing up.</span>
              </li>
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Local SQLite storage:</strong> Data is kept on your device.</span>
              </li>
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Optional app lock:</strong> Secure the app with passcode or biometrics if supported.</span>
              </li>
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Manual backups:</strong> Export CSV files. Works entirely without internet.</span>
              </li>
            </ul>
          </div>
          
          <PhoneMockup imgSrc="/Lock screen.jpg" altText="App lock screen security" />
        </div>
      </section>

      

      {/* Core Benefits Grid */}
      <section className="landing-section" id="features" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">Powerful Tools</span>
          <h2 className="landing-section-title">All details. No distraction.</h2>
          <p className="landing-section-desc">
            Organize cash flow with simple, offline tools designed to handle daily tracking needs efficiently.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((item, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon-wrapper">
                {item.icon()}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="landing-section" id="pricing" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">Availability</span>
          <h2 className="landing-section-title">Free offline app</h2>
          <p className="landing-section-desc">
            Money Tracker currently works as a free offline Android app. There is no account, subscription, or cloud sync.
          </p>
        </div>

        <div className="pricing-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>
          <div className="pricing-card popular" style={{ borderColor: 'var(--success)', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="pricing-name">Offline Android App</h3>
            <p className="pricing-desc">Everything you need to track your daily expenses without an account.</p>
            <div className="pricing-price">
              Free
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                Local tracking
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                Manual backups
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                No account setup
              </li>
            </ul>
            <a href="/money-tracker/download" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Download APK</a>
          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="landing-section" id="faq" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">FAQ</span>
          <h2 className="landing-section-title">Commonly asked questions</h2>
          <p className="landing-section-desc">
            Find out how Money Tracker secures data and handles local/online records.
          </p>
        </div>

        <div className="faq-list">
          {faqsList.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card ${isOpen ? 'open' : ''}`} 
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveFaq(isOpen ? -1 : idx)}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                >
                  <span>{faq.q}</span>
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Download Section */}
      <section id="download" className="landing-section" style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '120px 24px' }}>
        <h2 className="landing-section-title" style={{ fontSize: '48px' }}>Start Tracking Your Budget</h2>
        <p className="landing-section-desc" style={{ fontSize: '18px', marginTop: '16px' }}>
          Download the latest version of the Money Tracker Android APK. Safe, offline, and fast.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
          <a href="/money-tracker/download" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Download APK
          </a>
        </div>
      </section>

      {/* Landing Footer */}
      <footer className="landing-footer">
        <div className="footer-grid">
          {/* Column 1: Brand details */}
          <div className="footer-column">
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LogoSVG size={28} />
              <span className="brand-name" style={{ fontSize: '16px' }}>Money Tracker</span>
            </div>
            <p className="footer-tagline">
              A simple offline Android money tracker for income, expenses, budgets, and manual backups.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">App Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={scrollToSection('problem-solution')} className="footer-link-item-btn">The Challenge</button></li>
              <li><button onClick={scrollToSection('security')} className="footer-link-item-btn">Security</button></li>
              <li><button onClick={scrollToSection('features')} className="footer-link-item-btn">Features</button></li>
              <li><a href="/money-tracker/download" className="footer-link-item-btn" style={{textDecoration: 'none'}}>Download APK</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">Legal & Support</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => setShowPrivacy(true)} className="footer-link-item-btn">Privacy Policy</button></li>
              <li><button onClick={() => setShowTerms(true)} className="footer-link-item-btn">Terms of Service</button></li>
              <li><a href="mailto:hi.ronajpradhan@gmail.com?subject=Money%20Tracker%20Support" className="footer-link-item-btn" style={{ textDecoration: 'none' }}>Email Support</a></li>
            </ul>
          </div>

          {/* Column 4: Stats Counters */}
          <div className="footer-column">
            <h4 className="footer-column-title">App Statistics</h4>
            <div className="stats-minimal-container" style={{ marginTop: '12px' }}>
              <div className="stat-minimal-item">
                <span className="stat-minimal-label">
                  <span className="live-dot" /> Total Visitors
                </span>
                <span className="stat-minimal-value">
                  {visitorCount > 0 ? visitorCount.toLocaleString() : 'Loading...'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} Money Tracker. All rights reserved.</span>
            <span className="footer-made-by"> Made by <a href="https://pradhanronaj.com.np/" target="_blank" rel="noopener noreferrer" className="footer-author-link">Ronaj Pradhan</a>.</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            Offline Android App
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <h3 className="modal-title">Terms of Service</h3>
                <span className="modal-subtitle">Last Updated: June 2026</span>
              </div>
              <button className="modal-close-x" onClick={() => setShowTerms(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p>Welcome to Money Tracker. By using our application, you agree to these Terms of Service.</p>
              
              <h4>1. Usage Limits</h4>
              <p>Money Tracker provides an offline experience with local storage. No accounts or subscriptions are required.</p>
              
              <h4>2. Disclaimers</h4>
              <p>The application is provided "as is", without warranty of any kind. Money Tracker is not a financial institution, and the data provided in the app is for personal tracking purposes only. We do not provide financial advice.</p>
              
              <h4>3. Limitation of Liability</h4>
              <p>In no event shall Money Tracker or its developers be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your use of the app.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setShowTerms(false)}>
                I Accept these Terms
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <h3 className="modal-title">Privacy Policy</h3>
                <span className="modal-subtitle">Last Updated: June 2026</span>
              </div>
              <button className="modal-close-x" onClick={() => setShowPrivacy(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p>Your privacy is critically important to us. We have built Money Tracker from the ground up to respect your personal financial data.</p>
              
              <h4>1. Data Collection & Analytics</h4>
              <p>We gather absolutely no personally identifiable information (PII). We do not track your behavior, log your sessions, or run third-party advertising services inside the app.</p>
              
              <h4>2. Local Data Storage</h4>
              <p>By default, Money Tracker operates entirely offline. All your transactions, budgets, categories, and settings are saved on your phone's internal storage using local SQLite storage. We do not have access to this data.</p>
              
              <h4>3. Biometric Authentication</h4>
              <p>Face Recognition and Fingerprint data are processed entirely by your device's native hardware. The app never sees or stores your biometric information.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowPrivacy(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

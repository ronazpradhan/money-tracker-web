import React, { useState, useEffect } from 'react';
import { themeScreenshots, faqsList, featuresList } from './data.jsx';

const LogoSVG = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
    <path d="M16 6V26M11.5 11H18.5C20.5 11 21.5 12.5 21.5 14C21.5 15.5 20.5 16.5 18.5 16.5H13.5C11.5 16.5 10.5 17.5 10.5 19C10.5 20.5 11.5 22 13.5 22H20.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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
          <button onClick={scrollToSection('themes')} className="landing-nav-link">Themes</button>
          <button onClick={scrollToSection('features')} className="landing-nav-link">Features</button>
          <button onClick={scrollToSection('pricing')} className="landing-nav-link">Pricing</button>
          <button onClick={scrollToSection('faq')} className="landing-nav-link">FAQ</button>
          <button onClick={scrollToSection('download')} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
            Download APK
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
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
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <button 
            type="button"
            className="mobile-nav-link" 
            onClick={(e) => { scrollToSection('security')(e); setIsMobileMenuOpen(false); }}
          >
            Security
          </button>
          <button 
            type="button"
            className="mobile-nav-link" 
            onClick={(e) => { scrollToSection('themes')(e); setIsMobileMenuOpen(false); }}
          >
            Themes
          </button>
          <button 
            type="button"
            className="mobile-nav-link" 
            onClick={(e) => { scrollToSection('features')(e); setIsMobileMenuOpen(false); }}
          >
            Features
          </button>
          <button 
            type="button"
            className="mobile-nav-link" 
            onClick={(e) => { scrollToSection('pricing')(e); setIsMobileMenuOpen(false); }}
          >
            Pricing
          </button>
          <button 
            type="button"
            className="mobile-nav-link" 
            onClick={(e) => { scrollToSection('faq')(e); setIsMobileMenuOpen(false); }}
          >
            FAQ
          </button>
          <button 
            type="button"
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '12px', padding: '14px 0' }}
            onClick={(e) => { scrollToSection('download')(e); setIsMobileMenuOpen(false); }}
          >
            Download APK
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="landing-section landing-hero" id="hero">
        <div className="animate-fade-up">
          <div className="hero-tagline">Secure Personal Finance</div>
          <h1 className="hero-title">Track Spending Instantly. 100% Private.</h1>
          <p className="hero-desc">
            A premium personal finance tracker built for speed, offline control, and clean data design. Log expenses in 3 seconds, set monthly budget limits, and see where cash goes—zero ads, zero tracking.
          </p>
          <div className="hero-actions">
            <button onClick={scrollToSection('download')} className="btn btn-primary">
              Download Android App
            </button>
            <button onClick={scrollToSection('features')} className="btn btn-secondary">
              Explore Features &darr;
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-val">3 sec</span>
              <span className="hero-stat-lbl">Quick Log Flow</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-val">Offline</span>
              <span className="hero-stat-lbl">On-device DB</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-val">No Ads</span>
              <span className="hero-stat-lbl">Clean UI space</span>
            </div>
          </div>
        </div>

        {/* Hero mockup displaying main dark theme */}
        <PhoneMockup imgSrc="/dark theme.jpg" altText="Money Tracker Main Dashboard" />
      </section>

      {/* Problem & Solution Section */}
      <section className="landing-section animate-fade-up" id="problem-solution" style={{ borderTop: '1px solid #eef2f6', paddingTop: '100px' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">The Challenge & The Answer</span>
          <h2 className="landing-section-title">Cut through the financial noise</h2>
          <p className="landing-section-desc">
            Most expense apps are overwhelming. Here is why we built something completely different.
          </p>
        </div>

        <div className="problem-solution-grid">
          {/* The Problem Card */}
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
                <span><strong>Forced Bank Syncs:</strong> Demands login credentials to read your logs.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span><strong>Ad Clutter:</strong> Interrupts logs with banner ads and upgrade popups.</span>
              </li>
            </ul>
          </div>

          {/* The Solution Card */}
          <div className="prob-sol-card solution-card">
            <span className="card-pill">Our Answer</span>
            <h3 className="prob-sol-title">Simplicity & Speed First</h3>
            <p className="prob-sol-desc">
              Money Tracker is built for rapid control, absolute privacy, and global readiness.
            </p>
            <ul className="prob-sol-list">
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>3-Second Log Flow:</strong> Enter amount, pick category, save. Done.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>9 Languages Localized:</strong> Native interfaces in English, Spanish, French, Portuguese, Hindi, German, Filipino, Italian, and Japanese.</span>
              </li>
              <li className="prob-sol-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>150+ Currencies Supported:</strong> Custom formats, symbols, and decimal precision.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Showcase 1: Security and SQLite */}
      <section className="landing-section" id="security" style={{ borderTop: '1px solid #eef2f6', paddingTop: '100px' }}>
        <div className="feature-showcase-row">
          <div className="feature-showcase-content animate-fade-up">
            <span className="feature-showcase-tag">Security Guard</span>
            <h2 className="feature-showcase-title">Absolute Security & Biometric Locks</h2>
            <p className="feature-showcase-desc">
              Your financial records stay local. By operating offline-first, your personal data is saved inside an encrypted SQLite database stored securely on your phone.
            </p>
            <ul className="feature-showcase-list">
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Secure App Lock:</strong> Enable native Face ID / Fingerprint unlocks to protect transaction lists.</span>
              </li>
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Zero trackers:</strong> No background profiling, analytics scripts, or cookie trackers.</span>
              </li>
              <li className="feature-showcase-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Complete Offline Control:</strong> Keep tracking even when climbing mountains or boarding flights.</span>
              </li>
            </ul>
          </div>
          
          {/* Mockup displaying Lock screen screenshot */}
          <PhoneMockup imgSrc="/Lock screen.jpg" altText="App lock screen security" />
        </div>
      </section>

      {/* Feature Showcase 2: Theme Switcher */}
      <section className="landing-section" id="themes" style={{ paddingTop: '0px' }}>
        <div className="feature-showcase-row reverse">
          <div className="feature-showcase-content animate-fade-up">
            <span className="feature-showcase-tag">Visual Customization</span>
            <h2 className="feature-showcase-title">Polished Themes to Match Your Mood</h2>
            <p className="feature-showcase-desc">
              Interact with the selection switches below to preview the actual layouts and custom visual configurations of the Money Tracker app.
            </p>
            
            {/* Interactive selector switch buttons */}
            <div className="theme-selector-wrapper">
              {themeScreenshots.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`theme-chip-btn ${activeThemeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveThemeIndex(idx)}
                >
                  <span className="theme-chip-dot" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Mockup displaying chosen screenshot */}
          <PhoneMockup 
            imgSrc={themeScreenshots[activeThemeIndex].file} 
            altText={themeScreenshots[activeThemeIndex].name} 
          />
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="landing-section" id="features" style={{ borderTop: '1px solid #eef2f6' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">Powerful Tools</span>
          <h2 className="landing-section-title">All details. No distraction.</h2>
          <p className="landing-section-desc">
            Organize cash flow with premium utility structures designed to handle daily tracker needs in single steps.
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
      <section className="landing-section" id="pricing" style={{ borderTop: '1px solid #eef2f6' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">Subscriptions</span>
          <h2 className="landing-section-title">Transparent and simple plans</h2>
          <p className="landing-section-desc">
            Use the robust offline core version for free forever, or upgrade to synchronize data to multiple devices.
          </p>
        </div>

        {/* Region / Currency Selector */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pricing-region-selector">
            <button 
              type="button"
              className={`region-btn ${!isNepal ? 'active' : ''}`}
              onClick={() => setIsNepal(false)}
            >
              Global (USD)
            </button>
            <button 
              type="button"
              className={`region-btn ${isNepal ? 'active' : ''}`}
              onClick={() => setIsNepal(true)}
            >
              Nepal (NPR)
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Free Tier Card */}
          <div className="pricing-card">
            <h3 className="pricing-name">Free Tier</h3>
            <p className="pricing-desc">Comprehensive offline logs on a single Android device.</p>
            <div className="pricing-price">
              {isNepal ? 'Rs. 0' : '$0'}
              <span className="pricing-period">/ forever</span>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                Unlimited Local Transactions
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><path d="M12 6v12M17 12H7"/></svg>
                Monthly budget alert limits
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                Standard SVG chart metrics
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Raw CSV sheet export tools
              </li>
            </ul>
            <button onClick={scrollToSection('download')} className="btn btn-secondary" style={{ width: '100%' }}>Download Free APK</button>
          </div>

          {/* Pro Monthly Card */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>
            <h3 className="pricing-name">Pro Monthly</h3>
            <p className="pricing-desc">Real-time sync, premium themes, and unlimited custom tags/categories.</p>
            <div className="pricing-price">
              {isNepal ? 'Rs. 99' : '$2.99'}
              <span className="pricing-period">/ month</span>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><path d="M12 2a5 5 0 0 0-4.9 4.1 3.5 3.5 0 0 0-1.1-.1 3.5 3.5 0 0 0-3.5 3.5 3.5 3.5 0 0 0 3.5 3.5H18a4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-.1-.9A5 5 0 0 0 12 2z"/></svg>
                Real-time cloud sync & database backup
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/></svg>
                Custom transaction tags
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                Unlimited custom categories
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12c0 2.21 1.79 4 4 4h1a2 2 0 0 1 2 2c0 2.21 1.79 4 4 4z"/><circle cx="7.5" cy="10.5" r="1.5"/><circle cx="11.5" cy="7.5" r="1.5"/><circle cx="16.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/></svg>
                10+ premium dynamic themes
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-color)', flexShrink: 0 }}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3M14 9l2.5 2.5"/></svg>
                App security lock & biometric unlock
              </li>
            </ul>
            <button onClick={scrollToSection('download')} className="btn btn-primary" style={{ width: '100%' }}>Activate Monthly Pro</button>
          </div>

          {/* Pro Lifetime Card */}
          <div className="pricing-card popular" style={{ borderColor: 'var(--success)', boxShadow: '0 20px 48px rgba(16, 185, 129, 0.06)' }}>
            <span className="popular-badge" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>Best Value</span>
            <h3 className="pricing-name">Pro Lifetime</h3>
            <p className="pricing-desc">All premium updates and sync capabilities forever with a single payment.</p>
            <div className="pricing-price">
              {isNepal ? 'Rs. 999' : '$29.99'}
              <span className="pricing-period">/ lifetime</span>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <strong>Everything in Pro Monthly</strong>
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                One-time purchase, no recurring logs
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                Lifetime access to future updates
              </li>
              <li className="pricing-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--success)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                Priority developer support channels
              </li>
            </ul>
            <button onClick={scrollToSection('download')} className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #10b981, #059669)' }}>Activate Lifetime Pro</button>
          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="landing-section" id="faq" style={{ borderTop: '1px solid #eef2f6' }}>
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
      <section id="download" className="landing-section" style={{ borderTop: '1px solid #eef2f6', textAlign: 'center', padding: '120px 24px' }}>
        <h2 className="landing-section-title" style={{ fontSize: '48px' }}>Start Tracking Your Budget</h2>
        <p className="landing-section-desc" style={{ fontSize: '18px', marginTop: '16px' }}>
          Download the latest version of the Money Tracker Android APK. Safe, lightweight, and fast.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
          <a href="https://github.com/ronazpradhan/money-tracker-web/releases/download/v1.0.0/money-tracker.apk" download className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Download Direct APK
          </a>
          <a href="mailto:hi.ronajpradhan@gmail.com?subject=Money%20Tracker%20Support" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Contact Support
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
              A premium, offline-first personal finance tracker built for absolute security, speed, and clean analytical views.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">App Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={scrollToSection('problem-solution')} className="footer-link-item-btn">The Challenge</button></li>
              <li><button onClick={scrollToSection('security')} className="footer-link-item-btn">Security Guard</button></li>
              <li><button onClick={scrollToSection('themes')} className="footer-link-item-btn">Visual Themes</button></li>
              <li><button onClick={scrollToSection('features')} className="footer-link-item-btn">Core Features</button></li>
              <li><button onClick={scrollToSection('pricing')} className="footer-link-item-btn">App Subscriptions</button></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">Legal & Support</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => setShowPrivacy(true)} className="footer-link-item-btn">Privacy Policy</button></li>
              <li><button onClick={() => setShowTerms(true)} className="footer-link-item-btn">Terms of Service</button></li>
              <li><a href="mailto:hi.ronajpradhan@gmail.com?subject=Money%20Tracker%20Support" className="footer-link-item-btn" style={{ textDecoration: 'none' }}>Email Support</a></li>
              <li><a href="mailto:support@moneytracker.local" className="footer-link-item-btn" style={{ textDecoration: 'none' }}>Direct Support</a></li>
            </ul>
          </div>

          {/* Column 4: Stats Counters */}
          <div className="footer-column">
            <h4 className="footer-column-title">App Statistics</h4>
            <div style={{ marginTop: '12px' }}>
              <img 
                src="https://hits.sh/money-tracker-android-web.vercel.app.svg?view=total&label=Total%20Visitors&color=3d8bfd" 
                alt="Total Visitors" 
                style={{ display: 'block', maxWidth: '100%', height: '20px', borderRadius: '3px' }}
              />
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Money Tracker. All rights reserved. Made by <a href="https://pradhanronaj.com.np/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#7c3aed'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-color)'}>Ronaj Pradhan</a>.
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            Built offline-first &bull; Encrypted sandboxes
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
              <p>Money Tracker provides a free tier with unlimited local storage and transactions. Cloud Sync and advanced features require an active Money Tracker Pro subscription.</p>
              
              <h4>2. Disclaimers</h4>
              <p>The application is provided "as is", without warranty of any kind. Money Tracker is not a financial institution, and the data provided in the app is for personal tracking purposes only. We do not provide financial advice.</p>
              
              <h4>3. Limitation of Liability</h4>
              <p>In no event shall Money Tracker or its developers be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your use of the app.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }} onClick={() => setShowTerms(false)}>
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
              <p>By default, Money Tracker operates entirely offline. All your transactions, budgets, categories, and settings are saved on your phone's internal storage inside an AES-256 encrypted SQLite database. We do not have access to this data.</p>
              
              <h4>3. Cloud Sync (Pro Feature)</h4>
              <p>If you choose to subscribe to Pro and enable Cloud Sync, your data is securely transmitted over HTTPS and stored in our secure database endpoint to allow multi-device syncing. You have the right to request deletion of your synced data at any time.</p>
              
              <h4>4. Biometric Authentication</h4>
              <p>Face Recognition and Fingerprint data are processed entirely by your device's native hardware. The app never sees or stores your biometric information.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }} onClick={() => setShowPrivacy(false)}>
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

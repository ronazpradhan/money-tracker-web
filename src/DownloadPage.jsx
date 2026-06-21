import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';

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

export default function DownloadPage() {
  const handleDownloadClick = () => {
    // Only log locally, no custom database or backend analytics endpoints.
    console.log("APK download clicked (v1.0.26)");
  };

  useEffect(() => {
    document.title = "Money Tracker Android APK Download";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Download the latest APK update for Money Tracker.";
  }, []);

  return (
    <div className="landing-wrapper">
      <header className="landing-header" style={{ justifyContent: 'center' }}>
        <a href="/" className="brand-section">
          <LogoSVG size={32} />
          <span className="brand-name">Money Tracker</span>
        </a>
        <ThemeToggle />
      </header>

      <section className="landing-section" style={{ paddingTop: '140px', paddingBottom: '60px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="animate-fade-up" style={{ maxWidth: '600px', width: '100%', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '32px 24px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)' }}>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '36px' }}>
            <LogoSVG size={88} />
            <h1 className="landing-section-title" style={{ fontSize: '36px', marginTop: '24px', marginBottom: '12px' }}>Money Tracker</h1>
            <p className="landing-section-desc" style={{ fontSize: '16px', maxWidth: '420px', lineHeight: '1.6' }}>
              A simple offline-first Android app for tracking income, expenses, budgets, and backups.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--surface-2)', borderRadius: '16px', padding: '24px', marginBottom: '36px', textAlign: 'center', border: '1px solid var(--border-strong)' }}>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Current Version</div>
            <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Version 1.0.26</div>
            <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Build 26</div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <a href="https://github.com/ronazpradhan/money-tracker-web/releases/download/v1.0.26/MoneyTracker-v1.0.26.apk" onClick={handleDownloadClick} className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              Download APK v1.0.26
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)' }}>What's New in v1.0.26</h3>
            <ul style={{ paddingLeft: '24px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>
              <li>Privacy-friendly anonymous analytics added using PostHog.</li>
              <li>Privacy Policy and Terms acceptance improved.</li>
              <li>Full-screen What's New screen added.</li>
              <li>Theme reset bug fixed after update.</li>
              <li>Full-screen Edit Profile screen added.</li>
              <li>Mascot avatar selection added.</li>
              <li>General polish and stability improvements.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)' }}>Update Instructions</h3>
            <ol style={{ paddingLeft: '24px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px' }}>
              <li>Download the APK</li>
              <li>Open the downloaded file</li>
              <li>Allow install from this source if Android asks</li>
              <li>Install the update</li>
              <li>Your local app data should stay safe, but export a backup before updating</li>
            </ol>

            <div style={{ backgroundColor: 'var(--surface-2)', borderLeft: '4px solid var(--danger)', padding: '20px', borderRadius: '4px 12px 12px 4px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '14px', lineHeight: '1.6' }}>
                  <strong>Before updating, we recommend exporting a backup from Settings inside the app.</strong> Money Tracker stores data locally on your device.
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--surface-2)', borderLeft: '4px solid var(--yellow)', padding: '20px', borderRadius: '4px 12px 12px 4px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '14px', lineHeight: '1.6' }}>
                  Android may show a <strong>Play Protect</strong> warning because this APK is distributed directly from our website and is not yet listed on Google Play. Only install Money Tracker from this official download page.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

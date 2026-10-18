import React, { useEffect } from 'react';
import { Brand, Penny, Eyebrow } from './components/ui.jsx';

const VERSION = '1.1.0';
const BUILD = 28;
const APK_URL = 'https://github.com/ronazpradhan/money-tracker-web/releases/download/v1.1.0/MoneyTracker-v1.1.0.apk';

const WHATS_NEW = [
  ['Meet Penny', 'A cute ginger cat mascot who guides you, cheers when you save and warns you near your budget.'],
  ['Penny Theme', 'The light theme is now warm cream and orange, inspired by Penny.'],
  ['Photo Proof', 'Attach photos of receipts, bills, invoices or warranty cards to any transaction.'],
  ['New Trends Chart', 'Clear money in and out bars with tappable details in Analytics.'],
  ['Smoother Editing', 'Calendar date picker, unsaved-changes warning, and income stays income when edited.'],
  ['Polish', 'New app icon, clearer messages and general stability improvements.'],
];

const STEPS = [
  'Download the APK',
  'Open the downloaded file',
  'Allow install from this source if Android asks',
  'Install the update',
  'Your local app data should stay safe, but export a backup before updating',
];

export default function DownloadPage() {
  const handleDownloadClick = () => {
    try {
      if (window.posthog) {
        window.posthog.capture('apk_download_clicked', {
          app_version: VERSION,
          build: BUILD,
          source: 'website',
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.title = 'Money Tracker Android APK Download';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Download the latest APK update for Money Tracker.';
  }, []);

  return (
    <div className="site">
      <header className="nav">
        <div className="nav__pill dl-nav">
          <Brand />
          <a href="/" className="back-link">&larr; Back to home</a>
        </div>
      </header>

      <main className="dl">
        <div className="wrap dl__grid">
          <section className="dl__card dl__hero rise">
            <Penny pose="yay" size="lg" eager />
            <h1 className="h2">Get Money Tracker</h1>
            <p className="lead">A simple offline-first Android app for tracking income, expenses, budgets and backups.</p>

            <div className="dl__version">
              <div className="dl__version-label">Current version</div>
              <div className="dl__version-num">v{VERSION}</div>
              <div className="dl__version-build">Build {BUILD}</div>
            </div>

            <a href={APK_URL} onClick={handleDownloadClick} className="btn btn-primary btn-lg btn-block">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
              Download APK v{VERSION}
            </a>
          </section>

          <section className="dl__card rise" style={{ '--d': '120ms' }}>
            <Eyebrow>Release notes</Eyebrow>
            <h2 className="dl__h3">What's new in v{VERSION}</h2>
            <ul className="dl__list dl__list--new">
              {WHATS_NEW.map(([title, text]) => (
                <li key={title}><span><strong>{title}.</strong> {text}</span></li>
              ))}
            </ul>

            <h2 className="dl__h3">How to update</h2>
            <ol className="dl__list dl__list--steps">
              {STEPS.map((s) => <li key={s}><span>{s}</span></li>)}
            </ol>

            <div className="note note--warn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
              </svg>
              <p><strong>Before updating, export a backup from Settings inside the app.</strong> Money Tracker stores data locally on your device.</p>
            </div>
            <div className="note note--info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              <p>Android may show a <strong>Play Protect</strong> warning because this APK is distributed directly from our website and is not yet listed on Google Play. Only install Money Tracker from this official download page.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

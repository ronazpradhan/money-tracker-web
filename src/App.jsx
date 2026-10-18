import React, { useState, useEffect, useCallback } from 'react';
import { faqsList } from './data.jsx';
import { Brand, Penny, Phone, Eyebrow, DOWNLOAD_PAGE } from './components/ui.jsx';

const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'themes', label: 'Themes' },
  { id: 'faq', label: 'FAQ' },
];

const THEMES = [
  { name: 'Dark Slate', file: '/dark theme.jpg', dot: '#1e293b' },
  { name: 'Classic Light', file: '/Light theme.jpg', dot: '#e2e8f0' },
  { name: 'Crimson', file: '/crimson web theme.jpg', dot: '#cd5d67' },
  { name: 'Pink Ribbon', file: '/pink ribbon.jpg', dot: '#f472b6' },
];

const STATEMENT = [
  { label: 'Salary', amount: '+NPR 31,000', income: true },
  { label: 'Groceries', amount: '−NPR 1,250' },
  { label: 'Coffee', amount: '−NPR 180' },
  { label: 'Transport', amount: '−NPR 90' },
];

const COMPARE = [
  { row: 'Account to start', us: 'None', them: 'Usually required' },
  { row: 'Where your records live', us: 'On your phone', them: 'Their servers' },
  { row: 'Works without internet', us: 'Always', them: 'Often not' },
  { row: 'Price', us: 'Free', them: 'Often a subscription' },
];

const STEPS = [
  { n: '01', title: 'Download the APK', text: 'Tap the button on the download page. The file comes straight from our official GitHub release.' },
  { n: '02', title: 'Allow the install', text: 'Open the file. If Android asks, allow installs from your browser for this one app.' },
  { n: '03', title: 'Log your first entry', text: 'Open Money Tracker, tap +, type an amount. Penny takes it from there.' },
];

let hasIncrementedVisit = false;

function useVisitorCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (hasIncrementedVisit) return;
    hasIncrementedVisit = true;
    fetch('https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fmoney-tracker-android-web.vercel.app%2F')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total_hits === 'number') setCount(data.total_hits);
      })
      .catch((err) => console.error('Error fetching visitors:', err));
  }, []);
  return count;
}

function Modal({ title, subtitle, onClose, children, footer }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__card" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <div>
            <h3 className="modal__title">{title}</h3>
            <span className="modal__sub">{subtitle}</span>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__foot">{footer}</div>
      </div>
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const visitorCount = useVisitorCount();

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showTerms || showPrivacy || menuOpen);
  }, [showTerms, showPrivacy, menuOpen]);

  const goTo = useCallback((id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const goTop = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site">

      {/* ---------- Nav ---------- */}
      <header className="nav">
        <div className="nav__pill">
          <Brand onClick={goTop} />
          <nav className="nav__links" aria-label="Sections">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={goTo(l.id)}>{l.label}</a>
            ))}
          </nav>
          <a href={DOWNLOAD_PAGE} className="btn btn-primary btn-sm nav__cta">Download APK</a>
          <button
            type="button"
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={`drawer ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={goTo(l.id)} className="drawer__link">{l.label}</a>
          ))}
          <a href={DOWNLOAD_PAGE} className="btn btn-primary btn-block">Download APK</a>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <div className="wrap hero__copy">
            <span className="chip rise">
              <Penny pose="hello" size="xs" eager />
              Meet Penny, new in v1.1.0
            </span>
            <h1 className="display rise" style={{ '--d': '80ms' }}>
              Track your money.<br />
              <span className="display__soft">It never leaves your phone.</span>
            </h1>
            <p className="lead rise" style={{ '--d': '160ms' }}>
              A free, offline Android app for income, expenses and budgets.
              No sign-up, no cloud sync, no financial data collection.
            </p>
            <div className="cta-row rise" style={{ '--d': '240ms' }}>
              <a href={DOWNLOAD_PAGE} className="btn btn-primary btn-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
                Download for Android
              </a>
              <a href="#privacy" onClick={goTo('privacy')} className="btn btn-secondary btn-lg">See how privacy works</a>
            </div>
            <p className="meta rise" style={{ '--d': '300ms' }}>
              Free <span aria-hidden="true">·</span> No account <span aria-hidden="true">·</span> Works offline
            </p>
          </div>

          <div className="stage rise" style={{ '--d': '360ms' }}>
            <Phone src="/Light theme.jpg" alt="Money Tracker in the Classic Light theme" className="phone--side phone--left" />
            <Phone src="/homepage.jpg" alt="Money Tracker home screen with income, expenses and budget" className="phone--main" eager />
            <Phone src="/dark theme.jpg" alt="Money Tracker in the Dark Slate theme" className="phone--side phone--right" />
            <div className="stage__penny">
              <p className="bubble">Hi, I'm Penny! I keep your budget on track.</p>
              <Penny pose="hello" size="lg" eager />
            </div>
          </div>

          <ul className="checks wrap">
            <li>No account needed</li>
            <li>Stored on your device</li>
            <li>Works without internet</li>
            <li>CSV export anytime</li>
          </ul>
        </section>

        {/* ---------- Statement ---------- */}
        <section className="section">
          <div className="wrap split">
            <div>
              <Eyebrow>Your month, at a glance</Eyebrow>
              <h2 className="h2">Know where every rupee went.</h2>
              <p className="lead lead--left">
                Every entry lands in a clean monthly statement. Income in green, spending in black,
                and what is left of your budget right at the bottom.
              </p>
            </div>
            <div className="statement-wrap">
              <Penny pose="cash" size="md" className="statement-penny" />
              <div className="statement" aria-label="Example monthly statement">
                <div className="statement__head">
                  <span>Monthly statement</span>
                  <span>June 2026</span>
                </div>
                <ul className="statement__rows">
                  {STATEMENT.map((r) => (
                    <li key={r.label}>
                      <span>{r.label}</span>
                      <span className="statement__leader" />
                      <span className={`statement__amt ${r.income ? 'is-income' : ''}`}>{r.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="statement__total">
                  <span>Budget left</span>
                  <span className="statement__leader" />
                  <span>NPR 29,480</span>
                </div>
                <p className="statement__note">Every entry stays on this phone. Nothing is uploaded.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Features (bento) ---------- */}
        <section className="section section--line" id="features">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Features</Eyebrow>
              <h2 className="h2">Everything you need. Nothing you don't.</h2>
              <p className="lead">Fast to log, easy to read, and yours to keep.</p>
            </div>

            <div className="bento">
              <article className="tile tile--wide tile--penny">
                <div className="tile__viz viz-penny">
                  <div className="viz-penny__item">
                    <Penny pose="yay" size="md" />
                    <span className="mini-bubble">Saved NPR 2,000!</span>
                  </div>
                  <div className="viz-penny__item">
                    <Penny pose="uhoh" size="md" />
                    <span className="mini-bubble mini-bubble--warn">90% of budget used</span>
                  </div>
                </div>
                <h3 className="tile__title">Penny keeps you honest</h3>
                <p className="tile__text">She cheers when you save and warns you when you get close to your budget. No nagging, just a nudge.</p>
              </article>

              <article className="tile">
                <div className="tile__viz viz-pad" aria-hidden="true">
                  <div className="viz-pad__display">NPR 180</div>
                  <div className="viz-pad__keys">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'].map((k) => <span key={k}>{k}</span>)}
                  </div>
                </div>
                <h3 className="tile__title">Log it in seconds</h3>
                <p className="tile__text">A custom numpad with haptic feedback. Open, type, done.</p>
              </article>

              <article className="tile">
                <div className="tile__viz viz-budget" aria-hidden="true">
                  <div className="viz-budget__row"><span>June budget</span><strong>62%</strong></div>
                  <div className="viz-budget__bar"><span /></div>
                  <div className="viz-budget__row viz-budget__row--soft"><span>NPR 3,100 spent</span><span>NPR 1,900 left</span></div>
                </div>
                <h3 className="tile__title">A budget you can see</h3>
                <p className="tile__text">Set a monthly limit and always know how much is left.</p>
              </article>

              <article className="tile tile--wide">
                <div className="tile__viz viz-chart" aria-hidden="true">
                  {[[60, 30], [45, 50], [70, 35], [55, 40], [80, 45], [65, 25]].map(([inc, out], i) => (
                    <div className="viz-chart__pair" key={i}>
                      <span className="viz-chart__in" style={{ '--h': inc }} />
                      <span className="viz-chart__out" style={{ '--h': out }} />
                    </div>
                  ))}
                </div>
                <h3 className="tile__title">Charts that explain your month</h3>
                <p className="tile__text">The new trends chart shows money in and out side by side. Tap any bar for the details.</p>
              </article>

              <article className="tile">
                <div className="tile__viz viz-receipt" aria-hidden="true">
                  <div className="viz-receipt__paper">
                    <span /><span /><span /><span className="short" />
                  </div>
                  <div className="viz-receipt__cam">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
                  </div>
                </div>
                <h3 className="tile__title">Photo proof</h3>
                <p className="tile__text">Attach receipts, bills or warranty cards to any transaction.</p>
              </article>

              <article className="tile">
                <div className="tile__viz viz-file" aria-hidden="true">
                  <span className="viz-file__chip">transactions.csv</span>
                  <span className="viz-file__chip viz-file__chip--soft">Excel · Sheets</span>
                </div>
                <h3 className="tile__title">Your data, your file</h3>
                <p className="tile__text">Export or import your full history as CSV whenever you like.</p>
              </article>

              <article className="tile">
                <div className="tile__viz viz-lock" aria-hidden="true">
                  <div className="viz-lock__dots"><span className="on" /><span className="on" /><span className="on" /><span /></div>
                  <span className="viz-lock__label">Passcode or biometrics</span>
                </div>
                <h3 className="tile__title">Locked when you want it</h3>
                <p className="tile__text">Add an optional app lock so nobody else can peek.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- Privacy ---------- */}
        <section className="section section--line" id="privacy">
          <div className="wrap split split--media">
            <div>
              <Eyebrow>Privacy</Eyebrow>
              <h2 className="h2">Your records stay with you.</h2>
              <p className="lead lead--left">
                Money Tracker keeps every transaction in local storage on your Android phone.
                There is no account and no cloud copy, so there is nothing for us to see.
              </p>

              <div className="compare" role="table" aria-label="Money Tracker compared with many finance apps">
                <div className="compare__row compare__row--head" role="row">
                  <span role="columnheader" />
                  <span role="columnheader">Money Tracker</span>
                  <span role="columnheader">Many finance apps</span>
                </div>
                {COMPARE.map((c) => (
                  <div className="compare__row" role="row" key={c.row}>
                    <span role="rowheader">{c.row}</span>
                    <span role="cell" className="compare__us">{c.us}</span>
                    <span role="cell">{c.them}</span>
                  </div>
                ))}
              </div>

              <p className="fine">
                The app uses limited anonymous usage analytics to improve features. It never includes amounts,
                notes or balances, and you can turn it off in Settings.
              </p>
            </div>

            <div className="media">
              <Phone src="/Lock screen.jpg" alt="Money Tracker lock screen asking for a passcode" className="phone--tilt" />
              <Penny pose="idle" size="lg" className="media__penny" />
            </div>
          </div>
        </section>

        {/* ---------- Themes ---------- */}
        <section className="section section--line" id="themes">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Themes</Eyebrow>
              <h2 className="h2">Make it feel like yours.</h2>
              <p className="lead">Switch themes anytime in Settings. Your data stays exactly where it is.</p>
            </div>
          </div>
          <div className="theme-rail">
            {THEMES.map((t) => (
              <figure className="theme" key={t.name}>
                <Phone src={t.file} alt={`Money Tracker in the ${t.name} theme`} />
                <figcaption><span className="theme__dot" style={{ background: t.dot }} />{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Install ---------- */}
        <section className="section section--line" id="install">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow>Install</Eyebrow>
              <h2 className="h2">Three steps to your first entry.</h2>
            </div>
            <ol className="steps">
              {STEPS.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step__n">{s.n}</span>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="fine fine--center">
              Android may show a Play Protect warning because the app is not on Google Play yet.
              Only install Money Tracker from this website.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section section--line" id="faq">
          <div className="wrap faq">
            <div className="faq__intro">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="h2">Fair questions.</h2>
              <Penny pose="thinking" size="lg" className="faq__penny" />
              <p className="fine">
                Still stuck? <a href="mailto:hi.ronajpradhan@gmail.com?subject=Money%20Tracker%20Support">Email support</a>
              </p>
            </div>
            <div className="faq__list">
              {faqsList.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div className={`qa ${open ? 'is-open' : ''}`} key={f.q}>
                    <button type="button" className="qa__q" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                      <span>{f.q}</span>
                      <span className="qa__icon" aria-hidden="true" />
                    </button>
                    {open && <p className="qa__a">{f.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="section">
          <div className="wrap">
            <div className="finale">
              <Penny pose="yay" size="xl" className="finale__penny" />
              <h2 className="h2 finale__title">Your money. Your phone.<br />Nobody else.</h2>
              <p className="lead">Free, offline, and ready in under a minute.</p>
              <div className="cta-row">
                <a href={DOWNLOAD_PAGE} className="btn btn-primary btn-lg">Download for Android</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <Brand onClick={goTop} />
            <p>A simple offline Android money tracker for income, expenses, budgets and manual backups.</p>
            <Penny pose="idle" size="sm" />
          </div>
          <div>
            <h4 className="footer__title">Explore</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.id}><a href={`#${l.id}`} onClick={goTo(l.id)}>{l.label}</a></li>
              ))}
              <li><a href={DOWNLOAD_PAGE}>Download APK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__title">Legal & support</h4>
            <ul className="footer__links">
              <li><button type="button" onClick={() => setShowPrivacy(true)}>Privacy Policy</button></li>
              <li><button type="button" onClick={() => setShowTerms(true)}>Terms of Service</button></li>
              <li><a href="mailto:hi.ronajpradhan@gmail.com?subject=Money%20Tracker%20Support">Email support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__title">Visitors</h4>
            <p className="footer__stat">
              <span className="live-dot" />
              {visitorCount > 0 ? visitorCount.toLocaleString() : 'Loading...'}
            </p>
          </div>
        </div>
        <div className="wrap footer__bottom">
          <span>&copy; {new Date().getFullYear()} Money Tracker. All rights reserved.</span>
          <span>Made by <a href="https://pradhanronaj.com.np/" target="_blank" rel="noopener noreferrer">Ronaj Pradhan</a></span>
        </div>
      </footer>

      {/* ---------- Modals ---------- */}
      {showTerms && (
        <Modal
          title="Terms of Service"
          subtitle="Last Updated: June 2026"
          onClose={() => setShowTerms(false)}
          footer={<button type="button" className="btn btn-primary" onClick={() => setShowTerms(false)}>I Accept these Terms</button>}
        >
          <p>Welcome to Money Tracker. By using our application, you agree to these Terms of Service.</p>
          <h4>1. Usage Limits</h4>
          <p>Money Tracker provides an offline experience with local storage. No accounts or subscriptions are required.</p>
          <h4>2. Disclaimers</h4>
          <p>The application is provided "as is", without warranty of any kind. Money Tracker is not a financial institution, and the data provided in the app is for personal tracking purposes only. We do not provide financial advice.</p>
          <h4>3. Limitation of Liability</h4>
          <p>In no event shall Money Tracker or its developers be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your use of the app.</p>
        </Modal>
      )}

      {showPrivacy && (
        <Modal
          title="Privacy Policy"
          subtitle="Last Updated: June 2026"
          onClose={() => setShowPrivacy(false)}
          footer={<button type="button" className="btn btn-secondary" onClick={() => setShowPrivacy(false)}>Close</button>}
        >
          <p>Your privacy is critically important to us. We have built Money Tracker from the ground up to respect your personal financial data.</p>
          <h4>1. Data Collection & Analytics</h4>
          <p>Money Tracker is offline-first. Financial records are stored locally on your device. The app does not upload income amounts, expense amounts, notes, balances, custom category names, bank details, contacts, location, phone number, email, or personal financial records.</p>
          <p>Money Tracker uses PostHog for limited anonymous usage analytics to improve the app. Analytics may include app opens, app version, Terms/Privacy acceptance, settings viewed, language changed, currency changed, theme changed, and basic feature usage.</p>
          <p>A random anonymous installation ID may be used to count active users without login. This ID is not linked to name, phone, email, or financial data. Users can disable anonymous analytics from Settings in the Android app. APK download counts on the website may come from GitHub Releases download statistics.</p>
          <h4>2. Local Data Storage</h4>
          <p>By default, Money Tracker operates offline for your financial data. All your transactions, budgets, categories, and settings are saved on your phone's internal storage using local SQLite storage. We do not have access to this data.</p>
          <h4>3. Biometric Authentication</h4>
          <p>Face Recognition and Fingerprint data are processed entirely by your device's native hardware. The app never sees or stores your biometric information.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;

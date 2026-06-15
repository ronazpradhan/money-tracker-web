import { useMemo, useState } from 'react';

const apkUrl = import.meta.env.VITE_APK_URL || '#download';
const contactEmail = 'hi.ronajpradhan@gmail.com';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Terms', href: '#terms' },
  { label: 'FAQ', href: '#faq' },
];

const highlights = [
  { metric: '3 sec', label: 'quick expense entry' },
  { metric: '10+', label: 'premium themes' },
  { metric: 'CSV', label: 'export and import' },
];

const features = [
  {
    title: 'Fast expense logging',
    tag: 'Daily use',
    description: 'Numpad entry, notes, categories, and recent history make tracking feel light enough to keep doing.',
  },
  {
    title: 'Budget ring',
    tag: 'Planning',
    description: 'Set a monthly budget and see spent, remaining, and over-budget states without opening a spreadsheet.',
  },
  {
    title: 'Analytics dashboard',
    tag: 'Insight',
    description: 'Donut charts, weekly bars, category ranks, and Pro ranges show where money is actually moving.',
  },
  {
    title: 'Cloud sync',
    tag: 'Pro',
    description: 'Sync account data across devices and keep expenses backed up beyond a single install.',
  },
  {
    title: 'CSV export and import',
    tag: 'Control',
    description: 'Export your records for reports, backup, migration, or deeper review in another tool.',
  },
  {
    title: 'App lock and biometrics',
    tag: 'Security',
    description: 'Protect personal finance data with passcode lock, security questions, and biometric unlock.',
  },
];

const pricing = [
  {
    name: 'Free',
    description: 'For personal tracking on one Android device.',
    monthly: '$0',
    lifetime: '$0',
    cta: 'Download app',
    href: apkUrl,
    features: ['Expense tracking', 'Monthly budget', 'Recent transactions', 'Basic analytics', 'CSV export'],
  },
  {
    name: 'Pro',
    description: 'For sync, deeper analytics, and premium control.',
    monthly: '$2.99',
    lifetime: '$24.99',
    cta: 'Contact for Pro',
    href: `mailto:${contactEmail}?subject=Money%20Tracker%20PRO%20Upgrade`,
    featured: true,
    features: ['Cloud sync and backup', '6 month and 1 year analytics', 'Premium themes', 'Custom categories', 'Import tools', 'Priority activation'],
  },
];

const aboutStats = [
  ['Offline-first feel', 'Cached data loads quickly while sync catches up.'],
  ['Built for Android', 'Designed around the existing Money Tracker mobile app.'],
  ['Privacy-minded', 'Secure storage, app lock, and export control are part of the product.'],
];

const faqs = [
  {
    question: 'Is this the Android app?',
    answer: 'Yes. This website is a Vite React marketing site for the Money Tracker Android app. It does not change the Expo or Android app code.',
  },
  {
    question: 'How do I connect the download button on Vercel?',
    answer: 'Set VITE_APK_URL in Vercel to your real APK, Play Store, GitHub Release, or landing download URL.',
  },
  {
    question: 'What is included in Pro?',
    answer: 'Pro is positioned around cloud sync, backup, longer analytics ranges, custom categories, imports, and premium themes.',
  },
];

const terms = [
  {
    title: '1. Usage Limits',
    text: 'Money Tracker provides a free tier with unlimited local storage and transactions. Cloud Sync and advanced features require an active Money Tracker Pro subscription.',
  },
  {
    title: '2. Disclaimers',
    text: 'The application is provided "as is", without warranty of any kind. Money Tracker is not a financial institution, and the data provided in the app is for personal tracking purposes only. We do not provide financial advice.',
  },
  {
    title: '3. Limitation of Liability',
    text: 'In no event shall Money Tracker or its developers be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your use of the app.',
  },
];

const privacy = [
  {
    title: '1. Data Collection & Analytics',
    text: 'We gather absolutely no personally identifiable information (PII). We do not track your behavior, log your sessions, or run third-party advertising services inside the app.',
  },
  {
    title: '2. Local Data Storage',
    text: "By default, Money Tracker operates entirely offline. All your transactions, budgets, categories, and settings are saved on your phone's internal storage inside an AES-256 encrypted SQLite database. We do not have access to this data.",
  },
  {
    title: '3. Cloud Sync (Pro Feature)',
    text: 'If you choose to subscribe to Pro and enable Cloud Sync, your data is securely transmitted over HTTPS and stored in our secure database endpoint to allow multi-device syncing. You have the right to request deletion of your synced data at any time.',
  },
  {
    title: '4. Biometric Authentication',
    text: "Face Recognition and Fingerprint data are processed entirely by your device's native hardware. The app never sees or stores your biometric information.",
  },
];

function App() {
  const [billing, setBilling] = useState('monthly');
  const [activeFaq, setActiveFaq] = useState(0);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Money Tracker home">
          <img src="/money-tracker-logo-light.png" alt="" />
          <span>Money Tracker</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-button" href="#download">
          Get Android app
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Android expense tracker</p>
            <h1>Money Tracker</h1>
            <p className="hero-lede">
              A clean daily money app for tracking expenses, watching budgets, understanding category trends, and keeping your records backed up.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#download">
                Download app
              </a>
              <a className="secondary-button" href="#pricing">
                View pricing
              </a>
            </div>

            <div className="hero-proof" aria-label="Product highlights">
              {highlights.map((item) => (
                <div key={item.label}>
                  <strong>{item.metric}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="phone-stage" aria-label="Money Tracker app preview">
            <div className="phone">
              <div className="phone-bar" />
              <div className="app-screen">
                <div className="screen-header">
                  <div>
                    <span>Good evening,</span>
                    <strong>Ronaj</strong>
                  </div>
                  <small>June 2026</small>
                </div>

                <div className="budget-card">
                  <div>
                    <span>Monthly spending</span>
                    <strong>$1,248</strong>
                    <small>of $2,000 budget</small>
                  </div>
                  <div className="budget-ring">
                    <b>38%</b>
                    <span>left</span>
                  </div>
                </div>

                <div className="category-row">
                  {['Food', 'Travel', 'Bills'].map((label, index) => (
                    <div key={label} className={`category-chip chip-${index + 1}`}>
                      <i />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="chart-card">
                  {[42, 70, 34, 86, 58, 48, 76].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>

                <div className="transaction-list">
                  {[
                    ['Food & Dining', 'Dinner with friends', '-$32.40'],
                    ['Transport', 'Metro card refill', '-$18.00'],
                    ['Utilities', 'Internet bill', '-$55.00'],
                  ].map(([title, note, amount]) => (
                    <div className="transaction-row" key={title}>
                      <i />
                      <div>
                        <strong>{title}</strong>
                        <span>{note}</span>
                      </div>
                      <b>{amount}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="floating-note note-sync">
              <span />
              Cloud sync ready
            </div>
            <div className="floating-note note-export">CSV export built in</div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <SectionIntro
            eyebrow="Features"
            title="Everything a daily tracker needs"
            text="The site copy mirrors the actual app: budget rings, category views, analytics, export tools, account sync, passcode lock, and premium themes."
          />

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span>{feature.tag}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="insight-section">
          <div>
            <p className="eyebrow">Analytics</p>
            <h2>Readable trends, not finance theater</h2>
            <p>
              The app answers practical questions: where did spending go, which categories are climbing, and how close are you to the monthly limit?
            </p>
          </div>
          <div className="insight-board">
            <div className="donut" />
            <div className="rank-list">
              {[
                ['Food', '34%'],
                ['Transport', '18%'],
                ['Subscriptions', '12%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple plans for the Android app"
            text="Keep free tracking available, then make Pro feel like a meaningful upgrade for sync, analytics, customization, and backup."
          />

          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')} type="button">
              Monthly
            </button>
            <button className={billing === 'lifetime' ? 'active' : ''} onClick={() => setBilling('lifetime')} type="button">
              Lifetime
            </button>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="plan-badge">Best value</span>}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <strong>{plan[billing]}</strong>
                <small>{billing === 'monthly' ? 'per month' : 'one-time'}</small>
                <a className={plan.featured ? 'primary-button' : 'secondary-button'} href={plan.href}>
                  {plan.cta}
                </a>
                <ul>
                  {plan.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>Made for people who actually log expenses</h2>
            <p>
              Money Tracker is an Android-first personal finance app focused on speed, privacy, and clear feedback. It keeps the daily workflow small while still offering deeper analytics and sync when users want more.
            </p>
          </div>
          <div className="about-list">
            {aboutStats.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="legal-section" id="terms">
          <LegalPanel
            eyebrow="Terms"
            title="Terms of Service"
            intro="Welcome to Money Tracker. By using our application, you agree to these Terms of Service."
            items={terms}
          />
          <LegalPanel
            eyebrow="Privacy"
            title="Privacy Policy"
            intro="Your privacy is critically important to us. We have built Money Tracker from the ground up to respect your personal financial data."
            items={privacy}
            id="privacy"
          />
        </section>

        <section className="faq-section" id="faq">
          <SectionIntro
            eyebrow="FAQ"
            title="Deployment notes and product answers"
            text="Useful defaults for launching this site on Vercel and positioning the app clearly."
          />

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <button
                className={`faq-item ${activeFaq === index ? 'open' : ''}`}
                key={faq.question}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                type="button"
              >
                <span>
                  <strong>{faq.question}</strong>
                  {activeFaq === index && <em>{faq.answer}</em>}
                </span>
                <b>{activeFaq === index ? '-' : '+'}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="download-section" id="download">
          <div>
            <p className="eyebrow">Download</p>
            <h2>Ready for Vercel</h2>
            <p>
              Deploy this folder as a Vite project. Add a real APK, Play Store, or GitHub Release link through the Vercel environment variable <code>VITE_APK_URL</code>.
            </p>
          </div>
          <div className="download-actions">
            <a className="primary-button" href={apkUrl}>
              Download Android app
            </a>
            <a className="secondary-button" href={`mailto:${contactEmail}?subject=Money%20Tracker%20Website`}>
              Contact
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/money-tracker-logo-light.png" alt="" />
          <div>
            <strong>Money Tracker</strong>
            <span>Android expense tracking with budgets, analytics, sync, and privacy.</span>
          </div>
        </div>

        <div className="footer-columns">
          <FooterColumn title="Product" links={['Features', 'Pricing', 'About']} />
          <FooterColumn title="App" links={['Android', 'Cloud sync', 'CSV export']} />
          <FooterColumn
            title="Legal"
            links={[
              { label: 'Terms of Service', href: '#terms' },
              { label: 'Privacy Policy', href: '#privacy' },
              { label: `Copyright ${year}` },
            ]}
          />
          <FooterColumn title="Contact" links={[contactEmail, 'Pro activation']} />
        </div>
      </footer>
    </>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function LegalPanel({ eyebrow, title, intro, items, id }) {
  return (
    <article className="legal-panel" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="legal-date">Last Updated: June 2026</span>
      <p className="legal-intro">{intro}</p>
      <div className="legal-list">
        {items.map((item) => (
          <section key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <strong>{title}</strong>
      {links.map((link) => (
        typeof link === 'string' ? (
          <span key={link}>{link}</span>
        ) : link.href ? (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ) : (
          <span key={link.label}>{link.label}</span>
        )
      ))}
    </div>
  );
}

export default App;

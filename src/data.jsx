import React from 'react';

export const themeScreenshots = [
  { name: 'Dark Slate Theme', file: '/dark theme.jpg', color: '#1e293b' },
  { name: 'Classic Light Theme', file: '/Light theme.jpg', color: '#64748b' },
  { name: 'Crimson Web Theme', file: '/crimson web theme.jpg', color: '#CD5D67' },
  { name: 'Pink Ribbon Theme', file: '/pink ribbon.jpg', color: '#f472b6' }
];

export const faqsList = [
  {
    q: 'Is my financial data encrypted locally?',
    a: "Yes, our Android application compiles all transactions inside an AES-256 encrypted SQLite file hosted inside your device's secure sandboxed storage. We have absolutely no background access to your data."
  },
  {
    q: 'How does the backend Cloud Synchronization work?',
    a: 'By subscribing to the Pro plan, you can enable Cloud Sync. The app securely uploads your local ledger over HTTPS to our NestJS backend API endpoints, updating your PostgreSQL remote database. If you sign in on a secondary device, it automatically pulls and reconciles your history.'
  },
  {
    q: 'Can I import existing spreadsheets or bank statements?',
    a: 'Yes, Pro members can import CSV files. You can map columns for Date, Amount, Category, and Notes inside the app settings to quickly migrate from your previous tracking software.'
  },
  {
    q: 'Does the application run without an internet connection?',
    a: 'Absolutely. Money Tracker operates entirely offline. All core features like transaction entries, budget tracking, categories, and charts are fully available without internet access. A network connection is only needed if you choose to sync with the NestJS cloud database.'
  },
  {
    q: 'What languages does Money Tracker support?',
    a: 'The application is localized in 9 languages including English, Spanish, French, Portuguese, Hindi, German, Filipino, Italian, and Japanese. You can change your preferred language instantly in the app settings.'
  },
  {
    q: 'How can I request support or submit feature ideas?',
    a: 'We love user feedback! You can reach out directly via email at support@moneytracker.local or hi.ronajpradhan@gmail.com with support queries or ideas for new features.'
  }
];

export const featuresList = [
  {
    title: '16 Main Categories',
    desc: 'Map logs to custom color chips covering Dining, Housing, Bills, groceries, transport, subscriptions, and travel.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M17 12H7" />
      </svg>
    )
  },
  {
    title: 'Smart Budget Ring',
    desc: 'See remaining budget balance compared to spending limits in real time. Progress circle shifts color if budget exceeds limits.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    title: 'Data CSV Backups',
    desc: 'Compile transactions and download standard CSV spreadsheet sheets or restore backups in one click.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>
    )
  },
  {
    title: 'Historical Analytics',
    desc: 'Visualize category spending percentages and trends over weekly, monthly, and yearly intervals.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    )
  },
  {
    title: 'Instant Search & Filter',
    desc: 'Search through thousands of historical logs by category, amount, tag, or description in milliseconds.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    title: 'Granular Tagging',
    desc: 'Append multiple tags (e.g. #gifts, #vacation) to transactions for precise analysis beyond main categories.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/>
      </svg>
    )
  },
  {
    title: 'Secure Locks',
    desc: 'Protect your ledger using native biometric fingerprint scan, face unlock, or numerical app passcodes.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
  {
    title: '9 Localized Languages',
    desc: 'Toggle instantly between English, Spanish, French, Portuguese, Hindi, German, Filipino, Italian, and Japanese.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>
      </svg>
    )
  },
  {
    title: '150+ Currencies',
    desc: 'Track transactions in any global currency with customized formatting, symbols, and decimal precision.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  }
];

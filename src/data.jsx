import React from 'react';

export const themeScreenshots = [
  { name: 'Dark Slate Theme', file: '/dark theme.jpg', color: '#1e293b' },
  { name: 'Classic Light Theme', file: '/Light theme.jpg', color: '#64748b' },
  { name: 'Crimson Web Theme', file: '/crimson web theme.jpg', color: '#CD5D67' },
  { name: 'Pink Ribbon Theme', file: '/pink ribbon.jpg', color: '#f472b6' }
];

export const faqsList = [
  {
    q: 'Do I need to create an account to use Money Tracker?',
    a: 'Not at all. Money Tracker is designed to be frictionless. You can start logging your income and expenses the moment you open the app, with no registration or login required.'
  },
  {
    q: 'Where is my financial data stored?',
    a: 'Your privacy is our priority. All your transactions, budgets, and settings are stored securely and exclusively on your Android device. We never upload or have access to your personal financial information.'
  },
  {
    q: 'Does the app automatically sync my data to the cloud?',
    a: 'No. To ensure maximum privacy, Money Tracker operates completely offline without automated cloud synchronization. To keep your data safe or move it to a new device, you can easily use our manual export and import features.'
  },
  {
    q: 'Will I lose my data if I uninstall the app?',
    a: 'Because Money Tracker stores everything locally on your device, uninstalling the app will delete your local data. We highly recommend exporting a backup from the Settings menu before uninstalling or performing major device updates.'
  },
  {
    q: 'How will I know when a new update is available?',
    a: 'The app occasionally checks our official website for the latest version. If an update is available, you will receive a prompt inside the app taking you directly to this download page so you can get the latest improvements.'
  },
  {
    q: 'Why does Android show a Play Protect warning when installing?',
    a: 'Android displays a Play Protect warning for apps downloaded outside the Google Play Store. This is a standard security prompt for direct APK installations. As long as you download Money Tracker directly from this official page, it is entirely safe to install.'
  },
  {
    q: 'Can I export my data for use in spreadsheets like Excel?',
    a: 'Absolutely. Money Tracker allows you to export your entire transaction history into a standard CSV format. This makes it incredibly easy to open your records in Microsoft Excel, Google Sheets, or other spreadsheet applications.'
  }
];

export const featuresList = [
  {
    title: 'Frictionless Logging',
    desc: 'Designed to be the fastest way to log a transaction, period. No loading screens.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: 'Satisfying Haptic Numpad',
    desc: 'Custom-built numpad with precise haptic feedback for a premium data-entry experience.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="15" y1="3" x2="15" y2="21"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
      </svg>
    )
  },
  {
    title: 'Fluid 60fps Animations',
    desc: 'Powered by Reanimated 4, every interaction feels buttery smooth and responsive.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    )
  },
  {
    title: 'Beautiful Interactive Charts',
    desc: 'Visualize your spending patterns and category breakdowns with stunning graphs.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    )
  },
  {
    title: 'Monthly Budget Limit',
    desc: 'Set a monthly spending limit and easily see how much remains at a glance.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    title: 'Privacy-Focused',
    desc: 'Limited anonymous analytics. Your financial data is stored locally and never uploaded. We couldn\'t see it even if we tried.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
  {
    title: 'Manual Backups (CSV)',
    desc: 'Export and import your entire transaction history to spreadsheets whenever you want.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: '100% Offline Architecture',
    desc: 'Use the app instantly anywhere, without needing an internet connection or account.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
      </svg>
    )
  }
];

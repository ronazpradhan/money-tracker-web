import React from 'react';

export const themeScreenshots = [
  { name: 'Dark Slate Theme', file: '/dark theme.jpg', color: '#1e293b' },
  { name: 'Classic Light Theme', file: '/Light theme.jpg', color: '#64748b' },
  { name: 'Crimson Web Theme', file: '/crimson web theme.jpg', color: '#CD5D67' },
  { name: 'Pink Ribbon Theme', file: '/pink ribbon.jpg', color: '#f472b6' }
];

export const faqsList = [
  {
    q: 'Does Money Tracker need an account?',
    a: 'No. The app works without login or signup.'
  },
  {
    q: 'Where is my data stored?',
    a: 'Your transactions are stored locally on your Android device.'
  },
  {
    q: 'Does the app use cloud sync?',
    a: 'No. Money Tracker currently does not use cloud sync. Use export/import backup to move or restore data manually.'
  },
  {
    q: 'What happens if I uninstall the app?',
    a: 'Local data may be removed. Export a backup from Settings before uninstalling or updating.'
  },
  {
    q: 'How do updates work?',
    a: 'The app checks a public version file from the official website and opens the download page when a newer APK is available.'
  },
  {
    q: 'Why does Android show a Play Protect warning?',
    a: 'Android may show a warning because the APK is distributed directly from the official website and is not yet listed on Google Play. Only install Money Tracker from the official download page.'
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. You can export JSON backups and CSV files from the app.'
  }
];

export const featuresList = [
  {
    title: 'Income & Expense Tracking',
    desc: 'Track both money coming in and money going out.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    title: 'Monthly Budget Limit',
    desc: 'Set a monthly spending limit and see how much remains.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    title: 'Transaction History',
    desc: 'Search and filter your past records.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    title: 'Analytics',
    desc: 'View spending patterns and category breakdowns.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    )
  },
  {
    title: 'Manual Backups',
    desc: 'Export and import JSON backup files manually.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>
    )
  },
  {
    title: 'CSV Export',
    desc: 'Export transaction records for spreadsheets.',
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
    title: 'Categories & Tags',
    desc: 'Organize transactions with categories and notes/tags if supported.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/>
      </svg>
    )
  },
  {
    title: 'App Lock',
    desc: 'Protect the app using passcode or biometrics if enabled.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
  {
    title: 'Offline Use',
    desc: 'Use the app without login or cloud sync.',
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
      </svg>
    )
  }
];

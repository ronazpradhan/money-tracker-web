import React from 'react';

// General wrapper for icons to standardise dimensions and styling
export const IconWrapper = ({ children, className = '', size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`mt-icon ${className}`}
    {...props}
  >
    {children}
  </svg>
);

// UI Icons
export const DashboardIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </IconWrapper>
);

export const PlusIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </IconWrapper>
);

export const HistoryIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </IconWrapper>
);

export const AnalyticsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </IconWrapper>
);

export const SettingsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

export const TrashIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </IconWrapper>
);

export const EditIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </IconWrapper>
);

export const LogoutIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </IconWrapper>
);

export const ExportIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </IconWrapper>
);

export const SearchIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </IconWrapper>
);

export const XIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconWrapper>
);

export const LockIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

export const KeyIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="m21 2-9.6 9.6" />
    <path d="m15.5 7.5 3 3" />
    <path d="m14 9 2.5 2.5" />
  </IconWrapper>
);

export const InfoIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </IconWrapper>
);

export const ShieldAlertIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </IconWrapper>
);

export const UserIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);

export const UserXIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M19 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M9 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0 4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" x2="22" y1="8" y2="13" />
    <line x1="22" x2="17" y1="8" y2="13" />
  </IconWrapper>
);

// 16 Expense Categories Icons
export const DiningIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v2" />
    <path d="M12 15v7" />
    <path d="M15 14c-1.1 0-2 1.3-2 3v3c0 1.1.9 2 2 2h2V14h-2z" />
    <path d="M19 14v8" />
  </IconWrapper>
);

export const GroceriesIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </IconWrapper>
);

export const TransportIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="16" height="16" x="4" y="2" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 12h8" />
    <circle cx="9" cy="7" r="1" />
    <circle cx="15" cy="7" r="1" />
  </IconWrapper>
);

export const ShoppingIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="6" cy="19" r="1" />
    <circle cx="17" cy="19" r="1" />
    <path d="M17 17H6.15a1 1 0 0 1-.95-.72L3.15 6H2" />
    <path d="m5.15 6 12.8 1a1 1 0 0 1 .9 1V14a1 1 0 0 1-1 1H7" />
  </IconWrapper>
);

export const BillsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </IconWrapper>
);

export const EntertainmentIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <path d="M12 12h.01" />
    <path d="M17 12h.01" />
    <path d="M7 12h.01" />
  </IconWrapper>
);

export const HousingIcon = (props) => (
  <IconWrapper {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconWrapper>
);

export const HealthIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </IconWrapper>
);

export const EducationIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </IconWrapper>
);

export const TravelIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M17.8 19.2 16 11l3.5-3.5a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4L19 14l8.2 1.8a1 1 0 0 1 .8 1v1.6a1 1 0 0 1-1.4.9l-9.6-3.8-3.8-3.8-3.8 9.6a1 1 0 0 1-.9 1.4h-1.6a1 1 0 0 1-1-1.2L5 16l-8.2-1.8a1 1 0 0 1-.8-1v-1.6a1 1 0 0 1 1.4-.9l9.6 3.8 3.8-3.8Z" />
  </IconWrapper>
);

export const SavingsIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12" />
    <path d="M17 12H7" />
  </IconWrapper>
);

export const SubscriptionsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <line x1="12" x2="12" y1="22" y2="12" />
  </IconWrapper>
);

export const PersonalCareIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M19 4v12a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V4" />
    <path d="M12 4V2" />
    <circle cx="12" cy="9" r="3" />
  </IconWrapper>
);

export const GiftsIcon = (props) => (
  <IconWrapper {...props}>
    <rect width="18" height="14" x="3" y="8" rx="2" />
    <path d="M12 5a3 3 0 1 0-3-3" />
    <path d="M12 5a3 3 0 1 1 3-3" />
    <path d="M12 2v20" />
    <path d="M3 12h18" />
  </IconWrapper>
);

export const InsuranceIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </IconWrapper>
);

export const OtherIcon = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </IconWrapper>
);

// Map of category key string to React Icon Component
export const CategoryIconsMap = {
  Dining: DiningIcon,
  Groceries: GroceriesIcon,
  Transport: TransportIcon,
  Shopping: ShoppingIcon,
  Bills: BillsIcon,
  Entertainment: EntertainmentIcon,
  Housing: HousingIcon,
  Health: HealthIcon,
  Education: EducationIcon,
  Travel: TravelIcon,
  Savings: SavingsIcon,
  Subscriptions: SubscriptionsIcon,
  PersonalCare: PersonalCareIcon,
  Gifts: GiftsIcon,
  Insurance: InsuranceIcon,
  Other: OtherIcon
};

// Render helper by key name
export const CategoryIcon = ({ name, ...props }) => {
  const IconComp = CategoryIconsMap[name] || OtherIcon;
  return <IconComp {...props} />;
};

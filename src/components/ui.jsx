import React from 'react';

export const DOWNLOAD_PAGE = '/money-tracker/download';

export const Logo = ({ size = 32 }) => (
  <img
    src="/money-tracker-icon.svg"
    alt=""
    width={size}
    height={size}
    style={{ width: size, height: size }}
    className="logo-img"
  />
);

export const Brand = ({ onClick }) => (
  <a href="/" className="brand" onClick={onClick} aria-label="Money Tracker home">
    <Logo size={30} />
    <span className="brand-word">Money Tracker</span>
  </a>
);

/* Penny, the brand mascot. size: sm | md | lg | xl (all fluid, see styles.css) */
export const Penny = ({ pose = 'idle', size = 'md', className = '', eager = false }) => (
  <img
    src={`/penny/penny-${pose}.svg`}
    alt="Penny the cat, the Money Tracker mascot"
    className={`penny penny--${size} ${className}`}
    loading={eager ? 'eager' : 'lazy'}
    draggable="false"
  />
);

/* A phone frame around an app screenshot */
export const Phone = ({ src, alt, className = '', eager = false }) => (
  <div className={`phone ${className}`}>
    <div className="phone__screen">
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        draggable="false"
      />
    </div>
  </div>
);

export const Eyebrow = ({ children }) => <span className="eyebrow">{children}</span>;

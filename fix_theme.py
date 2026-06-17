import re

def main():
    # 1. Update styles.css
    with open('src/styles.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # Replace :root and [data-theme="dark"]
    root_pattern = r':root\s*\{.*?\n\}\s*\n\[data-theme="dark"\]\s*\{.*?\n\}'
    
    new_vars = """:root {
  --bg: #f8fafc;
  --bg-soft: #eef3f8;

  --surface: #ffffff;
  --surface-2: #f1f5f9;
  --surface-3: #e2e8f0;
  --surface-hover: #eaf1f8;

  --text: #172033;
  --heading: #07111f;
  --muted: #64748b;
  --soft: #334155;

  --primary: #16a34a;
  --primary-dark: #15803d;
  --primary-text: #ffffff;

  --blue: #4f6bff;
  --purple: #7c3aed;
  --pink: #db2777;
  --yellow: #ca8a04;

  --border: rgba(15, 23, 42, 0.1);
  --border-strong: rgba(15, 23, 42, 0.18);

  --shadow-sm: 0 10px 30px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 20px 50px rgba(15, 23, 42, 0.12);
  --shadow-lg: 0 30px 80px rgba(15, 23, 42, 0.16);

  /* Legacy aliases for safe fallback */
  --bg-color: var(--bg);
  --card-bg: var(--surface);
  --card-border: var(--border);
  --card-border-hover: var(--border-strong);
  --text-primary: var(--text);
  --text-secondary: var(--muted);
  --accent-color: var(--blue);
  --success: var(--primary);
  --danger: var(--pink);
  --font-display: 'Outfit', sans-serif;
  --font-sans: 'Inter', sans-serif;
  --header-height: 76px;
  --max-width: 1140px;
}

[data-theme="dark"] {
  --bg: #030f18;
  --bg-soft: #061522;

  --surface: #071824;
  --surface-2: #0b2030;
  --surface-3: #10283a;
  --surface-hover: #123047;

  --text: #f7fbff;
  --heading: #ffffff;
  --muted: #a9b7c7;
  --soft: #d7e1ea;

  --primary: #22c55e;
  --primary-dark: #15803d;
  --primary-text: #03140a;

  --blue: #6f8cff;
  --purple: #a78bfa;
  --pink: #ff5ca8;
  --yellow: #facc15;

  --border: rgba(255, 255, 255, 0.11);
  --border-strong: rgba(255, 255, 255, 0.2);

  --shadow-sm: 0 10px 30px rgba(0, 0, 0, 0.22);
  --shadow-md: 0 20px 50px rgba(0, 0, 0, 0.32);
  --shadow-lg: 0 30px 80px rgba(0, 0, 0, 0.42);

  --bg-color: var(--bg);
  --card-bg: var(--surface);
  --card-border: var(--border);
  --card-border-hover: var(--border-strong);
  --text-primary: var(--text);
  --text-secondary: var(--muted);
  --accent-color: var(--blue);
  --success: var(--primary);
  --danger: var(--pink);
}"""
    css = re.sub(root_pattern, new_vars, css, flags=re.DOTALL)

    # Replace btn-primary
    css = re.sub(r'\.btn-primary\s*\{.*?\n\}', 
                 ".btn-primary {\n  background: var(--primary);\n  color: var(--primary-text);\n  border: 1px solid transparent;\n}", css, flags=re.DOTALL)
    
    # Replace btn-primary:hover
    css = re.sub(r'\.btn-primary:hover\s*\{.*?\n\}', 
                 ".btn-primary:hover {\n  background: var(--primary-dark);\n  box-shadow: var(--shadow-md);\n}", css, flags=re.DOTALL)

    # Replace btn-secondary
    css = re.sub(r'\.btn-secondary\s*\{.*?\n\}', 
                 ".btn-secondary {\n  background-color: var(--surface);\n  border: 1px solid var(--border-strong);\n  color: var(--heading);\n}", css, flags=re.DOTALL)
    
    # Replace btn-secondary:hover
    css = re.sub(r'\.btn-secondary:hover\s*\{.*?\n\}', 
                 ".btn-secondary:hover {\n  background-color: var(--surface-hover);\n}", css, flags=re.DOTALL)

    # Theme toggle chip replacement (if present)
    css = re.sub(r'\.theme-chip-btn\s*\{[^}]*background-color:[^}]*\}', 
                 ".theme-chip-btn {\n  background-color: var(--surface-2);\n  color: var(--heading);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 600;\n  font-size: 14px;\n}", css, count=1)
    css = re.sub(r'\.theme-chip-btn:hover\s*\{[^}]*\}', 
                 ".theme-chip-btn:hover {\n  background-color: var(--surface-3);\n}", css)

    # Add general responsive breakpoints
    responsive_css = """
.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(2.2rem, 8vw, 3rem);
    line-height: 1.1;
  }
  .hero-desc {
    font-size: 16px;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
  .hero-actions .btn {
    width: 100%;
    text-align: center;
  }
  .landing-hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 120px;
  }
  .feature-showcase-row {
    grid-template-columns: 1fr;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
"""
    if "@media (max-width: 768px)" not in css:
        css += responsive_css

    with open('src/styles.css', 'w', encoding='utf-8') as f:
        f.write(css)

    # 2. Update App.jsx
    with open('src/App.jsx', 'r', encoding='utf-8') as f:
        app = f.read()
    
    # Remove bad inline styling for btn-primary
    app = re.sub(r'style=\{\{\s*width:\s*\'100%\',\s*background:\s*\'linear-gradient.*?\}\}', 'style={{ width: \'100%\', textAlign: \'center\', display: \'block\', textDecoration: \'none\' }}', app)
    # Remove text-fill-color transparent from gradients
    app = app.replace('-webkit-text-fill-color: transparent;', '')
    
    with open('src/App.jsx', 'w', encoding='utf-8') as f:
        f.write(app)

    # 3. Update DownloadPage.jsx
    with open('src/DownloadPage.jsx', 'r', encoding='utf-8') as f:
        dp = f.read()
    
    dp = re.sub(r'style=\{\{ padding: \'18px 32px\'.*?\}\}', 'style={{ padding: \'16px 24px\', fontSize: \'16px\', fontWeight: \'600\', width: \'100%\', display: \'inline-block\', textAlign: \'center\', textDecoration: \'none\', borderRadius: \'12px\' }}', dp)
    
    with open('src/DownloadPage.jsx', 'w', encoding='utf-8') as f:
        f.write(dp)

if __name__ == '__main__':
    main()

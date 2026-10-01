'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#story', label: 'Our story' },
  { href: '#details', label: 'Weekend' },
  { href: '#venue', label: 'Dawnridge' },
  { href: '#travel', label: 'Travel' },
  { href: '#guide', label: 'Guide' },
  { href: '#faq', label: 'FAQ' },
  { href: '#rsvp', label: 'RSVP' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <a className="wordmark" href="#home" aria-label="Madeline Borehan and Jack Kleinick, home" onClick={closeMenu}>
        M <span>·</span> J
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a className={link.href === '#rsvp' ? 'nav-rsvp' : undefined} href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true"><b /><b /></i>
      </button>

      <nav
        className={`mobile-nav${open ? ' is-open' : ''}`}
        id="mobile-navigation"
        aria-label="Mobile primary navigation"
        aria-hidden={!open}
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

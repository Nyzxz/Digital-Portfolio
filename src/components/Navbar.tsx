import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me', end: false },
  { to: '/portfolio', label: 'Portfolio', end: false },
];

const modKey = /Mac/i.test(navigator.platform) ? '⌘' : 'Ctrl';

export default function Navbar({ theme, onToggleTheme, onOpenPalette }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Home">
          <span className="gradient-text">JP</span>
          <span className="logo-dot">.dev</span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <span>Search</span>
            <kbd>{modKey} K</kbd>
          </button>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="hamburger" />
          </button>
        </div>
      </div>
    </header>
  );
}

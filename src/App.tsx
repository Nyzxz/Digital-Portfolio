import { useCallback, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

export default function App() {
  const { theme, toggle } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const s = document.documentElement.style;
        s.setProperty('--mx', `${e.clientX}px`);
        s.setProperty('--my', `${e.clientY}px`);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const closePalette = useCallback(() => setPaletteOpen(false), []);
  const openPalette = useCallback(() => setPaletteOpen(true), []);

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="spotlight" aria-hidden="true" />
      <ParticleField />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} onOpenPalette={openPalette} />

      <main key={location.pathname} className="page">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} onToggleTheme={toggle} />
    </>
  );
}

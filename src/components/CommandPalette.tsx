import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/portfolio';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
}

interface Command {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

export default function CommandPalette({ open, onClose, onToggleTheme }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      { id: 'home', label: 'Go to Home', hint: 'Page', run: () => navigate('/') },
      { id: 'about', label: 'Go to About Me', hint: 'Page', run: () => navigate('/about') },
      { id: 'portfolio', label: 'Go to Portfolio', hint: 'Page', run: () => navigate('/portfolio') },
      { id: 'theme', label: 'Toggle light / dark theme', hint: 'Action', run: onToggleTheme },
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'Link',
        run: () => window.open(profile.github, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'Link',
        run: () => window.open(profile.linkedin, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'email',
        label: 'Send an email',
        hint: 'Link',
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: 'copy',
        label: 'Copy email address',
        hint: 'Action',
        run: () => {
          navigator.clipboard?.writeText(profile.email)?.catch(() => undefined);
        },
      },
    ],
    [navigate, onToggleTheme],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const run = (cmd: Command) => {
    cmd.run();
    onClose();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (results.length ? (a + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (results.length ? (a - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      run(results[active]);
    }
  };

  return (
    <div className="modal-backdrop palette-backdrop" onClick={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="palette-list">
          {results.length === 0 && <li className="palette-empty">No results</li>}
          {results.map((c, i) => (
            <li key={c.id}>
              <button
                className={`palette-item ${i === active ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => run(c)}
              >
                <span>{c.label}</span>
                <span className="palette-hint">{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="palette-footer">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}

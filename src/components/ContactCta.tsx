import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';

export default function ContactCta() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API unavailable (e.g. insecure context): fall back to a manual copy.
      const ta = document.createElement('textarea');
      ta.value = profile.email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* nothing else to try */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Reveal className="cta">
      <h2 id="contact">Let&apos;s build something together</h2>
      <p>Got an idea, a project, or just want to say hi? My inbox is open.</p>
      <div className="cta-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>Get in touch</a>
        <button type="button" className="btn btn-ghost" onClick={copy}>
          {copied ? 'Copied ✓' : 'Copy email'}
        </button>
      </div>
      <p className="cta-email">{profile.email}</p>
      <div className="cta-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.resume} download={profile.resumeFileName}>Resume</a>
      </div>
      <p className="cta-response" role="status">
        {copied ? 'Email address copied to clipboard.' : `I usually reply ${profile.responseTime}.`}
      </p>
    </Reveal>
  );
}

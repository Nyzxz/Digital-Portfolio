import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <section className="not-found container">
      <p className="nf-code gradient-text">404</p>
      <h1>This page doesn&apos;t exist</h1>
      <p>
        There&apos;s nothing at <code>{pathname}</code>. It may have moved, or the link is wrong.
      </p>
      <div className="hero-buttons">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/portfolio" className="btn btn-ghost">See my projects</Link>
      </div>
    </section>
  );
}

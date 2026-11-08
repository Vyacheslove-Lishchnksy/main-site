import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {SITE.name}</p>
        <p className="footer-note">
          React + TypeScript · matrix rain — custom-built
        </p>
        <a href="#top" className="footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SITE } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [...NAV_ITEMS.map((item) => item.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const moveIndicator = useCallback(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator) return;

    const link = nav.querySelector<HTMLElement>("a.is-active");
    const isMobile = window.matchMedia("(max-width: 860px)").matches;

    if (!link || isMobile) {
      indicator.classList.remove("is-visible");
      return;
    }

    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.height = `${link.offsetHeight}px`;
    indicator.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px)`;
    indicator.classList.add("is-visible");
  }, []);

  useEffect(() => {
    moveIndicator();
  }, [active, open, moveIndicator]);

  useEffect(() => {
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [moveIndicator]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            &gt;_
          </span>
          <span className="brand-name">v.lishchynskyi</span>
        </a>

        <nav
          ref={navRef}
          id="main-nav"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <span ref={indicatorRef} className="nav-indicator" aria-hidden="true" />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`nav-contact ${active === "contact" ? "is-active" : ""}`}
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-ghost btn-sm nav-github"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

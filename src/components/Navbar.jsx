import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { OmIcon } from "./Motifs";

const links = [
  { to: "/", label: "मुख्य" },
  { to: "/about", label: "हमारे बारे में" },
  { to: "/events", label: "उत्सव" },
  { to: "/members", label: "पुजारीगण" },
  { to: "/contact", label: "संपर्क" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl border-b border-brass-gold/25 shadow-sm"
          : "bg-ivory/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group">
          <span className="w-11 h-11 rounded-full border border-brass-gold/60 bg-saffron text-ivory flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(230,81,0,0.55)] group-hover:rotate-12 transition-transform duration-500">
            <OmIcon className="w-6 h-6" />
          </span>
          <div className="leading-tight">
            <p className="font-yatra text-lg sm:text-xl text-saffron-dark">श्री बाला सुंदरी मंदिर</p>
            <p className="text-[11px] tracking-[0.25em] uppercase text-ink-muted">Shahabad • Haryana</p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                data-testid={`nav-link-${l.label}`}
                className={({ isActive }) =>
                  `px-4 py-2 text-[15px] font-medium tracking-wide rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-saffron/10 text-saffron-dark"
                      : "text-ink-heading hover:text-saffron hover:bg-saffron/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-ink-heading"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-brass-gold/25 bg-ivory">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  data-testid={`mobile-nav-link-${l.label}`}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-saffron/10 text-saffron-dark"
                        : "text-ink-heading hover:bg-saffron/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

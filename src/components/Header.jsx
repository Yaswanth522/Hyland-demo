import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { languages, mainNav } from "../data/nav";
import { initialsFromName } from "../utils/name";
import { ArrowRight, HylandLogo } from "./Logo";
import "./Header.css";

// Header links are placeholders only: they don't navigate anywhere.
const noop = (e) => e.preventDefault();

function MegaMenu({ item }) {
  const [group, setGroup] = useState(0);
  const groups = item.groups;

  return (
    <div className="mega-menu" role="region" aria-label={`${item.label} menu`}>
      <div className="container mega-menu__inner">
        <div className="mega-menu__links">
          {groups ? (
            <div className="mega-menu__groups">
              <ul className="mega-menu__list mega-menu__list--tabs">
                {item.links.slice(0, 1).map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={noop}>{link.label}</a>
                  </li>
                ))}
                {groups.map((g, i) => (
                  <li key={g.title}>
                    <button
                      type="button"
                      className={`mega-menu__tab${i === group ? " is-active" : ""}`}
                      onMouseEnter={() => setGroup(i)}
                      onFocus={() => setGroup(i)}
                    >
                      {g.title}
                      <span aria-hidden="true">›</span>
                    </button>
                  </li>
                ))}
                {item.links.slice(1).map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={noop}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <ul className="mega-menu__list mega-menu__list--sub">
                {groups[group].links.map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={noop}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className="mega-menu__list mega-menu__list--cols">
              {item.links.map((link) => (
                <li key={link.label}>
                  <a href="#" onClick={noop}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a className="mega-menu__feature" href="#" onClick={noop}>
          <img src={item.feature.image} alt="" loading="lazy" />
          <div>
            <h3>{item.feature.title}</h3>
            <p>{item.feature.text}</p>
            <span className="mega-menu__cta">
              {item.feature.cta} <ArrowRight />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

function AccountMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (!user) {
    return (
      <Link className="site-header__signin" to="/login">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Sign in
      </Link>
    );
  }

  return (
    <div className="account-menu" ref={ref}>
      <button
        type="button"
        className="account-menu__avatar"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Account menu for ${user.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        {initialsFromName(user.name)}
      </button>
      {open && (
        <div className="account-menu__dropdown">
          <p className="account-menu__hi">Hi, {user.name}</p>
          <p className="account-menu__email">{user.email}</p>
          <button
            type="button"
            className="btn btn--outline account-menu__logout"
            onClick={() => {
              logout();
              setOpen(false);
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileItem, setMobileItem] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = (label) => {
    clearTimeout(closeTimer.current);
    setActive(label);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 150);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActive(null);
        setLangOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const activeItem = mainNav.find((n) => n.label === active);

  return (
    <header className="site-header" onMouseLeave={scheduleClose}>
      <div className="container site-header__top">
        <Link to="/" className="site-header__logo" aria-label="Hyland home">
          <HylandLogo />
        </Link>

        <nav className="site-header__utility" aria-label="Top">
          <a href="#" onClick={noop}>
            Community
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M6 4.5A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h8a1.5 1.5 0 0 0 1.5-1.5v-2.5a.5.5 0 0 1 1 0V14a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 14V6A2.5 2.5 0 0 1 6 3.5h2.5a.5.5 0 0 1 0 1H6Zm5-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.7l-5.15 5.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" onClick={noop}>Contact Us</a>
          <div className="lang-picker">
            <button type="button" aria-expanded={langOpen} onClick={() => setLangOpen((v) => !v)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              English
            </button>
            {langOpen && (
              <ul className="lang-picker__menu">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <a href="#" onClick={noop}>{lang.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className="site-header__icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="m20 20-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Search
          </button>
          <AccountMenu />
        </nav>

        <button
          type="button"
          className="site-header__burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {searchOpen && (
        <form
          className="site-header__search container"
          onSubmit={noop}
          role="search"
        >
          <input type="search" name="q" placeholder="Search hyland.com" autoFocus aria-label="Search" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      )}

      <div className="container site-header__main">
        <nav className="site-header__nav" aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className={`site-header__nav-btn${active === item.label ? " is-active" : ""}`}
                  aria-expanded={active === item.label}
                  onMouseEnter={() => openMenu(item.label)}
                  onClick={() => setActive(active === item.label ? null : item.label)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--pill site-header__demo" href="#" onClick={noop}>
          Request a demo
        </a>
      </div>

      {activeItem && (
        <div onMouseEnter={() => openMenu(activeItem.label)} onMouseLeave={scheduleClose}>
          <MegaMenu key={activeItem.label} item={activeItem} />
        </div>
      )}

      {mobileOpen && (
        <div className="mobile-nav">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="mobile-nav__toggle"
                  aria-expanded={mobileItem === item.label}
                  onClick={() => setMobileItem(mobileItem === item.label ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden="true">{mobileItem === item.label ? "−" : "+"}</span>
                </button>
                {mobileItem === item.label && (
                  <ul className="mobile-nav__sub">
                    {[...item.links, ...(item.groups?.flatMap((g) => g.links) ?? [])].map((link, i) => (
                      <li key={`${link.label}-${i}`}>
                        <a href="#" onClick={noop}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-nav__footer">
            <a href="#" onClick={noop}>Community</a>
            <a href="#" onClick={noop}>Contact Us</a>
            <a className="btn btn--pill" href="#" onClick={noop}>
              Request a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

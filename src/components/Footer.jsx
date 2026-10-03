import { footerColumns, legalLinks } from "../data/nav";
import { HylandWordmark } from "./Logo";
import "./Footer.css";
import { noop } from "../utils/placeholder";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/HylandSoftware",
    path: "M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9H17l.5-4h-4V8.8c0-.5.3-.8.5-.8Z",
  },
  {
    label: "X",
    href: "https://twitter.com/hyland",
    path: "M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hylandgram",
    path: "M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-8.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3 0 4.1.1 2.8.1 4.1 1.4 4.2 4.2.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.8-1.4 4.1-4.2 4.2-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.8-.1-4.1-1.4-4.2-4.2C3.6 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.8 1.4-4.1 4.2-4.2 1.1-.1 1.4-.1 4.1-.1ZM12 2C9.3 2 8.9 2 7.8 2.1 4.1 2.2 2.2 4.1 2.1 7.8 2 8.9 2 9.3 2 12s0 3.1.1 4.2c.1 3.7 2 5.6 5.7 5.7 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c3.7-.1 5.6-2 5.7-5.7.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-3.7-2-5.6-5.7-5.7C15.1 2 14.7 2 12 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hyland-software",
    path: "M6.9 21H3.1V9h3.8v12ZM5 7.4a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM21 21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.2V9h3.6v1.6h.1c.5-1 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/HylandSoftware",
    path: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.8 3-5.8 3Z",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <HylandWordmark className="site-footer__logo" />
          <p>Helping organizations stay informed, empowered and connected in every interaction with the people they serve.</p>
          <a className="btn" href="#" onClick={noop}>
            Contact Us
          </a>
        </div>
        <div className="site-footer__cols">
          {footerColumns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href="#" onClick={noop}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <div className="site-footer__newsletter">
          <p>Stay ahead with the latest in content innovation</p>
          <a className="btn btn--ghost-white" href="#" onClick={noop}>
            Get monthly insights
          </a>
        </div>
        <div className="site-footer__social">
          <span>Follow Us</span>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href="#" onClick={noop} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} fill="currentColor" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p>©{new Date().getFullYear()} Hyland. All rights reserved.</p>
        <p className="site-footer__trademark">
          Hyland, the H design and Hyland product names are trademarks of Hyland and its affiliates.
        </p>
        <ul>
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href="#" onClick={noop}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

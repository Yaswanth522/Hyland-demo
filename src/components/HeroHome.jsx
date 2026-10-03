import { hero } from "../data/home";
import "./HeroHome.css";
import { noop } from "../utils/placeholder";

// Teal dashed diagonals on the right edge of the hero, like hyland.com's pattern.
function DashPattern() {
  return (
    <svg className="hero-home__pattern" viewBox="0 0 120 400" preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <line key={i} x1="0" y1={20 + i * 28} x2="120" y2={20 + i * 28} stroke="#13eac1" strokeWidth="4" strokeDasharray={`${18 + (i % 3) * 14} 10`} opacity={0.25 + (i % 4) * 0.15} />
      ))}
    </svg>
  );
}

export default function HeroHome() {
  return (
    <section className="hero-home">
      <div className="container hero-home__inner">
        <div className="hero-home__copy">
          <h1 className="hero-home__title">
            From <span>enterprise content</span> to <span>intelligent action</span>
          </h1>
          <p className="hero-home__eyebrow">{hero.eyebrow}</p>
          <a className="hero-home__cta" href="#" onClick={noop}>
            {hero.cta.label}
            <span className="hero-home__cta-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20">
                <path d="M8 3.75c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v7.5a.75.75 0 1 1-1.5 0V5.56L4.28 16.78a.75.75 0 0 1-1.06-1.06L14.44 4.5h-5.7A.75.75 0 0 1 8 3.75" fill="currentColor" />
              </svg>
            </span>
          </a>
        </div>
        <div className="hero-home__media">
          <img src={hero.image} alt="IDC MarketScape graphic showing Hyland as a Leader" />
        </div>
      </div>
      <DashPattern />
      <div className="hero-home__band" style={{ backgroundImage: `url(${hero.band})` }} aria-hidden="true" />
    </section>
  );
}

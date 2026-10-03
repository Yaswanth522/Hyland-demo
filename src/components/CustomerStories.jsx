import { stories } from "../data/home";
import "./CustomerStories.css";
import { noop } from "../utils/placeholder";

function Arrow() {
  return (
    <svg className="btn__icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M11.27 3.2a.75.75 0 0 0-1.04 1.1l5.24 4.95H2.75a.75.75 0 0 0 0 1.5h12.73l-5.25 4.96a.75.75 0 1 0 1.04 1.09l6.41-6.07a1 1 0 0 0 0-1.46z" fill="currentColor" />
    </svg>
  );
}

export default function CustomerStories() {
  const [featured, ...rest] = stories;

  return (
    <section className="section section--grey customer-stories">
      <div className="container customer-stories__grid">
        <article className="story-feature">
          <img src={featured.image} alt="" loading="lazy" />
          <div className="story-feature__body">
            <h3>{featured.name}</h3>
            <p>{featured.text}</p>
            <a className="btn btn--outline" href="#" onClick={noop}>
              Read the case study <Arrow />
            </a>
          </div>
        </article>
        <div className="customer-stories__side">
          {rest.map((s) => (
            <article key={s.name} className="story-card">
              <h3>{s.name}</h3>
              <a className="text-link" href="#" onClick={noop}>
                Read the case study <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

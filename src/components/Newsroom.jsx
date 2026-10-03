import { news } from "../data/home";
import "./Newsroom.css";
import { noop } from "../utils/placeholder";

export default function Newsroom() {
  const [lead, ...rest] = news;

  return (
    <section className="section newsroom">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Newsroom</h2>
        </div>

        <a className="news-lead" href="#" onClick={noop}>
          <img src={lead.image} alt="" loading="lazy" />
          <div>
            <span className="news-tag">News</span>
            <h3>{lead.title}</h3>
            <p>{lead.text}</p>
          </div>
        </a>

        <ul className="news-list">
          {rest.map((n) => (
            <li key={n.title}>
              <a className="news-item" href="#" onClick={noop}>
                <img src={n.image} alt="" loading="lazy" />
                <div>
                  <span className="news-tag">News</span>
                  <h3>{n.title}</h3>
                  <p>{n.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <a className="text-link newsroom__all" href="#" onClick={noop}>
          All Hyland news
          <svg className="btn__icon" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M11.27 3.2a.75.75 0 0 0-1.04 1.1l5.24 4.95H2.75a.75.75 0 0 0 0 1.5h12.73l-5.25 4.96a.75.75 0 1 0 1.04 1.09l6.41-6.07a1 1 0 0 0 0-1.46z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </section>
  );
}

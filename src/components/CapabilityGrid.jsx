import { capabilities } from "../data/home";
import Icon from "./Icon";
import "./CapabilityGrid.css";
import { noop } from "../utils/placeholder";

export default function CapabilityGrid() {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Explore the capabilities of Content Innovation Cloud</h2>
          <p className="section__lead">
            One platform for content, process and application intelligence, built to unlock the value in your unstructured data.
          </p>
        </div>
        <ul className="capability-grid">
          {capabilities.map((c) => (
            <li key={c.title}>
              <a className="capability-card" href="#" onClick={noop}>
                <Icon name={c.title} className="capability-card__icon" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

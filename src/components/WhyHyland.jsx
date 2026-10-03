import { whyHyland } from "../data/home";
import Icon from "./Icon";
import "./WhyHyland.css";

export default function WhyHyland() {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Why Hyland?</h2>
          <p className="section__lead">
            Enterprises across every industry count on Hyland to turn content into a competitive advantage in the era of
            intelligent content management.
          </p>
        </div>
        <ul className="why-grid">
          {whyHyland.map((item) => (
            <li key={item.title} className="why-item">
              <Icon name={item.title} className="why-item__icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

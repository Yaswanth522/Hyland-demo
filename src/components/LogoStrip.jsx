import { customerLogos } from "../data/home";
import "./LogoStrip.css";

export default function LogoStrip() {
  return (
    <section className="section logo-strip">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Leading enterprises fuel their innovations with Hyland</h2>
          <p className="section__lead">
            Over half of the Fortune 100 rely on Hyland to connect their content, data and processes.
          </p>
        </div>
        <ul className="logo-strip__list">
          {customerLogos.map((src, i) => (
            <li key={src}>
              <img src={src} alt={`Customer logo ${i + 1}`} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

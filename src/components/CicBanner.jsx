import { cic } from "../data/home";
import "./CicBanner.css";

export default function CicBanner() {
  return (
    <section className="cic">
      <div className="container">
        <div className="cic__intro">
          <h2 className="cic__heading">{cic.heading}</h2>
          <p className="cic__body">{cic.body}</p>
        </div>
        <div className="cic__card">
          <img className="cic__infographic" src={cic.infographic} alt="Content Innovation Cloud infographic" loading="lazy" />
          <div className="cic__side">
            <p className="cic__title">
              <span>Content</span>
              <span>Innovation</span>
              <span className="cic__title-white">Cloud</span>
            </p>
            <a className="cic__btn" href={cic.link.href}>
              {cic.link.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

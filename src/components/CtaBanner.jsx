import "./CtaBanner.css";
import { noop } from "../utils/placeholder";

function Stripes() {
  return (
    <svg className="cta-banner__stripes" viewBox="0 0 540 293" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      {Array.from({ length: 30 }, (_, i) => (
        <line key={i} x1={i * 18} y1="293" x2={170 + i * 18} y2="0" stroke="#13eac1" strokeWidth={i < 8 ? 1 : 3} opacity={Math.min(1, 0.3 + i * 0.05)} />
      ))}
    </svg>
  );
}

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          <Stripes />
          <div className="cta-banner__inner">
            <h2>Empower your people to deliver their best with Hyland</h2>
            <a className="btn cta-banner__btn" href="#" onClick={noop}>
              Connect with an expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

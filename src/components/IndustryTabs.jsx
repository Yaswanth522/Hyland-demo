import { useState } from "react";
import { industries } from "../data/home";
import "./IndustryTabs.css";
import { noop } from "../utils/placeholder";

export default function IndustryTabs() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId);

  return (
    <section className="section industry-tabs">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Your industry, our experts</h2>
          <p className="section__lead">
            Deep industry know-how paired with a flexible platform, so you get solutions that fit how your sector works.
          </p>
        </div>

        <div className="industry-tabs__layout">
          <div className="industry-tabs__list" role="tablist" aria-label="Industries" aria-orientation="vertical">
            {industries.map((i) => (
              <button
                key={i.id}
                type="button"
                role="tab"
                id={`tab-${i.id}`}
                aria-selected={i.id === activeId}
                aria-controls={`panel-${i.id}`}
                className={`industry-tabs__tab${i.id === activeId ? " is-active" : ""}`}
                onClick={() => setActiveId(i.id)}
              >
                {i.label}
              </button>
            ))}
          </div>

          <div className="industry-tabs__body" role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`}>
            <h3>{active.id === "other-industries" ? active.title : `${active.title} solutions`}</h3>
            {active.items.map((item) => (
              <div key={item.title} className="industry-tabs__item">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
            <a className="btn btn--outline" href="#" onClick={noop}>
              Explore solutions for {active.label.toLowerCase()}
            </a>
          </div>

          <div className="industry-tabs__media">
            <img key={active.image} src={active.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

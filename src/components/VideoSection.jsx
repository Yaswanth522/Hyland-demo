import { useState } from "react";
import { video } from "../data/home";
import "./VideoSection.css";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section video-section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Transformative innovation from anyone, anywhere</h2>
          <p className="section__lead">
            Put enterprise content at the center of change and open up new possibilities across the business.
          </p>
        </div>
        <div className="video-section__player">
          {playing ? (
            <iframe
              src={`https://play.vidyard.com/${video.uuid}.html?autoplay=1`}
              title="Hyland | Welcome, innovators"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button type="button" className="video-section__poster" onClick={() => setPlaying(true)} aria-label="Play video">
              <img src={video.poster} alt="" />
              <svg className="video-section__play" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M17.22 8.68a1.5 1.5 0 0 1 0 2.63l-10 5.5A1.5 1.5 0 0 1 5 15.5v-11a1.5 1.5 0 0 1 2.22-1.3l10 5.5Z" />
              </svg>
              <span className="video-section__banner">
                <span className="video-section__name">Hyland | Welcome, innovators</span>
              </span>
              <span className="video-section__tag">
                Play video <i aria-hidden="true">|</i> 01:34
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// Hyland logos, taken from hyland.com's inline SVGs.

export function HylandLogo({ className, wordmarkColor = "#fff" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 483 100"
      role="img"
      aria-label="Hyland"
    >
      <defs>
        <path id="hyland-skew" d="M29 0h32.5v50H29z" transform="skewX(-30)" />
      </defs>
      <use y="50" fill="#f1cb61" href="#hyland-skew" />
      <use x="61.5" fill="#6e33ff" href="#hyland-skew" />
      <use x="65" y="50" fill="#52a1ff" href="#hyland-skew" />
      <use x="126.5" fill="#13eac1" href="#hyland-skew" />
      <path
        fill={wordmarkColor}
        d="M233.8 34.19v32h-7.44V53h-19.35v13.2h-7.44v-32h7.44v12.48h19.35V34.19h7.44Zm38.5 0h8.74L265.13 52.9v13.28h-7.45V52.91l-15.95-18.72h8.96l10.83 12.66 10.78-12.66Zm16.66 0h7.44v25.63h21.62v6.37h-29.06v-32Zm61.4 0 15.92 32h-8.07l-3.38-6.86h-17.56l-3.39 6.86h-7.93l16-32h8.42ZM340.3 53.17h11.55L346.1 41.5l-5.8 11.67Zm67.65 13.02h-6.55l-19.97-22.51v22.5h-7.22v-32h7.53l19 21.44V34.18h7.21v32Zm12.6-32.02h16.69c11.44 0 18.6 6.28 18.6 16.1s-7.17 16.1-18.6 16.1h-16.69v-32.2Zm16.5 25.76c6.95 0 11-3.81 11-9.66s-4.05-9.66-11.03-9.66h-9.22v19.32h9.26Zm31.32-24.26v5.96h-1.73v-5.96h-3.24v-1.48h8.2v1.48h-3.23Zm9.03 5.96-2.52-5.73v5.73h-1.69V34.2h2.62l2.31 5.33 2.32-5.33H483v7.44h-1.68V35.9l-2.53 5.73h-1.4Z"
      />
    </svg>
  );
}

export function HylandWordmark({ className }) {
  return (
    <svg className={className} viewBox="0 0 176 21" fill="currentColor" role="img" aria-label="Hyland">
      <path d="M21.26.1v19.86h-4.63v-8.19h-12v8.2H0V.08h4.62v7.75h12.01V.1zm23.9 0h5.43L40.7 11.71v8.25h-4.63v-8.25L26.18.09h5.56l6.73 7.86zM55.5.1h4.63V16h13.42v3.96H55.5zm38.14 0 9.88 19.86h-5L96.4 15.7H85.5l-2.1 4.26h-4.93L88.4.1zm-6.26 11.78h7.17l-3.57-7.25zm42.01 8.08h-4.07L112.92 6v13.97h-4.48V.1h4.67l11.8 13.31V.1h4.48zM137.22.08h10.36c7.1 0 11.55 3.9 11.55 10s-4.45 10-11.55 10h-10.36zm10.25 16c4.3 0 6.82-2.37 6.82-6s-2.51-6-6.85-6h-5.72v12zM166.9 1v3.7h-1.07V1h-2.02V.1h5.1v.92zm5.6 3.7-1.55-3.56V4.7h-1.06V.1h1.63l1.44 3.3L174.4.1h1.6v4.62h-1.04V1.15l-1.57 3.56z" />
    </svg>
  );
}

// Teal "//" quote mark used as a decorative accent across hyland.com.
export function SlashMark({ className, color = "#13eac1" }) {
  return (
    <svg className={className} viewBox="0 0 99 83" aria-hidden="true">
      <path
        fill={color}
        d="M24.7 40.7 46 0H21.3L0 40.7V83h43.5V40.7H24.7ZM77.2 40.7 99 0H73.8L52 40.7V83h44.4V40.7H77.2Z"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "btn__icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className = "btn__icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

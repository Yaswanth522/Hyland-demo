import { icons } from "../data/icons";

export default function Icon({ name, className }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg className={className} viewBox={icon.viewBox} fill="currentColor" aria-hidden="true">
      {icon.paths.map((d) => (
        <path key={d.slice(0, 24)} d={d} />
      ))}
    </svg>
  );
}

export default function Separator({ icon = "⚜", color = "var(--color-champagne-gold)", className = "", style = {} }) {
  return (
    <div className={`decorative-separator ${className}`} style={{ '--sep-color': color, ...style }}>
      <span className="sep-line"></span>
      <span className="sep-icon">{icon}</span>
      <span className="sep-line"></span>
    </div>
  );
}

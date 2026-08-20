import React from "react";

/**
 * Toggle icon — a tappable icon that swaps color on/off (e.g. bookmark, like).
 * Active paints the icon in primary blue; inactive in neutral grey.
 * Geometry from Figma "Control/Toggle Icon" (20×24 icon box).
 */
export function ToggleIcon({ icon, active = false, onClick, className, style }) {
  const color = active ? "rgb(51,102,255)" : "rgb(196,196,196)";
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={className} style={{
      width: 24, height: 24, border: 0, background: "transparent", padding: 0,
      display: "inline-flex", justifyContent: "center", alignItems: "center",
      cursor: "pointer", color, ...style,
    }}>
      <span style={{ width: 20, height: 20, display: "inline-flex" }}>{icon}</span>
    </button>
  );
}
export default ToggleIcon;

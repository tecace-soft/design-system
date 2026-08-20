import React from "react";

const CHECK = <svg viewBox="0 0 16 16" width="100%" height="100%" fill="none"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/**
 * Multi-select chip — pill with a leading check, toggles selected.
 * Exact geometry transcribed from Figma "Chip/Multi-Select".
 */
export function ChipMultiSelect({ label = "텍스트", size = "md", state = "default", onClick, className, style }) {
  const md = size === "md";
  const disabled = state === "disabled" || state === "selected disabled";
  const selected = state === "selected" || state === "selected disabled";
  const border = disabled ? "rgb(244,244,245)" : selected ? "rgb(51,102,255)" : "rgb(225,226,228)";
  const color = disabled ? "rgb(220,220,220)" : selected ? "rgb(51,102,255)" : "rgb(138,138,138)";
  const fs = md ? 14 : 15;
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={className} style={{
      width: "fit-content", border: 0, borderRadius: 999, boxShadow: `inset 0 0 0 1px ${border}`,
      background: "transparent", display: "inline-flex", flexDirection: "row",
      gap: md ? 4 : 6, padding: md ? "6px 12px" : "9px 16px",
      alignItems: "center", boxSizing: "border-box", cursor: disabled ? "default" : "pointer",
      fontFamily: "var(--font-sans)", ...style,
    }}>
      <span style={{ height: md ? 12 : 16, width: md ? 16 : 18, flexShrink: 0, color, display: "inline-flex" }}>{CHECK}</span>
      <span style={{ fontWeight: 600, fontSize: fs, lineHeight: md ? 1.429 : 1.467, letterSpacing: md ? "0.015em" : "0.010em", color, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}
export default ChipMultiSelect;

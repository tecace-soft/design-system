import React from "react";

const CH_DOWN = <svg viewBox="0 0 20 20" width="100%" height="100%" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CH_UP = <svg viewBox="0 0 20 20" width="100%" height="100%" fill="none"><path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/**
 * Filter chip — pill with a trailing chevron and optional selection count.
 * Sizes md/lg; states default / selected / disabled; `expand` flips the chevron.
 * Exact geometry transcribed from Figma "Chip/Filter".
 */
export function ChipFilter({ label = "텍스트", count, size = "md", state = "default", expand = false, onClick, className, style }) {
  const md = size === "md";
  const disabled = state === "disabled" || state === "selected disabled";
  const selected = state === "selected" || state === "selected disabled";
  const border = disabled ? "rgb(244,244,245)" : selected ? "rgb(51,102,255)" : "rgb(225,226,228)";
  const textColor = disabled ? "rgb(220,220,220)" : "rgb(23,23,23)";
  const countColor = disabled ? "rgb(220,220,220)" : "rgb(51,102,255)";
  const fs = md ? 14 : 15;
  const lh = md ? 1.429 : 1.467;
  const ls = md ? "0.015em" : "0.010em";
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={className} style={{
      width: "fit-content", border: 0, borderRadius: 999, boxShadow: `inset 0 0 0 1px ${border}`,
      background: "transparent", display: "inline-flex", flexDirection: "row",
      gap: md ? 4 : 6, padding: md ? "6px 12px" : "9px 12px 9px 16px",
      justifyContent: "center", alignItems: "center", boxSizing: "border-box",
      cursor: disabled ? "default" : "pointer", fontFamily: "var(--font-sans)", ...style,
    }}>
      <span style={{ fontWeight: 500, fontSize: fs, lineHeight: lh, letterSpacing: ls, color: textColor, whiteSpace: "nowrap" }}>{label}</span>
      {count != null && <span style={{ fontWeight: 500, fontSize: fs, lineHeight: lh, letterSpacing: ls, color: countColor, whiteSpace: "nowrap" }}>{count}</span>}
      <span style={{ height: md ? 12 : 16, width: md ? 18 : 20, flexShrink: 0, color: textColor, display: "inline-flex" }}>{expand ? CH_UP : CH_DOWN}</span>
    </button>
  );
}
export default ChipFilter;

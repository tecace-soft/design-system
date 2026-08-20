import React from "react";

/**
 * Auto Complete — a text input with a filtered suggestion dropdown.
 * Container/spacing transcribed from Figma "Auto Complete/Auto Complete"
 * (width 320, dropdown radius 16, item rows 15px / gap 4).
 */
export function AutoComplete({ options = [], value = "", placeholder = "검색어를 입력하세요", onChange, onSelect, width = 320, className, style }) {
  const [query, setQuery] = React.useState(value);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const q = query.trim().toLowerCase();
  const matches = q ? options.filter((o) => String(o).toLowerCase().includes(q)) : options;

  const pick = (opt) => { setQuery(opt); setOpen(false); onSelect && onSelect(opt); onChange && onChange(opt); };

  return (
    <div className={className} style={{ width, position: "relative", fontFamily: "var(--font-sans)", ...style }}>
      <input
        value={query}
        placeholder={placeholder}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); setActive(0); onChange && onChange(e.target.value); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { setActive((a) => Math.min(a + 1, matches.length - 1)); setOpen(true); }
          else if (e.key === "ArrowUp") setActive((a) => Math.max(a - 1, 0));
          else if (e.key === "Enter" && open && matches[active]) pick(matches[active]);
          else if (e.key === "Escape") setOpen(false);
        }}
        style={{
          width: "100%", boxSizing: "border-box", height: 48, padding: "0 16px",
          borderRadius: 12, border: 0, boxShadow: "inset 0 0 0 1px var(--line-solid-neutral,rgb(225,226,228))",
          fontSize: 15, lineHeight: 1.467, letterSpacing: "0.010em", color: "var(--label-normal,rgb(23,23,25))",
          outline: "none", background: "var(--background-normal-normal,#fff)",
        }}
      />
      {open && matches.length > 0 && (
        <div style={{
          position: "absolute", left: 0, right: 0, top: 56, zIndex: 20, maxHeight: 400, overflowY: "auto",
          padding: "8px 0", borderRadius: 16, background: "var(--background-elevated-normal,#fff)",
          boxShadow: "inset 0 0 0 1px var(--line-solid-neutral,rgb(225,226,228)), 0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.10)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "8px 20px" }}>
            {matches.map((opt, i) => (
              <div key={opt + i}
                onMouseDown={(e) => { e.preventDefault(); pick(opt); }}
                onMouseEnter={() => setActive(i)}
                style={{
                  padding: "10px 12px", margin: "0 -12px", borderRadius: 8, cursor: "pointer",
                  fontSize: 15, lineHeight: 1.467, letterSpacing: "0.010em",
                  color: "var(--label-normal,rgb(23,23,25))",
                  background: i === active ? "var(--fill-normal,rgba(112,115,124,0.08))" : "transparent",
                }}>{opt}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default AutoComplete;

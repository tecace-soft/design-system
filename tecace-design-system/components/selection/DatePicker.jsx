import React from "react";

const ITEM_H = 34;
const VISIBLE = 5;

function Wheel({ values, index, onChange, width }) {
  const ref = React.useRef(null);
  const pad = ((VISIBLE - 1) / 2) * ITEM_H;
  React.useEffect(() => {
    if (ref.current) ref.current.scrollTop = index * ITEM_H;
  }, [index]);
  const onScroll = (e) => {
    const i = Math.round(e.target.scrollTop / ITEM_H);
    if (i !== index && i >= 0 && i < values.length) onChange(i);
  };
  return (
    <div ref={ref} onScroll={onScroll} style={{
      width, height: VISIBLE * ITEM_H, overflowY: "auto", scrollSnapType: "y mandatory",
      WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 34%, #000 66%, transparent)",
      maskImage: "linear-gradient(to bottom, transparent, #000 34%, #000 66%, transparent)",
    }}>
      <div style={{ paddingTop: pad, paddingBottom: pad }}>
        {values.map((v, i) => (
          <div key={i} style={{
            height: ITEM_H, display: "flex", alignItems: "center", justifyContent: "center",
            scrollSnapAlign: "center", fontSize: 20, letterSpacing: "-0.004em",
            fontWeight: i === index ? 600 : 500,
            color: i === index ? "var(--label-normal,rgb(23,23,25))" : "var(--label-assistive,rgb(174,176,182))",
          }}>{v}</div>
        ))}
      </div>
    </div>
  );
}

/**
 * Date Picker — iOS-style triple wheel (year / month / day). Scroll or drag
 * each column to a value. Container spec from Figma "Date Picker/iOS/Wheel".
 */
export function DatePicker({ value, minYear = 2000, maxYear = 2030, onChange, className, style }) {
  const init = value instanceof Date ? value : new Date();
  const [y, setY] = React.useState(init.getFullYear());
  const [m, setM] = React.useState(init.getMonth());
  const [d, setD] = React.useState(init.getDate());
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1 + "월");
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1 + "일");
  const dd = Math.min(d, daysInMonth);
  const emit = (ny, nm, ndv) => { onChange && onChange(new Date(ny, nm, ndv)); };
  return (
    <div className={className} style={{
      width: "fit-content", padding: "8px 0", display: "flex", flexDirection: "column",
      fontFamily: "var(--font-sans)", position: "relative", ...style,
    }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "row", padding: "0 16px" }}>
        <div style={{
          position: "absolute", left: 8, right: 8, top: "50%", transform: "translateY(-50%)",
          height: ITEM_H, borderRadius: 8, background: "var(--fill-normal,rgba(112,115,124,0.08))", pointerEvents: "none",
        }} />
        <Wheel values={years} index={years.indexOf(y)} width={92} onChange={(i) => { setY(years[i]); emit(years[i], m, dd); }} />
        <Wheel values={months} index={m} width={72} onChange={(i) => { setM(i); emit(y, i, dd); }} />
        <Wheel values={days} index={dd - 1} width={72} onChange={(i) => { setD(i + 1); emit(y, m, i + 1); }} />
      </div>
    </div>
  );
}
export default DatePicker;

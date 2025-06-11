import { useState } from "react";
import MySlider from "./MySlider";

function MyPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  return (
    <div
      style={{
        border: "2px solid #888",
        borderRadius: "16px",
        padding: "24px",
        maxWidth: "320px",
        margin: "32px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        R: <MySlider value={r} onChange={setR} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        G: <MySlider value={g} onChange={setG} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        B: <MySlider value={b} onChange={setB} />
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: `rgb(${r},${g},${b})`,
          border: "2px solid #333",
          margin: "16px auto",
          borderRadius: "12px"
        }}
      />
      <div>RGB({r}, {g}, {b})</div>
    </div>
  );
}

export default MyPanel;

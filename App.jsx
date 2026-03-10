import { useState } from "react";
import Infographic from "./components/Infographic";
import StatsBoard from "./components/StatsBoard";

export default function App() {
  const [view, setView] = useState("infographic");

  return (
    <div>
      {/* Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        padding: "16px",
        background: "#0a0f1a",
        borderBottom: "1px solid #1e293b",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <button
          onClick={() => setView("infographic")}
          style={{
            padding: "8px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 13,
            background: view === "infographic" ? "#f59e0b" : "#1e293b",
            color: view === "infographic" ? "#0f172a" : "#94a3b8",
          }}
        >
          Infografis
        </button>
        <button
          onClick={() => setView("stats")}
          style={{
            padding: "8px 20px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 13,
            background: view === "stats" ? "#f59e0b" : "#1e293b",
            color: view === "stats" ? "#0f172a" : "#94a3b8",
          }}
        >
          Statistik
        </button>
      </div>

      {/* Content */}
      {view === "infographic" ? <Infographic /> : <StatsBoard />}
    </div>
  );
}

import { useState } from "react";

const stats = [
  {
    category: "💀 Kerugian Investor",
    color: "#ef4444",
    accent: "#fca5a5",
    bg: "#451a1a",
    items: [
      { label: "Kerugian kolaps Luna/UST", value: "$40 M", unit: "miliar", icon: "📉" },
      { label: "Kerugian Jane Street hindari", value: "$200 M", unit: "juta", icon: "🛡️" },
      { label: "Waktu Jane Street keluar sebelum kolaps", value: "10", unit: "menit", icon: "⏱️" },
      { label: "Dana ditarik Jane Street dari Curve3pool", value: "$85 M", unit: "juta", icon: "💸" },
    ],
  },
  {
    category: "🎭 Posisi ETF Tersembunyi",
    color: "#3b82f6",
    accent: "#93c5fd",
    bg: "#172554",
    items: [
      { label: "Saham IBIT dimiliki Jane Street", value: "20.3 jt", unit: "lembar", icon: "📄" },
      { label: "Nilai posisi IBIT dilaporkan", value: "$790 M", unit: "juta", icon: "💰" },
      { label: "Posisi IBIT tertinggi", value: "$2.5 M", unit: "miliar", icon: "📊" },
      { label: "Kenaikan posisi MicroStrategy", value: "473%", unit: "", icon: "🚀" },
    ],
  },
  {
    category: "⏰ Pola Dump Jam 10 Pagi",
    color: "#f59e0b",
    accent: "#fcd34d",
    bg: "#451a03",
    items: [
      { label: "Penurunan tipikal dalam hitungan menit", value: "2-3%", unit: "", icon: "📉" },
      { label: "Posisi long terhapus (contoh Desember)", value: "$171 M", unit: "juta", icon: "🔥" },
      { label: "Drop harga contoh: $89.700 →", value: "$87.7K", unit: "", icon: "⬇️" },
      { label: "Frekuensi kejadian", value: "Tiap", unit: "hari", icon: "🔄" },
    ],
  },
  {
    category: "🇮🇳 Kasus India (SEBI)",
    color: "#8b5cf6",
    accent: "#c4b5fd",
    bg: "#2e1065",
    items: [
      { label: "Profit manipulasi dalam 2 tahun", value: "$4.3 M", unit: "miliar", icon: "💰" },
      { label: "Profit dalam SATU hari trading", value: "$870 M", unit: "juta", icon: "⚡" },
      { label: "Halaman laporan SEBI", value: "105", unit: "halaman", icon: "📋" },
      { label: "Firma yang boleh akses ETF BTC BlackRock", value: "4", unit: "firma", icon: "🔑" },
    ],
  },
];

const timeline = [
  { date: "Sep 2021", text: "Bryce Pratt gabung Jane Street", dot: "#94a3b8" },
  { date: "Mei 2022", text: "Luna/UST kolaps, $40M hilang", dot: "#ef4444" },
  { date: "Akhir 2024", text: "Pola dump jam 10 pagi mulai", dot: "#f59e0b" },
  { date: "Awal 2025", text: "Gugatan diajukan → dump berhenti", dot: "#22c55e" },
  { date: "Q3 2025", text: "Tekanan reda → dump mulai lagi", dot: "#f59e0b" },
  { date: "Q4 2025", text: "13F: posisi IBIT $790 juta", dot: "#3b82f6" },
  { date: "Feb 2026", text: "Gugatan federal baru diajukan", dot: "#8b5cf6" },
];

const bars = [
  { label: "Dana ditarik dari Curve3pool", val: 85, max: 40000, display: "$85 juta", color: "#ef4444" },
  { label: "Kerugian dihindari", val: 200, max: 40000, display: "$200 juta", color: "#f59e0b" },
  { label: "Posisi long terhapus (1 hari)", val: 171, max: 40000, display: "$171 juta", color: "#f59e0b" },
  { label: "Posisi IBIT dilaporkan", val: 790, max: 40000, display: "$790 juta", color: "#3b82f6" },
  { label: "Profit SEBI (India)", val: 4300, max: 40000, display: "$4.3 miliar", color: "#8b5cf6" },
  { label: "Total kerugian Luna/UST", val: 40000, max: 40000, display: "$40 miliar", color: "#ef4444" },
];

export default function Stats() {
  const [openCat, setOpenCat] = useState(0);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#0a0f1a",
      color: "#e2e8f0",
      minHeight: "100vh",
      padding: "32px 16px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: "#f59e0b",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 10,
        }}>
          Statistik Kasus
        </div>
        <h1 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 24,
          fontWeight: 700,
          color: "#f8fafc",
          margin: "0 0 8px",
          lineHeight: 1.3,
        }}>
          Jane Street x Bitcoin: Angka-Angka Kunci
        </h1>
      </div>

      {/* Headline Stats */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", maxWidth: 600, margin: "0 auto 36px" }}>
        {[
          { val: "$40M", label: "Kerugian Luna", color: "#ef4444" },
          { val: "$790M", label: "Posisi ETF", color: "#3b82f6" },
          { val: "4", label: "Firma Akses", color: "#8b5cf6" },
        ].map((h, i) => (
          <div key={i} style={{
            background: "#1e293b",
            borderRadius: 12,
            padding: "16px 24px",
            textAlign: "center",
            flex: "1 1 140px",
            border: `1px solid ${h.color}33`,
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 28,
              fontWeight: 700,
              color: h.color,
            }}>{h.val}</div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{h.label}</div>
          </div>
        ))}
      </div>

      {/* Category Cards */}
      <div style={{ maxWidth: 600, margin: "0 auto 36px" }}>
        {stats.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => setOpenCat(openCat === idx ? -1 : idx)}
            style={{
              background: openCat === idx ? cat.bg : "#1e293b",
              borderRadius: 12,
              padding: "16px 20px",
              marginBottom: 12,
              cursor: "pointer",
              border: `1px solid ${openCat === idx ? cat.color + "66" : "#334155"}`,
              transition: "all 0.3s ease",
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: cat.color }}>
                {cat.category}
              </span>
              <span style={{
                color: "#64748b",
                transform: openCat === idx ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}>▼</span>
            </div>

            {openCat === idx && (
              <div style={{ marginTop: 16 }}>
                {cat.items.map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderTop: i > 0 ? "1px solid #ffffff11" : "none",
                  }}>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>
                      {item.icon} {item.label}
                    </span>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 14,
                      fontWeight: 700,
                      color: cat.accent,
                    }}>
                      {item.value} <span style={{ fontSize: 11, color: "#64748b" }}>{item.unit}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 600, margin: "0 auto 36px" }}>
        <div style={{
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          color: "#f59e0b",
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 20,
        }}>
          Kronologi
        </div>
        {timeline.map((t, i) => (
          <div key={i} style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            marginBottom: 16,
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 20,
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: t.dot,
              }} />
              {i < timeline.length - 1 && (
                <div style={{ width: 2, height: 24, background: "#334155" }} />
              )}
            </div>
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#64748b",
              }}>{t.date}</div>
              <div style={{ fontSize: 13, color: "#cbd5e1" }}>{t.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div style={{ maxWidth: 600, margin: "0 auto 36px" }}>
        <div style={{
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          color: "#f59e0b",
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 20,
        }}>
          Perbandingan Skala
        </div>
        {bars.map((bar, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{bar.label}</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                color: bar.color,
              }}>
                {bar.display}
              </span>
            </div>
            <div style={{
              background: "#0a0f1a",
              borderRadius: 6,
              height: 10,
              overflow: "hidden",
            }}>
              <div style={{
                width: `${Math.max((bar.val / bar.max) * 100, 2)}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)`,
                borderRadius: 6,
                transition: "width 0.5s ease",
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        textAlign: "center",
        fontSize: 10,
        color: "#475569",
        lineHeight: 1.5,
      }}>
        ⚠️ Data berdasarkan dokumen gugatan & filing publik. Gugatan masih berjalan. Jane Street membantah semua tuduhan.
      </div>
    </div>
  );
}

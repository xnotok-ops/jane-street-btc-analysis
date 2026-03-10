import { useState } from "react";

const sections = [
  {
    id: 1,
    icon: "💬",
    title: "Grup Chat Rahasia",
    subtitle: '"Bryce\'s Secret"',
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    steps: [
      { emoji: "👤", text: 'Bryce Pratt: intern di Terraform → pindah ke Jane Street' },
      { emoji: "📱", text: "Bikin grup chat rahasia, bocorkan info internal Terraform" },
      { emoji: "💸", text: "Jane Street tarik $85 juta SEBELUM publik tahu" },
      { emoji: "💥", text: "Luna/UST kolaps → investor ritel rugi $40 miliar" },
    ],
  },
  {
    id: 2,
    icon: "⏰",
    title: "Dump Jam 10 Pagi",
    subtitle: "Pola Algoritmik Harian",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
    steps: [
      { emoji: "📉", text: "Tiap jam 10 pagi (buka pasar AS), Bitcoin anjlok tiba-tiba" },
      { emoji: "🤖", text: "Penurunan presisi & algoritmik, bukan alami" },
      { emoji: "⚖️", text: "Jane Street digugat → pola BERHENTI" },
      { emoji: "🔄", text: "Tekanan hukum reda → pola MULAI LAGI" },
    ],
  },
  {
    id: 3,
    icon: "🎭",
    title: "Posisi Tersembunyi",
    subtitle: "Yang Dilaporkan vs Kenyataan",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    steps: [
      { emoji: "📄", text: "Lapor punya $790 juta saham Bitcoin ETF (IBIT)" },
      { emoji: "📰", text: 'Media & publik: "Bullish! Mereka borong Bitcoin!"' },
      { emoji: "🙈", text: "Posisi derivatif (opsi/futures) TIDAK wajib dilaporkan" },
      { emoji: "⚠️", text: "Bisa jadi justru UNTUNG kalau Bitcoin TURUN" },
    ],
  },
  {
    id: 4,
    icon: "🔑",
    title: "Akses Istimewa",
    subtitle: "Penjaga Gerbang ETF Bitcoin",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    steps: [
      { emoji: "🏦", text: 'Cuma 4 firma di dunia punya "kunci" ETF Bitcoin BlackRock' },
      { emoji: "🔓", text: "Jane Street salah satunya" },
      { emoji: "↔️", text: "Bisa pindahkan Bitcoin masuk-keluar ETF sesuka hati" },
      { emoji: "👁️", text: "Tidak ada pengawasan publik atas aktivitas ini" },
    ],
  },
];

const analogies = [
  {
    emoji: "🎟️",
    title: "Tiket Konser",
    text: 'Bitcoin itu seperti tiket konser limited edition (cuma 21 juta). Tapi Jane Street bisa "cetak tiket palsu" lewat derivatif yang tidak kelihatan siapapun.',
  },
  {
    emoji: "⚖️",
    title: "Timbangan Curang",
    text: "Bayangkan pasar ikan. Penjual pakai timbangan yang kelihatan normal, tapi diam-diam diatur supaya selalu lebih ringan. Pembeli tidak tahu timbangannya curang.",
  },
  {
    emoji: "🃏",
    title: "Kartu Tersembunyi",
    text: "Seperti main poker, tapi satu pemain boleh sembunyikan kartunya dan tidak ada wasit yang periksa. Yang lain main jujur, dia main curang.",
  },
];

export default function Diagram() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeAnalogy, setActiveAnalogy] = useState(0);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#0f172a",
      color: "#e2e8f0",
      minHeight: "100vh",
      padding: "32px 16px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          color: "#f59e0b",
          letterSpacing: 3,
          marginBottom: 12,
          textTransform: "uppercase",
        }}>
          Infografis Sederhana
        </div>
        <h1 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 28,
          fontWeight: 700,
          color: "#f8fafc",
          margin: "0 0 12px",
          lineHeight: 1.3,
        }}>
          Bagaimana Jane Street Diduga Manipulasi Bitcoin?
        </h1>
        <p style={{ fontSize: 15, color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>
          4 poin utama yang menjelaskan dugaan manipulasi harga Bitcoin oleh Jane Street Capital
        </p>
      </div>

      {/* Flow Diagram */}
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {sections.map((section, idx) => (
          <div key={section.id}>
            {/* Section Card */}
            <div
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              style={{
                background: activeSection === section.id ? section.bg : "#1e293b",
                border: `2px solid ${activeSection === section.id ? section.color : "#334155"}`,
                borderRadius: 16,
                padding: "20px 24px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
              }}
            >
              {/* Number badge */}
              <div style={{
                position: "absolute",
                top: -12,
                left: 20,
                background: section.color,
                color: "#fff",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                padding: "2px 12px",
                borderRadius: 20,
              }}>
                LANGKAH {section.id}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 4 }}>
                <div style={{ fontSize: 32 }}>{section.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: activeSection === section.id ? "#1e293b" : "#f8fafc",
                  }}>
                    {section.title}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: activeSection === section.id ? "#64748b" : "#94a3b8",
                    marginTop: 2,
                  }}>
                    {section.subtitle}
                  </div>
                </div>
                <div style={{
                  fontSize: 20,
                  color: activeSection === section.id ? "#1e293b" : "#64748b",
                  transform: activeSection === section.id ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}>
                  ▼
                </div>
              </div>

              {/* Expanded Content */}
              {activeSection === section.id && (
                <div style={{ marginTop: 20 }}>
                  {section.steps.map((step, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 0",
                      borderTop: i > 0 ? `1px solid ${section.border}` : "none",
                    }}>
                      <div style={{ fontSize: 20, lineHeight: 1 }}>{step.emoji}</div>
                      <div style={{ fontSize: 14, color: "#334155", lineHeight: 1.6 }}>{step.text}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Connector */}
            {idx < sections.length - 1 && (
              <div style={{ textAlign: "center", padding: "8px 0" }}>
                <div style={{ width: 2, height: 24, background: "#334155", margin: "0 auto" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Analogies Section */}
      <div style={{ maxWidth: 560, margin: "48px auto 0" }}>
        <div style={{
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: 14,
          color: "#f59e0b",
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 20,
        }}>
          Analogi Sederhana
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
          {analogies.map((a, i) => (
            <button
              key={i}
              onClick={() => setActiveAnalogy(i)}
              style={{
                border: "none",
                borderRadius: 10,
                padding: "8px 16px",
                cursor: "pointer",
                background: activeAnalogy === i ? "#f59e0b" : "#334155",
                color: activeAnalogy === i ? "#0f172a" : "#94a3b8",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease",
              }}
            >
              {a.emoji} {a.title}
            </button>
          ))}
        </div>

        <div style={{
          background: "#0f172a",
          borderRadius: 12,
          padding: "20px",
          fontSize: 14,
          lineHeight: 1.7,
          color: "#cbd5e1",
        }}>
          {analogies[activeAnalogy].text}
        </div>
      </div>

      {/* Kesimpulan */}
      <div style={{
        maxWidth: 560,
        margin: "32px auto 0",
        background: "linear-gradient(135deg, #7c3aed22, #ef444422)",
        borderRadius: 16,
        padding: "24px",
        border: "1px solid #7c3aed44",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 28, marginBottom: 12 }}>❓</div>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 16,
          fontWeight: 700,
          color: "#f8fafc",
          lineHeight: 1.5,
          marginBottom: 8,
        }}>
          Pertanyaan Kunci
        </div>
        <div style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.7 }}>
          Berapa <strong style={{ color: "#f59e0b" }}>posisi bersih ASLI</strong> Jane Street terhadap Bitcoin? Selama tidak wajib dijawab, merekalah yang tentukan harga — bukan pasar bebas.
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        maxWidth: 560,
        margin: "24px auto 0",
        textAlign: "center",
        fontSize: 11,
        color: "#475569",
        lineHeight: 1.5,
      }}>
        ⚠️ Gugatan masih berjalan. Jane Street membantah semua tuduhan. Infografis ini berdasarkan klaim dalam dokumen gugatan, bukan fakta yang sudah terbukti.
      </div>
    </div>
  );
}

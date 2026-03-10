# 📊 Jane Street BTC Manipulation Analysis

Interactive data visualization and educational content exploring Jane Street Capital's alleged Bitcoin price manipulation patterns. Built to make complex financial analysis accessible to Indonesian audiences.

## Why I Built This

The Jane Street / BTC manipulation story was everywhere on CT (Crypto Twitter), but most analysis was in English and assumed you already understood market microstructure. I wanted to break it down for Indonesian audiences — with visuals, not walls of text.

## What's Inside

### 1. Interactive React Infographic
Visual breakdown of Jane Street's alleged trading patterns, showing:
- Timeline of suspicious price movements
- Volume anomalies correlated with Jane Street wallet activity
- Spread manipulation patterns

### 2. Statistics Dashboard
Data-driven dashboard showing:
- Price impact analysis around suspected manipulation events
- Volume distribution charts
- Correlation metrics between wallet movements and price action

### 3. Twitter Thread Content
Structured educational thread (ID/EN bilingual) that walks through the analysis step by step.

## Tech Stack

| Component | Tool |
|-----------|------|
| Frontend | React + Tailwind CSS |
| Charts | Recharts / D3.js |
| Data | On-chain data (Arkham / Etherscan) |
| Content | Bilingual (Bahasa Indonesia / English) |
| Hosting | Static (GitHub Pages compatible) |

## Project Structure


jane-street-btc-analysis/
├── src/
│   ├── components/
│   │   ├── Infographic.jsx       # Main interactive infographic
│   │   ├── StatsBoard.jsx        # Statistics dashboard
│   │   ├── TimelineChart.jsx     # Price movement timeline
│   │   └── VolumeAnalysis.jsx    # Volume anomaly visualizer
│   ├── data/
│   │   ├── price_data.json       # Historical BTC price data
│   │   ├── wallet_activity.json  # Jane Street wallet movements
│   │   └── volume_data.json      # Exchange volume data
│   └── App.jsx
├── public/
│   └── index.html
├── thread/
│   └── twitter_thread_id_en.md   # Bilingual thread script
├── package.json
└── README.md


## Quick Start
```bash
git clone https://github.com/xnotok-ops/jane-street-btc-analysis.git
cd jane-street-btc-analysis
npm install
npm run dev
```

Open `http://localhost:5173` to view the dashboard.

## Screenshots

> _Add screenshots of your infographic and dashboard here_
>
> ![Infographic Preview](./screenshots/infographic.png)
> ![Dashboard Preview](./screenshots/dashboard.png)

## Key Findings (Simplified)

1. **Timing Patterns** — Large wallet movements from suspected Jane Street addresses consistently preceded significant BTC price swings
2. **Volume Spikes** — Abnormal volume clusters appeared on specific exchanges within narrow time windows
3. **Spread Impact** — Bid-ask spreads widened measurably during suspected manipulation periods

⚠️ *This is analysis/educational content, not accusations. Correlation ≠ causation.*

## Who This Is For

- Indonesian crypto community members who want to understand market manipulation
- Anyone interested in on-chain analysis and market microstructure
- Content creators looking for examples of data-driven crypto education

## Lessons Learned

- Making complex financial topics visual > writing long threads
- Indonesian audience engages more with bilingual content (Indo casual + English technical terms)
- React + Recharts is the fastest combo for interactive data viz
- On-chain data is messy — cleaning and normalizing took 60% of the work

---

**Built by [@xnotok](https://x.com/xnotok)**


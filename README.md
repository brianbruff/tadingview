# TradingView Demo

A demo Angular application showcasing currency exchange rate analysis with TradingView charts and a chatbot interface.

## Features

- 📊 Interactive TradingView Lightweight Charts
- 🤖 Chatbot-style conversation interface
- 📈 Real ECB exchange rate data (EUR/USD, GBP/USD)
- 📱 Responsive Material Design UI
- ⚡ Fast and lightweight

## Technology Stack

- **Frontend**: Angular 18+
- **Charts**: TradingView Lightweight Charts
- **UI**: Angular Material
- **Package Manager**: pnpm
- **Data**: Static ECB exchange rate data (2024-2025)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tradingview-demo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── chatbot/           # Main chat interface
│   │   ├── message/           # Individual message component
│   │   └── trading-view-chart/ # TradingView chart component
│   ├── data/
│   │   └── exchange-rate.data.ts # Static conversation and rate data
│   ├── app.component.ts       # Root component
│   └── main.ts               # Bootstrap file
├── styles.scss               # Global styles
└── index.html               # Main HTML file
```

## Features Detail

### Chatbot Interface
- Static conversation flow with predefined responses
- Progressive message display with typing indicators
- Professional market analysis content

### TradingView Charts
- Interactive line charts for EUR/USD and GBP/USD
- Responsive design with legends
- Real exchange rate data covering 2024-2025

### Market Analysis
- Comprehensive overview of currency performance
- Key trend analysis and market factors
- Forward-looking predictions and scenarios

## Available Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm watch` - Build in watch mode

## Data Source

The application uses static ECB (European Central Bank) exchange rate data for demonstration purposes, covering the period from January 2024 to July 2025.

## License

This project is for demonstration purposes only.

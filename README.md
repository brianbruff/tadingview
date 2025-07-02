# 📈 TradingView Demo - Currency Exchange Analysis

> A sophisticated Angular application showcasing professional currency exchange rate analysis with interactive TradingView charts and an intelligent chatbot interface.

## 🚀 Live Demo

**[View Live Application →](https://brianbruff.github.io/tadingview/)**

## ✨ Features

### 🌙 **Dark/Light Theme Toggle**
- **Professional Color Palette**: TradingView-inspired green and dark theme
- **System Preference Detection**: Automatically adapts to your system's theme
- **Persistent Settings**: Your theme choice is saved across sessions
- **Smooth Transitions**: Seamless animations between themes

### 📊 **Interactive TradingView Charts**
- **Lightweight Charts**: Built with TradingView's professional charting library
- **Dual Currency Display**: EUR/USD and GBP/USD exchange rates
- **Theme-Aware**: Charts automatically adapt to light/dark themes
- **Responsive Design**: Optimized for all screen sizes

### 🤖 **Intelligent Chatbot Interface**
- **Automated Analysis Flow**: Progressive market analysis delivery
- **Typing Indicators**: Realistic chat experience with animated indicators
- **Professional Content**: Comprehensive market insights and predictions
- **Interactive UI**: Chat-like interface with message bubbles

### 📈 **Market Analysis Features**
- **Real ECB Data**: European Central Bank exchange rate data (2024-2025)
- **Trend Analysis**: Key market factors and performance indicators
- **Forward-Looking Insights**: Market predictions and scenario analysis
- **Visual Data Representation**: Clean, professional chart presentations

## 🛠 Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Angular** | Frontend Framework | 18+ |
| **TradingView Lightweight Charts** | Financial Charts | Latest |
| **Angular Material** | UI Components | Latest |
| **TypeScript** | Programming Language | Latest |
| **SCSS** | Styling | Latest |
| **pnpm** | Package Management | Latest |

## 🎨 Design System

### Color Palette
**Light Theme**
- Primary: `#089981` (TradingView Green)
- Background: `#ffffff`
- Text: `#333333`

**Dark Theme**
- Primary: `#00c896` (Bright Green)
- Background: `#131722` (TradingView Dark)
- Text: `#d1d4dc`

### Chart Colors
- **EUR/USD**: `#00c896` (Green)
- **GBP/USD**: `#ff6b35` (Orange)

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brianbruff/tadingview.git
   cd tadingview
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm start
   ```

4. **Open browser**
   Navigate to `http://localhost:4200`

## 📁 Project Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── chatbot/              # 🤖 Main chat interface
│   │   ├── message/              # 💬 Individual message display
│   │   └── trading-view-chart/   # 📊 TradingView chart integration
│   ├── services/
│   │   └── theme.service.ts      # 🌙 Theme management
│   ├── data/
│   │   └── exchange-rate.data.ts # 📈 Market data & conversations
│   └── app.component.ts          # 🏠 Root component
├── styles.scss                   # 🎨 Global styles & themes
└── theme.scss                    # 🖌️ Material theme configuration
```

## 🎯 Component Features

### ChatbotComponent
- Automated conversation flow
- Progressive message delivery
- Typing animations
- Completion states

### TradingViewChartComponent
- Real-time theme switching
- Responsive chart sizing
- Interactive legends
- Professional styling

### ThemeService
- System preference detection
- LocalStorage persistence
- Reactive theme updates
- Component synchronization

## 📊 Data Overview

### Exchange Rate Coverage
- **Time Period**: January 2024 - July 2025
- **Currency Pairs**: EUR/USD, GBP/USD
- **Data Source**: European Central Bank (ECB)
- **Update Frequency**: Static demo data

### Conversation Flow
1. **User Question**: Currency performance inquiry
2. **Market Overview**: Comprehensive analysis introduction
3. **Interactive Charts**: Visual data presentation
4. **Future Outlook**: Market predictions and scenarios

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | 🔥 Start development server |
| `pnpm build` | 🏗️ Build for production |
| `pnpm test` | 🧪 Run unit tests |
| `pnpm watch` | 👀 Build in watch mode |

## 🌐 Deployment

This application is automatically deployed to GitHub Pages via GitHub Actions.

**Live URL**: [https://brianbruff.github.io/tadingview/](https://brianbruff.github.io/tadingview/)

## 🎨 Screenshots

### Light Theme
Professional light interface with clean design and green accents.

### Dark Theme
TradingView-inspired dark theme for comfortable extended analysis sessions.

### Interactive Charts
Responsive TradingView charts with dual currency support.

## 🔧 Configuration

### Theme Customization
Modify CSS custom properties in `src/styles.scss`:

```scss
:root {
  --accent-primary: #089981;    // Primary green
  --accent-hover: #067a68;      // Hover state
  --bg-primary: #ffffff;        // Background
  // ... more variables
}
```

### Chart Configuration
Customize chart appearance in `trading-view-chart.component.ts`:

```typescript
const eurUsdSeries = this.chart.addLineSeries({
  color: '#00c896',      // Line color
  lineWidth: 2,          // Line thickness
  title: 'EUR/USD',      // Legend title
});
```

## 🤝 Contributing

This is a demonstration project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for demonstration purposes. See individual component licenses for details.

## 🙏 Acknowledgments

- **TradingView** for the excellent Lightweight Charts library
- **Angular Team** for the robust framework
- **European Central Bank** for exchange rate data
- **Material Design** for UI/UX guidelines

---

**Built with ❤️ using Angular and TradingView Lightweight Charts**

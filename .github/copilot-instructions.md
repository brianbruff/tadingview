# TradingView Demo Application - Copilot Instructions

## Project Overview
Building a demo Angular application that combines:
- Chatbot conversation interface with static responses
- TradingView Lightweight Charts integration
- ECB exchange rate data visualization (EUR/USD, GBP/USD)
- Focus on 2024-2025 market data and analysis

## Technology Stack
- **Frontend**: Angular 18+
- **Package Manager**: pnpm
- **Charts**: TradingView Lightweight Charts
- **Styling**: Angular Material + Custom CSS
- **Data**: Static ECB exchange rate data (EUR/USD, GBP/USD)

## Architecture Approach
1. **Component Structure**:
   - `ChatbotComponent`: Main chat interface
   - `TradingViewChartComponent`: Reusable chart component
   - `MessageComponent`: Individual chat message display

2. **Data Flow**:
   - Static conversation data with predefined responses
   - Exchange rate data embedded as JSON
   - Chart integration within chat messages

3. **UI/UX Design**:
   - Chat-like interface with message bubbles
   - Inline charts (2/3 way down in responses)
   - Responsive design for various screen sizes

## Development Progress

### Phase 1: Project Setup ✅
- [x] Initialize Angular project with pnpm
- [x] Install TradingView Lightweight Charts
- [x] Install Angular Material
- [x] Configure project structure

### Phase 2: Core Components 🚧
- [ ] Create ChatbotComponent
- [ ] Create TradingViewChartComponent
- [ ] Create MessageComponent
- [ ] Implement static conversation data

### Phase 3: Data Integration 📋
- [ ] Implement ECB exchange rate data (2024-2025)
- [ ] Create market analysis content
- [ ] Format data for TradingView charts

### Phase 4: Styling & Polish 📋
- [ ] Apply Material Design theming
- [ ] Implement responsive layout
- [ ] Add loading states and animations

## Sample Conversation Flow
1. **User**: "Show me EUR/USD and GBP/USD performance"
2. **Bot**: Market analysis text (1/3)
3. **Bot**: TradingView chart with 2024-2025 data (2/3)
4. **Bot**: Future outlook and summary (3/3)

## Key Technical Decisions
- Using TradingView Lightweight Charts for performance
- Static data approach for demo purposes
- Material Design for consistent UI
- Component-based architecture for reusability

## Notes
- ECB data covers 2024-2025 period
- Charts should be responsive and interactive
- Focus on EUR/USD and GBP/USD pairs
- Implement proper error handling for chart rendering

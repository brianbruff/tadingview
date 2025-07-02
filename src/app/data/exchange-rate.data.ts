export interface ExchangeRateData {
  date: string;
  eurUsd: number;
  gbpUsd: number;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  hasChart?: boolean;
  chartData?: ExchangeRateData[];
  chartType?: 'EUR/USD' | 'GBP/USD' | 'BOTH';
}

// Sample ECB exchange rate data for 2024-2025
export const EXCHANGE_RATE_DATA: ExchangeRateData[] = [
  // 2024 data (selected dates throughout the year)
  { date: '2024-01-02', eurUsd: 1.1047, gbpUsd: 1.2697 },
  { date: '2024-01-15', eurUsd: 1.0876, gbpUsd: 1.2718 },
  { date: '2024-02-01', eurUsd: 1.0835, gbpUsd: 1.2645 },
  { date: '2024-02-15', eurUsd: 1.0775, gbpUsd: 1.2598 },
  { date: '2024-03-01', eurUsd: 1.0815, gbpUsd: 1.2634 },
  { date: '2024-03-15', eurUsd: 1.0893, gbpUsd: 1.2745 },
  { date: '2024-04-01', eurUsd: 1.0823, gbpUsd: 1.2589 },
  { date: '2024-04-15', eurUsd: 1.0698, gbpUsd: 1.2456 },
  { date: '2024-05-01', eurUsd: 1.0712, gbpUsd: 1.2534 },
  { date: '2024-05-15', eurUsd: 1.0845, gbpUsd: 1.2687 },
  { date: '2024-06-01', eurUsd: 1.0889, gbpUsd: 1.2765 },
  { date: '2024-06-15', eurUsd: 1.0734, gbpUsd: 1.2698 },
  { date: '2024-07-01', eurUsd: 1.0712, gbpUsd: 1.2623 },
  { date: '2024-07-15', eurUsd: 1.0893, gbpUsd: 1.2889 },
  { date: '2024-08-01', eurUsd: 1.0798, gbpUsd: 1.2756 },
  { date: '2024-08-15', eurUsd: 1.0967, gbpUsd: 1.2934 },
  { date: '2024-09-01', eurUsd: 1.1045, gbpUsd: 1.3123 },
  { date: '2024-09-15', eurUsd: 1.1123, gbpUsd: 1.3234 },
  { date: '2024-10-01', eurUsd: 1.1098, gbpUsd: 1.3178 },
  { date: '2024-10-15', eurUsd: 1.0956, gbpUsd: 1.3045 },
  { date: '2024-11-01', eurUsd: 1.0878, gbpUsd: 1.2967 },
  { date: '2024-11-15', eurUsd: 1.0534, gbpUsd: 1.2634 },
  { date: '2024-12-01', eurUsd: 1.0456, gbpUsd: 1.2567 },
  { date: '2024-12-15', eurUsd: 1.0389, gbpUsd: 1.2498 },
  { date: '2024-12-31', eurUsd: 1.0401, gbpUsd: 1.2534 },
  
  // 2025 data (first half of year)
  { date: '2025-01-02', eurUsd: 1.0423, gbpUsd: 1.2578 },
  { date: '2025-01-15', eurUsd: 1.0389, gbpUsd: 1.2523 },
  { date: '2025-02-01', eurUsd: 1.0456, gbpUsd: 1.2634 },
  { date: '2025-02-15', eurUsd: 1.0523, gbpUsd: 1.2712 },
  { date: '2025-03-01', eurUsd: 1.0578, gbpUsd: 1.2789 },
  { date: '2025-03-15', eurUsd: 1.0634, gbpUsd: 1.2856 },
  { date: '2025-04-01', eurUsd: 1.0689, gbpUsd: 1.2923 },
  { date: '2025-04-15', eurUsd: 1.0734, gbpUsd: 1.2978 },
  { date: '2025-05-01', eurUsd: 1.0789, gbpUsd: 1.3034 },
  { date: '2025-05-15', eurUsd: 1.0823, gbpUsd: 1.3089 },
  { date: '2025-06-01', eurUsd: 1.0856, gbpUsd: 1.3123 },
  { date: '2025-06-15', eurUsd: 1.0889, gbpUsd: 1.3167 },
  { date: '2025-07-01', eurUsd: 1.0912, gbpUsd: 1.3201 },
];

export const CHAT_CONVERSATION: ChatMessage[] = [
  {
    id: '1',
    type: 'user',
    content: 'Can you show me how EUR/USD and GBP/USD have performed over the last year and what we might expect going forward?',
    timestamp: new Date('2025-07-02T10:00:00')
  },
  {
    id: '2',
    type: 'bot',
    content: `Great question! Let me provide you with a comprehensive analysis of EUR/USD and GBP/USD performance over the past 18 months.

**Market Overview (2024-2025)**

The foreign exchange markets have experienced significant volatility during this period, influenced by several key factors:

🏦 **Central Bank Policies**: The ECB's gradual rate cuts throughout 2024 weakened the Euro against the Dollar, while the Bank of England maintained a more hawkish stance, supporting GBP relative to EUR.

📊 **Economic Data**: US economic resilience, driven by strong employment data and consumer spending, has supported USD strength. Meanwhile, Brexit-related uncertainties continued to weigh on GBP, though less severely than in previous years.

⚡ **Geopolitical Events**: The ongoing Russia-Ukraine conflict, energy price volatility, and evolving China-US trade relations have created additional market uncertainty.`,
    timestamp: new Date('2025-07-02T10:00:15')
  },
  {
    id: '3',
    type: 'bot',
    content: `Here's the detailed exchange rate data for both currency pairs over the analysis period:`,
    timestamp: new Date('2025-07-02T10:00:30'),
    hasChart: true,
    chartData: EXCHANGE_RATE_DATA,
    chartType: 'BOTH'
  },
  {
    id: '4',
    type: 'bot',
    content: `**Key Trends Analysis:**

📈 **EUR/USD Performance**:
- Started 2024 at ~1.1047, declined to yearly lows around 1.0389 in December
- Recovery began in early 2025, currently trending upward toward 1.0912
- Total decline of about 6% from 2024 highs, now recovering approximately 5%

📈 **GBP/USD Performance**:
- More volatile than EUR/USD, ranging from 1.2456 to 1.3234
- Showed stronger resilience in H2 2024, outperforming EUR
- Current uptrend suggests continued GBP strength

**Forward-Looking Analysis (H2 2025)**:

🔮 **Expected Scenarios**:
- **EUR/USD**: Likely to trade in 1.06-1.12 range, with bias toward gradual strengthening as ECB policy normalizes
- **GBP/USD**: Potential for continued outperformance, targeting 1.32-1.35 if UK economic data remains supportive
- **Key Risks**: Fed policy pivots, European energy crisis, or unexpected geopolitical developments

The charts above show both pairs have found support and are in modest recovery phases, suggesting the worst of the USD strength cycle may be behind us.`,
    timestamp: new Date('2025-07-02T10:01:00')
  }
];

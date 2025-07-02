import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TradingViewChartComponent } from '../trading-view-chart/trading-view-chart.component';
import { ChatMessage } from '../../data/exchange-rate.data';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    TradingViewChartComponent
  ],
  template: `
    <div class="message" [class.user]="message.type === 'user'" [class.bot]="message.type === 'bot'">
      <div class="message-header" *ngIf="message.type === 'bot'">
        <mat-icon class="bot-icon">smart_toy</mat-icon>
        <span class="bot-name">Market Analyst</span>
        <span class="timestamp">{{ formatTime(message.timestamp) }}</span>
      </div>
      
      <div class="message-content">
        <div class="text-content" [innerHTML]="formatMessage(message.content)"></div>
        
        <div class="chart-section" *ngIf="message.hasChart && message.chartData">
          <app-trading-view-chart
            [data]="message.chartData"
            [title]="getChartTitle(message.chartType)">
          </app-trading-view-chart>
        </div>
      </div>
      
      <div class="message-footer" *ngIf="message.type === 'user'">
        <span class="timestamp">{{ formatTime(message.timestamp) }}</span>
      </div>
    </div>
  `,
  styles: [`
    .message {
      max-width: 85%;
      margin-bottom: 16px;
      animation: slideIn 0.3s ease-out;
    }

    .message.user {
      align-self: flex-end;
      background-color: var(--message-user-bg);
      color: var(--text-inverse);
      border-radius: 18px 18px 4px 18px;
      padding: 12px 16px;
      margin-left: auto;
      transition: background-color 0.3s ease;
    }

    .message.bot {
      align-self: flex-start;
      background-color: var(--message-bot-bg);
      border-radius: 4px 18px 18px 18px;
      box-shadow: 0 2px 8px var(--shadow-light);
      border: 1px solid var(--border-color);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .message-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px 8px 16px;
      background-color: var(--bg-secondary);
      border-bottom: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .bot-icon {
      color: var(--accent-primary);
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .bot-name {
      font-weight: 500;
      color: var(--text-primary);
      font-size: 14px;
    }

    .timestamp {
      margin-left: auto;
      font-size: 12px;
      color: var(--text-secondary);
    }

    .message.user .timestamp {
      color: rgba(255, 255, 255, 0.7);
    }

    .message-content {
      padding: 16px;
    }

    .message.bot .text-content {
      color: var(--text-primary);
      line-height: 1.6;
    }

    .text-content {
      white-space: pre-line;
    }

    .text-content :global(strong) {
      font-weight: 600;
      color: var(--accent-primary);
    }

    .chart-section {
      margin-top: 20px;
      margin-bottom: 8px;
    }

    .message-footer {
      text-align: right;
      margin-top: 4px;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Emoji and icon styling */
    .text-content :global(.emoji) {
      font-size: 1.1em;
    }
  `]
})
export class MessageComponent {
  @Input() message!: ChatMessage;

  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatMessage(content: string): string {
    // Convert markdown-style formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/📊|📈|🏦|⚡|🔮/g, '<span class="emoji">$&</span>');
  }

  getChartTitle(chartType?: 'EUR/USD' | 'GBP/USD' | 'BOTH'): string {
    switch (chartType) {
      case 'EUR/USD':
        return 'EUR/USD Exchange Rate';
      case 'GBP/USD':
        return 'GBP/USD Exchange Rate';
      case 'BOTH':
      default:
        return 'Currency Exchange Rates (2024-2025)';
    }
  }
}

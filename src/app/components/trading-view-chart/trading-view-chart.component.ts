import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createChart, IChartApi, LineData, Time } from 'lightweight-charts';
import { ExchangeRateData } from '../../data/exchange-rate.data';

@Component({
  selector: 'app-trading-view-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-wrapper">
      <div class="chart-header">
        <h3>{{ title }}</h3>
        <div class="chart-legend">
          <span class="legend-item eur-usd">
            <span class="color-indicator eur"></span>
            EUR/USD
          </span>
          <span class="legend-item gbp-usd">
            <span class="color-indicator gbp"></span>
            GBP/USD
          </span>
        </div>
      </div>
      <div #chartContainer class="chart-container"></div>
    </div>
  `,
  styles: [`
    .chart-wrapper {
      width: 100%;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .chart-header {
      padding: 16px;
      background: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chart-header h3 {
      margin: 0;
      color: #333;
      font-size: 18px;
      font-weight: 500;
    }

    .chart-legend {
      display: flex;
      gap: 16px;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      color: #666;
    }

    .color-indicator {
      width: 12px;
      height: 12px;
      border-radius: 2px;
    }

    .color-indicator.eur {
      background-color: #2196F3;
    }

    .color-indicator.gbp {
      background-color: #FF5722;
    }

    .chart-container {
      height: 400px;
      width: 100%;
    }
  `]
})
export class TradingViewChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  @Input() data: ExchangeRateData[] = [];
  @Input() title: string = 'Exchange Rates';
  
  private chart!: IChartApi;

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.remove();
    }
  }

  private initChart() {
    if (!this.chartContainer?.nativeElement) return;

    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.clientWidth,
      height: 400,
      layout: {
        background: { color: 'white' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
      crosshair: {
        mode: 1,
      },
      rightPriceScale: {
        borderColor: '#e0e0e0',
      },
      timeScale: {
        borderColor: '#e0e0e0',
        timeVisible: true,
        secondsVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
        lockVisibleTimeRangeOnResize: true,
      },
    });

    // EUR/USD Line Series
    const eurUsdSeries = this.chart.addLineSeries({
      color: '#2196F3',
      lineWidth: 2,
      title: 'EUR/USD',
    });

    // GBP/USD Line Series
    const gbpUsdSeries = this.chart.addLineSeries({
      color: '#FF5722',
      lineWidth: 2,
      title: 'GBP/USD',
    });

    // Convert data to TradingView format
    const eurUsdData: LineData[] = this.data.map(item => ({
      time: item.date as Time,
      value: item.eurUsd,
    }));

    const gbpUsdData: LineData[] = this.data.map(item => ({
      time: item.date as Time,
      value: item.gbpUsd,
    }));

    // Debug logging to ensure data is correct
    console.log('Chart data points:', this.data.length);
    console.log('Date range:', this.data[0]?.date, 'to', this.data[this.data.length - 1]?.date);
    console.log('EUR/USD range:', Math.min(...eurUsdData.map(d => d.value)), 'to', Math.max(...eurUsdData.map(d => d.value)));
    console.log('GBP/USD range:', Math.min(...gbpUsdData.map(d => d.value)), 'to', Math.max(...gbpUsdData.map(d => d.value)));

    eurUsdSeries.setData(eurUsdData);
    gbpUsdSeries.setData(gbpUsdData);

    // Ensure chart shows the full time range with a slight delay to allow rendering
    setTimeout(() => {
      this.chart.timeScale().fitContent();
    }, 100);

    // Handle resize
    this.handleResize();
  }

  private handleResize() {
    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || entries[0].target !== this.chartContainer.nativeElement) {
        return;
      }
      
      const newRect = entries[0].contentRect;
      this.chart.applyOptions({ 
        width: newRect.width,
        height: 400 
      });
    });

    resizeObserver.observe(this.chartContainer.nativeElement);
  }
}

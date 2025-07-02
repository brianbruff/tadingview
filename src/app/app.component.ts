import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ChatbotComponent
  ],
  template: `
    <div class="chat-container">
      <mat-toolbar color="primary" class="chat-header">
        <div class="header-content">
          <mat-icon>trending_up</mat-icon>
          <span style="margin-left: 8px;">TradingView Demo - Currency Exchange Analysis</span>
        </div>
        <button 
          class="theme-toggle" 
          (click)="toggleTheme()"
          (keydown.enter)="toggleTheme()"
          (keydown.space)="toggleTheme()"
          [attr.aria-label]="'Switch to ' + (isDarkTheme ? 'light' : 'dark') + ' theme'"
          [title]="'Switch to ' + (isDarkTheme ? 'light' : 'dark') + ' theme'">
          <mat-icon>{{ isDarkTheme ? 'light_mode' : 'dark_mode' }}</mat-icon>
          {{ isDarkTheme ? 'Light' : 'Dark' }}
        </button>
      </mat-toolbar>
      <app-chatbot></app-chatbot>
    </div>
  `,
  styles: [`
    .chat-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .chat-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-content {
      display: flex;
      align-items: center;
    }

    .theme-toggle {
      background: transparent;
      border: 1px solid var(--text-inverse);
      color: var(--text-inverse);
      border-radius: 20px;
      padding: 8px 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .theme-toggle:focus {
      outline: 2px solid rgba(255, 255, 255, 0.5);
      outline-offset: 2px;
    }

    .theme-toggle:active {
      transform: scale(0.98);
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TradingView Demo';
  isDarkTheme = false;
  private themeSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

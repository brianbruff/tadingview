import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    ChatbotComponent
  ],
  template: `
    <div class="chat-container">
      <mat-toolbar color="primary" class="chat-header">
        <mat-icon>trending_up</mat-icon>
        <span style="margin-left: 8px;">TradingView Demo - Currency Exchange Analysis</span>
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
    }
  `]
})
export class AppComponent {
  title = 'TradingView Demo';
}

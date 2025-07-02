import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from '../message/message.component';
import { ChatMessage, CHAT_CONVERSATION } from '../../data/exchange-rate.data';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MessageComponent
  ],
  template: `
    <div class="chat-wrapper">
      <div class="chat-messages" #messagesContainer>
        <div class="messages-list">
          <app-message 
            *ngFor="let message of displayedMessages; trackBy: trackByMessageId"
            [message]="message">
          </app-message>
          
          <div class="typing-indicator" *ngIf="isTyping">
            <mat-icon>smart_toy</mat-icon>
            <span>Market Analyst is typing</span>
            <div class="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="chat-controls" *ngIf="!isComplete">
        <mat-card class="control-panel">
          <div class="control-content">
            <p>{{ getControlMessage() }}</p>
            <button mat-raised-button color="primary" (click)="continueConversation()" [disabled]="isTyping">
              <mat-icon>play_arrow</mat-icon>
              {{ getButtonText() }}
            </button>
          </div>
        </mat-card>
      </div>
      
      <div class="conversation-complete" *ngIf="isComplete">
        <mat-card class="completion-panel">
          <div class="completion-content">
            <mat-icon class="check-icon">check_circle</mat-icon>
            <h3>Analysis Complete</h3>
            <p>Market analysis and exchange rate data have been successfully presented.</p>
            <button mat-stroked-button (click)="resetConversation()">
              <mat-icon>refresh</mat-icon>
              Start New Analysis
            </button>
          </div>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .chat-wrapper {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 64px);
      background-color: #f5f5f5;
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      scroll-behavior: smooth;
    }

    .messages-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background-color: white;
      border-radius: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      max-width: 300px;
      color: #666;
      font-style: italic;
    }

    .typing-indicator mat-icon {
      color: #1976d2;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .typing-dots {
      display: flex;
      gap: 4px;
      margin-left: auto;
    }

    .typing-dots span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #1976d2;
      animation: bounce 1.4s ease-in-out infinite both;
    }

    .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
    .typing-dots span:nth-child(2) { animation-delay: -0.16s; }
    .typing-dots span:nth-child(3) { animation-delay: 0s; }

    @keyframes bounce {
      0%, 80%, 100% { 
        transform: scale(0.8);
        opacity: 0.5;
      }
      40% { 
        transform: scale(1);
        opacity: 1;
      }
    }

    .chat-controls {
      padding: 20px;
      background-color: #f5f5f5;
    }

    .control-panel {
      max-width: 1200px;
      margin: 0 auto;
      background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
      color: white;
    }

    .control-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 16px;
    }

    .control-content p {
      margin: 0;
      font-size: 16px;
    }

    .control-content button {
      background-color: white;
      color: #1976d2;
      min-width: 160px;
    }

    .conversation-complete {
      padding: 20px;
    }

    .completion-panel {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .completion-content {
      padding: 32px;
    }

    .check-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #4caf50;
      margin-bottom: 16px;
    }

    .completion-content h3 {
      margin: 16px 0;
      color: #333;
    }

    .completion-content p {
      color: #666;
      margin-bottom: 24px;
    }

    .completion-content button {
      color: #1976d2;
      border-color: #1976d2;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .control-content {
        flex-direction: column;
        text-align: center;
      }
      
      .chat-messages {
        padding: 16px;
      }
    }
  `]
})
export class ChatbotComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  displayedMessages: ChatMessage[] = [];
  allMessages: ChatMessage[] = CHAT_CONVERSATION;
  currentMessageIndex = 0;
  isTyping = false;
  isComplete = false;
  private shouldScrollToBottom = false;

  ngOnInit() {
    // Start with the first message (user question)
    this.displayedMessages = [this.allMessages[0]];
    this.currentMessageIndex = 0;
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  continueConversation() {
    if (this.isComplete || this.isTyping) return;

    this.isTyping = true;
    this.shouldScrollToBottom = true;

    // Simulate typing delay (1.5 seconds)
    setTimeout(() => {
      this.currentMessageIndex++;
      
      if (this.currentMessageIndex < this.allMessages.length) {
        this.displayedMessages.push(this.allMessages[this.currentMessageIndex]);
        this.isTyping = false;
        this.shouldScrollToBottom = true;
        
        // Check if this is the last message
        if (this.currentMessageIndex >= this.allMessages.length - 1) {
          setTimeout(() => {
            this.isComplete = true;
          }, 500);
        }
      } else {
        this.isTyping = false;
        this.isComplete = true;
      }
    }, 1500);
  }

  resetConversation() {
    this.displayedMessages = [this.allMessages[0]];
    this.currentMessageIndex = 0;
    this.isTyping = false;
    this.isComplete = false;
    this.shouldScrollToBottom = true;
  }

  getControlMessage(): string {
    const remainingMessages = this.allMessages.length - this.displayedMessages.length;
    
    if (remainingMessages === 3) {
      return "Ready to see the comprehensive market analysis?";
    } else if (remainingMessages === 2) {
      return "Continue to view the interactive exchange rate charts";
    } else if (remainingMessages === 1) {
      return "Get the forward-looking analysis and market outlook";
    }
    
    return "Continue the analysis";
  }

  getButtonText(): string {
    const remainingMessages = this.allMessages.length - this.displayedMessages.length;
    
    if (remainingMessages === 3) {
      return "Begin Analysis";
    } else if (remainingMessages === 2) {
      return "Show Charts";
    } else if (remainingMessages === 1) {
      return "Show Outlook";
    }
    
    return "Continue";
  }

  trackByMessageId(index: number, message: ChatMessage): string {
    return message.id;
  }

  private scrollToBottom(): void {
    try {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}

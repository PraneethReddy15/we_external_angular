import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>Header Section</h1>
    </header>
  `,
  styles: [`
    header {
      background-color: #f8f9fa;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class HeaderComponent {}

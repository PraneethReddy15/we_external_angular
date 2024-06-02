import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <p>Footer Section</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #f8f9fa;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class FooterComponent {}

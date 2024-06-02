import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <p>Main Content Section</p>
    </main>
  `,
  styles: [`
    main {
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class MainComponent {}

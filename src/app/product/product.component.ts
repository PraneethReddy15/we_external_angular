import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  showDetails = false;

  product = {
    name: 'Laptop',
    price: 1000,
    category: 'Electronics'
  };

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  shareWhatsApp() {
    const msg = `Check this product: ${this.product.name}\n${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCard {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  delete() {
    console.log('CARD emit id:', this.product.id);
    this.deleteProduct.emit(this.product.id);
  }


  like() {
    this.product.likes++;
  }


  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  stars(): number[] {
    const full = Math.round(this.product.rating);
    return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
  }

}

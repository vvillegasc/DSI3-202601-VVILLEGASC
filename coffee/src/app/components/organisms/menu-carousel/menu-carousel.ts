import { Component, Input, signal, computed } from '@angular/core';
import { ProductCard } from '../../molecules/product-card/product-card';

export interface CarouselItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-menu-carousel',
  imports: [ProductCard],
  templateUrl: './menu-carousel.html',
  styleUrl: './menu-carousel.css',
})
export class MenuCarousel {
  @Input() subtitle: string = '';
  @Input() items: CarouselItem[] = [];

  currentIndex = signal(0);
  visibleCards = 3;
  cardWidth = 300;

  get maxIndex(): number {
    return Math.max(0, this.items.length - this.visibleCards);
  }

  get offset(): string {
    return `translateX(-${this.currentIndex() * this.cardWidth}px)`;
  }

  prev(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
    }
  }

  next(): void {
    if (this.currentIndex() < this.maxIndex) {
      this.currentIndex.update(i => i + 1);
    }
  }

  isPrevDisabled(): boolean {
    return this.currentIndex() === 0;
  }

  isNextDisabled(): boolean {
    return this.currentIndex() >= this.maxIndex;
  }
}

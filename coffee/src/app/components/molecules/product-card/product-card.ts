import { Component, Input } from '@angular/core';
import { CafeButton } from '../../atoms/cafe-button/cafe-button';

@Component({
  selector: 'app-product-card',
  imports: [CafeButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cafe-button',
  imports: [],
  templateUrl: './cafe-button.html',
  styleUrl: './cafe-button.css',
})
export class CafeButton {
  @Input() label: string = 'SHOP NOW';
  @Input() variant: 'primary' | 'secondary' | 'send' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
}

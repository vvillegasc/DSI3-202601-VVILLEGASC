import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link-text',
  imports: [],
  templateUrl: './link-text.html',
  styleUrl: './link-text.css',
})
export class LinkText {
  @Input() text: string = '';
  @Input() linkLabel: string = '';
  @Output() linkClick = new EventEmitter<void>();
}

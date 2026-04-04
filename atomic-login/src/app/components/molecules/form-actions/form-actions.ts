import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../atoms/button/button';
import { LinkText } from '../../atoms/link-text/link-text';

@Component({
  selector: 'app-form-actions',
  imports: [Button, LinkText],
  templateUrl: './form-actions.html',
  styleUrl: './form-actions.css',
})
export class FormActions {
  @Input() buttonLabel: string = 'Ingresar';
  @Input() linkText: string = '';
  @Input() linkLabel: string = '';
  @Output() linkClick = new EventEmitter<void>();
}

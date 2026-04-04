import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-text',
  imports: [],
  templateUrl: './link-text.html',
  styleUrl: './link-text.css',
})
export class LinkText {
  @Input() text: string = '¿No tienes cuenta?';
  @Input() linkLabel: string = 'Regístrate';
  @Input() href: string = '#';
}

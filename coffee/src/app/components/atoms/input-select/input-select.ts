import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-select',
  imports: [],
  templateUrl: './input-select.html',
  styleUrl: './input-select.css',
})
export class InputSelect {
  @Input() label: string = 'Carrera';
  @Input() options: { label: string; value: string }[] = [
    { label: 'Ingeniería de sistemas', value: 'is' },
    { label: 'Administración de empresas', value: 'admin' },
  ];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  imports: [],
  templateUrl: './name.html',
  styleUrl: './name.css',
})
export class Name {
  @Input() pokemonName = '';
  @Input() size: 'sm' | 'lg' = 'lg';

  get displayName(): string {
    return this.pokemonName.toUpperCase();
  }
}

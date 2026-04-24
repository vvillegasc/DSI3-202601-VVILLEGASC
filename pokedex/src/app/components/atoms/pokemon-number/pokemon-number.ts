import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-number',
  imports: [],
  templateUrl: './pokemon-number.html',
  styleUrl: './pokemon-number.css',
})
export class PokemonNumber {
  @Input() pokemonId = 0;

  get formatted(): string {
    return `#${String(this.pokemonId).padStart(3, '0')}`;
  }
}

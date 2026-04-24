import { Component, signal } from '@angular/core';
import { PokemonDetailDTO } from '../../models/model';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-pages',
  imports: [],
  templateUrl: './pokemon-pages.html',
  styleUrl: './pokemon-pages.css',
})
export class PokemonPages {
  listPokemons = signal<PokemonDetailDTO[]>([]);

  constructor(pokemonService: PokemonService) {
    pokemonService.getPokemons().subscribe((result) => {
      this.listPokemons.set(result as PokemonDetailDTO[]);
    });
  }
}

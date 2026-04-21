import { Component, signal } from '@angular/core';
import { PokemonDetailDTO, PokemonsListDTO } from '../../models/model';
import { PokemonService } from '../../services/pokemon-service';
@Component({
  selector: 'app-pokemon-pages',
  imports: [],
  templateUrl: './pokemon-pages.html',
  styleUrl: './pokemon-pages.css',
})
export class PokemonPages {
  protected readonly title = signal('pokedex');
  pokemons: PokemonsListDTO[] = [];
  listPokemons: PokemonDetailDTO[] = [];

  constructor(pokemonService: PokemonService) {
    pokemonService.getPokemons().subscribe((result) => {
      console.log(result);
      this.listPokemons = result as PokemonDetailDTO[];
      console.log(this.listPokemons);
    });
  }
}

import { Component, signal } from '@angular/core';
import { PokemonDetailDTO, PokemonsListDTO } from './models/model';
import { PokemonService } from './services/pokemon-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pokedex');
  pokemons: PokemonsListDTO[] = [];
  listPokemons: PokemonDetailDTO[] = [];

  constructor(pokemonService: PokemonService) {
    pokemonService.getPokemons().subscribe((result) => {
      console.log(result);
      console.log(result.results);
      this.pokemons = result.results;

      this.pokemons.map((pokemon) => {
        pokemonService.getPokemon(pokemon.name).subscribe((result) => {
          this.listPokemons.push(result);
        });
      });
      console.log(this.listPokemons);
    });
  }
}

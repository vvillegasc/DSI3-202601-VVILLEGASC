import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { PokemonDetailDTO, PokemonsDTO } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly BASE_URL = 'https://pokeapi.co/api/v2';
  private readonly POKEMON_PATH = '/pokemon';
  private readonly TYPE_PATH = `/type`;

  constructor(private http: HttpClient) {}

  getPokemons(
    offset: number = 0,
    limit: number = 20,
  ): Observable<PokemonDetailDTO[]> | Observable<unknown> {
    return this.http
      .get<PokemonsDTO>(`${this.BASE_URL}${this.POKEMON_PATH}?offset=${offset}&limit=${limit}`)
      .pipe(
        switchMap((response) => {
          const detailPokemon = response.results.map((pokemon) => {
            return this.getPokemon(pokemon.name);
          });
          return forkJoin(detailPokemon);
        }),
      );
  }

  getPokemon(name: string): Observable<PokemonDetailDTO> {
    return this.http.get<PokemonDetailDTO>(`${this.BASE_URL}${this.POKEMON_PATH}/${name}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap, map } from 'rxjs';
import { PokemonDetailDTO, PokemonsDTO } from '../models/model';

export interface PokemonsPageDTO {
  total: number;
  pokemons: PokemonDetailDTO[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly BASE_URL = 'https://pokeapi.co/api/v2';
  private readonly POKEMON_PATH = '/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number = 0, limit: number = 20): Observable<PokemonsPageDTO> {
    return this.http
      .get<PokemonsDTO>(`${this.BASE_URL}${this.POKEMON_PATH}?offset=${offset}&limit=${limit}`)
      .pipe(
        switchMap((response) => {
          const detailObservables = response.results.map((p) => this.getPokemon(p.name));
          return forkJoin(detailObservables).pipe(
            map((pokemons) => ({ total: response.count, pokemons }))
          );
        }),
      );
  }

  getPokemon(name: string): Observable<PokemonDetailDTO> {
    return this.http.get<PokemonDetailDTO>(`${this.BASE_URL}${this.POKEMON_PATH}/${name}`);
  }
}

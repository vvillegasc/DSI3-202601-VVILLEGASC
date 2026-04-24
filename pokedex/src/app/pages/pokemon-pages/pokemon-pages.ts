import { Component, OnInit, computed, signal } from '@angular/core';
import { PokemonDetailDTO } from '../../models/model';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonCard } from '../../components/organisms/pokemon-card/pokemon-card';
import { PokemonGallery } from '../../components/organisms/pokemon-gallery/pokemon-gallery';
import { Pagination } from '../../components/molecules/pagination/pagination';

@Component({
  selector: 'app-pokemon-pages',
  imports: [PokemonCard, PokemonGallery, Pagination],
  templateUrl: './pokemon-pages.html',
  styleUrl: './pokemon-pages.css',
})
export class PokemonPages implements OnInit {
  listPokemons = signal<PokemonDetailDTO[]>([]);
  selectedPokemon = signal<PokemonDetailDTO | null>(null);
  currentPage = signal(0);
  totalCount = signal(0);
  totalPages = computed(() => Math.ceil(this.totalCount() / 20));

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.pokemonService.getPokemons(page * 20).subscribe(({ total, pokemons }) => {
      this.totalCount.set(total);
      this.listPokemons.set(pokemons);
      this.currentPage.set(page);
    });
  }

  onPokemonSelected(pokemon: PokemonDetailDTO): void {
    this.selectedPokemon.set(pokemon);
  }

  onSearch(term: string): void {
    this.pokemonService.getPokemon(term).subscribe((result) => {
      this.selectedPokemon.set(result);
    });
  }
}

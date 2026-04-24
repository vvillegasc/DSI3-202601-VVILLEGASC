import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailDTO } from '../../../models/model';
import { InfoCard } from '../../molecules/info-card/info-card';

@Component({
  selector: 'app-pokemon-gallery',
  imports: [InfoCard],
  templateUrl: './pokemon-gallery.html',
  styleUrl: './pokemon-gallery.css',
})
export class PokemonGallery {
  @Input() pokemons: PokemonDetailDTO[] = [];
  @Output() pokemonSelected = new EventEmitter<PokemonDetailDTO>();
}

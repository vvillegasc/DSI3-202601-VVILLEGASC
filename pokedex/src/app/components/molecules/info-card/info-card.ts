import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailDTO } from '../../../models/model';
import { Name } from '../../atoms/name/name';
import { PokemonNumber } from '../../atoms/pokemon-number/pokemon-number';

@Component({
  selector: 'app-info-card',
  imports: [Name, PokemonNumber],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  @Input() pokemon!: PokemonDetailDTO;
  @Output() selected = new EventEmitter<PokemonDetailDTO>();

  onSelect(): void {
    this.selected.emit(this.pokemon);
  }
}

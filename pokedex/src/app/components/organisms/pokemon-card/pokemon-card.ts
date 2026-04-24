import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailDTO } from '../../../models/model';
import { Name } from '../../atoms/name/name';
import { PokemonNumber } from '../../atoms/pokemon-number/pokemon-number';
import { TextInput } from '../../atoms/text-input/text-input';
import { Button } from '../../atoms/button/button';
import { StatisticsTable } from '../../molecules/statistics-table/statistics-table';

@Component({
  selector: 'app-pokemon-card',
  imports: [Name, PokemonNumber, TextInput, Button, StatisticsTable],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  @Input() pokemon: PokemonDetailDTO | null = null;
  @Output() search = new EventEmitter<string>();

  searchTerm = '';

  onSearchChange(value: string): void {
    this.searchTerm = value;
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm.trim().toLowerCase());
    }
  }

  getTypeClass(typeName: string): string {
    return `type-badge type-badge--${typeName}`;
  }
}

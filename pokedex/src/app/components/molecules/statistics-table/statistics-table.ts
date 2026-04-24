import { Component, Input } from '@angular/core';
import { PokemonStatDTO } from '../../../models/model';
import { StatisticsBar } from '../../atoms/statistics-bar/statistics-bar';

const STAT_LABELS: Record<string, string> = {
  hp: 'HP',
  attack: 'ATAQUE',
  defense: 'DEFENSA',
  speed: 'VELOCIDAD',
};

const SHOWN_STATS = ['hp', 'attack', 'defense', 'speed'];

@Component({
  selector: 'app-statistics-table',
  imports: [StatisticsBar],
  templateUrl: './statistics-table.html',
  styleUrl: './statistics-table.css',
})
export class StatisticsTable {
  @Input() stats: PokemonStatDTO[] = [];

  get filteredStats() {
    return this.stats
      .filter((s) => SHOWN_STATS.includes(s.stat.name))
      .sort((a, b) => SHOWN_STATS.indexOf(a.stat.name) - SHOWN_STATS.indexOf(b.stat.name))
      .map((s) => ({ label: STAT_LABELS[s.stat.name], value: s.base_stat }));
  }
}

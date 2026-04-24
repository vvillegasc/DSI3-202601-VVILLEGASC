import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-bar',
  imports: [],
  templateUrl: './statistics-bar.html',
  styleUrl: './statistics-bar.css',
})
export class StatisticsBar {
  @Input() label = '';
  @Input() value = 0;

  get percentage(): number {
    return Math.min((this.value / 255) * 100, 100);
  }
}

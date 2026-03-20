import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mundial',
  imports: [Header, FormsModule],
  templateUrl: './mundial.html',
  styleUrl: './mundial.css',
})
export class Mundial {
  casos: number = 0;
  partidos: { brasil: number; colombia: number; resultado: string }[] = [];

  generateCasos(event: number) {
    this.casos = event;
    this.partidos = Array(event)
      .fill(null)
      .map(() => ({ brasil: null, colombia: null, resultado: '' }));
  }

  calcular() {
    for (let partido of this.partidos) {
      if (partido.colombia > partido.brasil) {
        partido.resultado = 'ganamos';
      } else if (partido.brasil > partido.colombia) {
        partido.resultado = 'perdimos';
      } else {
        partido.resultado = 'casi ganamos';
      }
    }
  }
}

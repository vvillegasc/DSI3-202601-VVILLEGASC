import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  imports: [Header, FormsModule],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  elements: number = 0;
  options: string[] = [];
  jugadores: string[] = ['ALICE', 'BOB', 'EMPATE'];
  ganador: string = '';

  generateElements(event: number) {
    this.elements = event;
    this.options = Array(event).fill('');
  }

  calculateWinner() {
    let alicePoints = 0;
    let bobPoints = 0;

    for (let juego of this.options) {
      if (juego === 'ALICE') {
        alicePoints += 2;
      } else if (juego === 'BOB') {
        bobPoints += 2;
      } else {
        alicePoints++;
        bobPoints++;
      }
    }

    if (alicePoints > bobPoints) {
      this.ganador = 'ALICE';
    } else if (bobPoints > alicePoints) {
      this.ganador = 'BOB';
    } else {
      this.ganador = 'EMPATE';
    }
  }
}

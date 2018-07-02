import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

import { GameService } from '../game.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  getGames(): void {
    this.games = this.gameService.getGames();
  }
}

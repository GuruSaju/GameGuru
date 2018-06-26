import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
import {GAMES} from '../mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = GAMES;
  
  constructor() { }

  ngOnInit() {
  }

}

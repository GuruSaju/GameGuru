import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game : Game = {
    serialNo: 1,
    name: 'Horizon Zero Dawn',
    review: 'Wonderful world filled with robotic animals to battle and hunt with a beautiful story',
    rating: 9.4
  };
  
  constructor() { }

  ngOnInit() {
  }

}

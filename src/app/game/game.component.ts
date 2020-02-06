import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  counter = 0;
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  constructor() { }

  ngOnInit() {
  }
  onStart() {
    this.interval = setInterval(() => {
     this.intervalFired.emit(this.counter + 1);
     this.counter++;
    },1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}

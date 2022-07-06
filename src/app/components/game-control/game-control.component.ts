import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() firedInterval = new EventEmitter<number>();
  counter = 0;
  counterId!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.counter);
  }

  startGame() {
    this.counterId = setInterval(() => {
      this.firedInterval.emit(this.counter + 1);
      this.counter += 1;
    }, 1000);
  }
  stopGame() {
    clearInterval(this.counterId);
    this.counter = 0;
  }
}

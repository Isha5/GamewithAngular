import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvenOddNumberGame';

  oddArray: number[] = [];
  evenArray: number[] = [];
  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenArray.push(firedNumber);
    } else {
      this.oddArray.push(firedNumber);
    }
  }
}

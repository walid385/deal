import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerInterval: any;

  ngOnInit(): void {
    const countDownDate = new Date("Jun 30, 2023 23:59:59").getTime();
    this.countdownTimer(countDownDate);
  }

  countdownTimer(countDownDate: number) {
    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const countdownTimerElem = document.getElementById("countdown_timer");
      if (countdownTimerElem !== null) {
        countdownTimerElem.textContent = hours + "h " + minutes + "m " + seconds + "s ";
      }
      if (distance < 0) {
        clearInterval(this.timerInterval);
        if (countdownTimerElem !== null) {
          countdownTimerElem.textContent = "This deal ended!";
        }
      }
    }, 1000);
  }
  
}


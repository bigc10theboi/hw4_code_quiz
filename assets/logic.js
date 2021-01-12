

// timer countdown function;
function clockTick() {
    // time update
    time--;
    timerEl.textContent = time;
  
    // ends quiz when out of time
    if (time <= 0) {
      quizEnd();
    }
  }
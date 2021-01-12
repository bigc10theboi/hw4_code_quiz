// variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");

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
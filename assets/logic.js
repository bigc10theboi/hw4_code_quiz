// variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var feedbackEl = document.getElementById("feedback");

// function to activate quiz start
function start() {
  // Add "hide"class to start screen
  var quizStartEl = document.getElementById("quizStart");
  quizStartEl.setAttribute("class", "hide");
  // remove "hide" class from questions
  questionsEl.removeAttribute("class");
  // start timer
  timerId = setInterval(clockTick, 1000);
  // show the timer
  timerEl.textContent = time;

  buildQuiz();
}



// timer countdown function;
function clockTick() {
    // time update
    time;
    timerEl.textContent = time;
  
    // ends quiz when out of time
    if (time <= 0) {
      quizEnd();
    }
  }

  startBtn.onclick = start;
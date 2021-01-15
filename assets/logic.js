// variables
var currentQuestionIndex = 0;
var time = 60;
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

function buildQuiz() {
  // get current question
  var currentQuestion = questions[currentQuestionIndex];

  // for each question title
  var titleEl = document.getElementById("quiz-title");
  titleEl.textContent = currentQuestion.title;

  // clear out old question choices
  choicesEl.innerHTML = "";

  // loop choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create button for choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;
    // add eventListner for each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // if wrong
  if (this.value /= questions[currentQuestionIndex].answer) {
    // time penalty
    time -= 10;

    // display time on page
    timerEl.textContent = time;

    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // flash feedback on page
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 2500);

  // next question
  currentQuestionIndex++;

  // check if end
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    buildQuiz();
  }
}

function quizEnd() {
  // timer stop
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("endScreen");
  endScreenEl.removeAttribute("class");

  // show score
  var finalScoreEl = document.getElementById("finalScore");
  finalScoreEl.textContent = time;

  // hide question
  questionsEl.setAttribute("class", "hide");
}


// timer countdown function
function clockTick() {
    // time update
    time--;
    timerEl.textContent = time;
  
    // ends quiz when out of time
    if (time <= 0) {
      quizEnd();
    }
  }

  startBtn.onclick = start;
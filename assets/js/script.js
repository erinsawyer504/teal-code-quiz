//declaring DOM variables
var timerEl = document.querySelector(".timerCountDown");
var startButton = document.querySelector("#startButton");
var highScoreEl = document.querySelector("#highScore");
var questionContainer = document.getElementById('questions-container');
var questionEl = document.querySelector("#question");
var answerBtn = document.querySelector('#answer');
var introEl = document.querySelector('.intro-container');
var scoreEl = document.querySelector('#score');
var initialsInput = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');
var feedback = document.querySelector('#feedback');
var submitScoreEl = document.getElementById('submit-score');


//declaring other variables
var score = 0;
var currentQuestion = {};
var acceptingAnswers = true;
let questionCounter = 0;
var availableQuestions = []; 

//creating constants for quiz/questions
var correctPoints = 20;
var totalQuestions = 5;
var correctAnswers = 0;
var wrongAnswers = 0;
var isQuizFinished = false;

//setting up timer
var timerCount = 60;
var timeLeft = 1;
var timerElement = document.querySelector('#time');
var timer;

var timerInterval;
function startTimer(){
    timerElement.textContent = timerCount;
    timerInterval = setInterval(function() {
        timerCount--;

        if (timerCount === 0) {
            clearInterval(timerInterval);
            alert("Out of time!");
            endQuiz();
        }
        timerElement.textContent = timerCount;
    }, 1000)
}

//adding event listener to start button to begin quiz
startButton.addEventListener('click', startQuiz)

//Setting up Questions and Answers in an Object
var quizQuestions = [
    { 
        question: "Which tag is used to define an image in HTML?",

        answers: [
            {text: "<img>", correct: true},
            {text: "<picture>", correct: false},
            {text: "<image>", correct: false},
            {text: "<photo>", correct: false}
        ]
    },
    { 
        question: "Which property is used to change the background color of an element in CSS?",
        answers: [
            {text: "color", correct: false},
            {text: "font-family", correct: false},
            {text: "background-color", correct: true},
            {text: "border-color", correct: false}
        ]
    },
    { 
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            {text: "<a>", correct: true},
            {text: "<link>", correct: false},
            {text: "<href>", correct: false},
            {text: "<url>", correct: false}
        ]
    },
    { 
        question: "Which CSS property is used to change the font size of text?",
        answers: [
            {text: "font-style", correct: false},
            {text: "font-family", correct: false},
            {text: "font-size", correct: true},
            {text: "text-size", correct: false}
        ]
    },
    { 
        question: "Which CSS property is used to add space between elements?",
        answers: [
            {text: "margin", correct: false},
            {text: "padding", correct: true},
            {text: "border", correct: false},
            {text: "space", correct: false}
        ]
    }
];

//function to start the quiz
function startQuiz() {
    introEl.classList.add('hide');
    questionContainer.classList.remove('hide');
    highScoreEl.classList.add('hide');
    score = 0;
    questionCounter = 0;
    timerCount = 60;
    setQuestions();
    startTimer();
}

//function to show the user if their answer was incorrect or correct
var feedBack = document.createElement("p")
document.querySelector('#feedback').appendChild(feedBack)

function success (){
    feedBack.textContent = "Correct!"
}

function incorrect (){
    feedBack.textContent = "Incorrect!"
}


function setQuestions() {
    availableQuestions = quizQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions);
    questionCounter = 0;
    acceptingAnswers = true;
    showQuestion();
}

function showQuestion() {
if (questionCounter >= totalQuestions) {
    endQuiz();
    return;
}

currentQuestion = availableQuestions[questionCounter];
questionEl.textContent = currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
    button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerBtn.appendChild(button);
});
}

function selectAnswer(e) {
if (!acceptingAnswers) return;

acceptingAnswers = false;
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;

if (correct) {
    selectedButton.classList.add('correct');
    score += correctPoints;
    correctAnswers++;
    success();
} else {
    selectedButton.classList.add('wrong');
    timerCount -= 10;
    wrongAnswers++;
    timerElement.textContent = timerCount;
    incorrect();
}

setTimeout(() => {
    selectedButton.classList.remove('correct');
    selectedButton.classList.remove('wrong');
    answerBtn.innerHTML = '';
    questionCounter++;
    acceptingAnswers = true;
    showQuestion();
}, 1000);
}

function endQuiz() {
    isQuizFinished = true;
    questionContainer.classList.add('hide');
    // introEl.classList.remove('hide');
    submitScoreEl.classList.remove('hide');
    highScoreEl.classList.remove('hide');
    clearInterval(timerInterval);
    saveHighScore();
}

function saveHighScore(event) {
    event.preventDefault();

    const initialsInput = document.getElementById('initialsInput');
    const initials = initialsInput.value;
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const scoreObject = {
      initials,
      score
    };

    highScores.push(scoreObject);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    displayHighScore();
    // const highScoreList = document.getElementById('highScoreList');
    // highScoreList.innerHTML = '';

    // highScores.forEach(highScores => {
    //   const scoreItem = document.createElement('li');
    //   scoreItem.textContent = `${highScores.initials}: ${highScores.score}`;
    //   highScoreList.appendChild(scoreItem);
    // });

    document.getElementById('highScoreForm').reset();
  
    submitScoreEl.classList.add('hide'); // hide submit-score
    introEl.classList.remove('hide');
}



function displayHighScore() {
    var storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (storedHighScores !== null) {
    //   highScoreEl.textContent = storedHighScores;
    console.log("stored high score", storedHighScores)
      const highScoreList = document.getElementById('highScoreList');
    //   highScoreList.innerHTML = '';
    highScoreList.innerHTML = 
      storedHighScores.map(highScore => {
        return `<li>${highScore.initials}-${highScore.score}</li>`
        // const scoreItem = document.createElement('li');
        // scoreItem.textContent = `${highScore.initials}: ${highScore.score}`;
        // highScoreList.appendChild(scoreItem);
      })
      .join("");
    }
  }
  

//loads local storage when page loads
window.addEventListener("DOMContentLoaded", function(){
    displayHighScore();
    })


  const highScoreForm = document.getElementById('highScoreForm');
highScoreForm.addEventListener('submit', saveHighScore);
//TODO 
//* done add timer
//* done add start button
//*add questions - done
//TODOcode if a question is correct/incorrect and add/take points away - take away time
//TODO add a place for the score
//TODO add a place to story initials

//declaring DOM variables
var timerEl = document.querySelector(".timerCountDown");
var startButton = document.querySelector("#startButton");
var highScore = document.querySelector("#highScore");
var questionContainer = document.getElementById('question-container');
var questionEl = document.querySelector("#question");
var answerBtn = document.querySelector('#answer');
var introEl = document.querySelector('.intro-container');

//declaring other variables
var score = 0;
var currentQuestions = {};
var acceptingAnswers = true; //change var name later
let questionCounter = 0; //change var name later
var availableQuestions = []; //change var name later

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

var secondsLeft = 60;
var timer;
function timer(){
    timerElement.textContent = timerCount;
    timer = setInterval(function() {
        timerCount--;

        if (timerCount === 0) {
            clearInterval(timer);
            alert("Out of time!");
        }
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

// var currentQuestionIndex = 0;
// var lastQuestionIndex = quizQuestions.length;

//function to start the quiz
function startQuiz (){
    //removes the intro element from quiz
    startButton.remove();
    introEl.remove();
    //shows the questions
    questionContainer.classList.remove('hide');
    showQuestions();
    timer();
};

// for (var i = 0; i < questions.length; i++){
//     var response = 
// }


/*function startQuiz () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNextQuestion();
}

function getNextQuestion() {
    questionCounter ++;
    

}*/


//function to load the questions

function askQuestion() {
    
    //creates buttons for user
    if (currentQuestionIndex===0) {

        var optA = document.createElement("button");
        optA.setAttribute("id", "A");
        answerChoices.appendChild(optA);
    
        var optB = document.createElement("button");
        optB.setAttribute("id", "B");
        answerChoices.appendChild(optB);
    
        var optC = document.createElement("button");
        optC.setAttribute("id", "C");
        answerChoices.appendChild(optC);
    
        var optD = document.createElement("button");
        optD.setAttribute("id", "D");
        answerChoices.appendChild(optD);
    }
}


//setting up event listener to answerChoices variable to check user choice
answerChoices.addEventListener("click", checkAnswer);

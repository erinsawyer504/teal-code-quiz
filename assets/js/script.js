//TODO 
//TODO add timer
//TODO add start button
//add questions - done
//TODOcode if a question is correct/incorrect and add/take points away - take away time
//TODO add a place for the score
//TODO add a place to story initials

//declaring DOM variables
var timerEl = document.querySelector("#timerCountDown");
var startButton = document.querySelector(".startButton");
var highScore = document.querySelector("#highScore");
var question = document.getElementById('question');
var answers = Array.from(document.querySelectorAll('.answer'));
var aEl = document.getElementById('a');
var bEl = document.getElementById('a');
var cEl = document.getElementById('a');
var dEl = document.getElementById('a');

//setting up timer
var secondsLeft = 60;
var timeLeft = 1;


//declaring other variables
var score = 0;
var currentQuestions = {};
var acceptingAnswers = true; //change var name later
let questionCounter = 0; //change var name later
var availableQuestions = []; //change var name later

//creating constants for quiz/questions
var correctPoints = 10;
var totalQuestikons = 4;
var correctAnswers = 0;
var wrongAnswers = 0;
var isQuizFinished = false;

//Setting up Questions and Answers in an Object
var quizQuestions = [
    { 
        question: "Question 1",
        answers: [
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: false},
            {text: "Answer4", correct: false}
        ]
    },
    { 
        question: "Question 2",
        answers: [
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: false},
            {text: "Answer4", correct: false}
        ]
    },
    { 
        question: "Question 3",
        answers: [
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: false},
            {text: "Answer4", correct: false}
        ]
    },
    { 
        question: "Question 4",
        answers: [
            {text: "Answer1", correct: false},
            {text: "Answer2", correct: false},
            {text: "Answer3", correct: false},
            {text: "Answer4", correct: false}
        ]
    }
];

//function to start the quiz
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
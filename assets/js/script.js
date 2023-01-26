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
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D",
        correct: 1
    },
    { 
        question: "Question 2",
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D",
        correct: 2
    },
    { 
        question: "Question 3",
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D",
        correct: 3
    },
    { 
        question: "Question 4",
        answerA: "Answer A",
        answerB: "Answer B",
        answerC: "Answer C",
        answerD: "Answer D",
        correct: 4
    }
];

var currentQuestionIndex = 0;
var lastQuestionIndex = quizQuestions.length;

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

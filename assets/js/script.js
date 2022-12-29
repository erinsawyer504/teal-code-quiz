//TODO 
//TODO add timer
//TODO add start button
//add questions - done
//TODOcode if a question is correct/incorrect and add/take points away - take away time
//TODOadd a place for the score
//TODO add a place to story initials

//setting up variables
var timerEl = document.querySelector(".timerCountDown");
var startButton = document.querySelector(".startButton");
var highScore = document.querySelector(".highScore");
var question = document.getElementById('question');
var answers = document.querySelectorAll('.answer');

var score = 0;

//Setting up Questions and Answers in an Object
var questions = [
    { 
        question: "Question 1",
        answer1: "Answer1",
        answer2: "Answer2",
        answer3: "Answer3",
        answer4: "Answer4",
        correct: 1
    },
    { 
        question: "Question 2",
        answer1: "Answer1",
        answer2: "Answer2",
        answer3: "Answer3",
        answer4: "Answer4",
        correct: 2
    },
    { 
        question: "Question 3",
        answer1: "Answer1",
        answer2: "Answer2",
        answer3: "Answer3",
        answer4: "Answer4",
        correct: 3
    },
    { 
        question: "Question 4",
        answer1: "Answer1",
        answer2: "Answer2",
        answer3: "Answer3",
        answer4: "Answer4",
        correct: 4
    }
]

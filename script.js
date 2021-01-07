//DECLARED VARIABLES
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

var timerEl = document.querySelector("gameClock");
var gameClock = availableQuestions.length * 15;

//QUESTION ARRAY TO DYNAMICALLY POPULATE THE Q CARD
let questions = [
    {
        question: "What is the HTML tag set within which one can write JavaScript code?",
        choice1: "<script></script>",
        choice2: "<javascript></javascript>",
        choice3: "<java></java>",
        choice4: "<js></js>",
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax to display “KatGoesHard” in an alert box using JavaScript?",
        choice1: "alertbox(”KatGoesHard”);",
        choice2: "prompt(”KatGoesHard”);",
        choice3: "msg(”KatGoesHard”);",
        choice4: "alert(”KatGoesHard”);",
        answer: 4
    },
    {
        question: "What is the correct syntax for referring to an external script called “scripted.js”?",
        choice1: "<script src=”scripted.js”>",
        choice2: "<script href=”scripted.js”>",
        choice3: "<script ref=”scripted.js”>",
        choice4: "<script name=”scripted.js”>",
        answer: 1
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choice1: "interface",
        choice2: "throws",
        choice3: "program",
        choice4: "short",
        answer: 3
    },
    {
        question: "Which of the following functions of Number object would display output in exponential format?",
        choice1: "toFixed()",
        choice2: "toExponential()",
        choice3: "toPrecision()",
        choice4: "toLocaleString()",
        answer: 2
    },
    {
        question: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
        choice1: "toSource()",
        choice2: "valueOf()",
        choice3: "toString()",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "What is the function of Array object that runs through each element of the array?",
        choice1: "concat()",
        choice2: "forEach()",
        choice3: "every()",
        choice4: "filter()",
        answer: 2
    },
    {
        question: "Which of the following statements is valid for the features of JavaScript?",
        choice1: "JavaScript is a lightweight, interpreted programming language.",
        choice2: "JavaScript is complementary to and integrated with Java.",
        choice3: "JavaScript is designed for creating network-centric applications.",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Which of the following function of String object would compare a regular expression with a string?",
        choice1: "search()",
        choice2: "replace()",
        choice3: "match()",
        choice4: "concat()",
        answer: 3
    },
    {
        question: "Select a function of Array object that is used to merge two or more arrays.",
        choice1: "concat()",
        choice2: "pop()",
        choice3: "push()",
        choice4: "some()",
        answer: 1
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

    //GAME PLAY STRUCTURE
    startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    timerEl = setInterval(countdown, 1000);
    getNewQuestion();
};

    getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //GO TO END GAME PAGE
        return window.location.assign("./end.html");
        }

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

    choices.forEach(choice => {
    choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    //TO CHECK IF ANSWERS ARE READING CORRECT AND INCORRECT -> 
    //console.log(selectedAnswer == currentQuestion.answer);

    //UPDATES CLASS TO CHANGE BUTTON TO GREEN OR RED BASED ON ANSWER
    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
        }

    selectedChoice.classList.add(classToApply);

    //CREATES SLIGHT DELAY BETWEEN QUESTIONS
    setTimeout( () => {
        selectedChoice.classList.remove(classToApply);
        getNewQuestion();
        }, 500);

    });
});
    //KEEPS SCORE
    incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
    //TRIGGERS GAME
    startGame();

    //SETTING THE TIMER
    function countdown() {
        time --;
        clock.textContent = gameClock;
        if (time <=0) {
            clearInterval(timerEl);
        }
    };

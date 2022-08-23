
// Variables needed
var questionIndex = 0;
var currentQuestion;
var time;
var timer;
var responseText;

//Button Elements
var startBtnEl = document.getElementById('start');
var submitBtnEl = document.getElementById('submit');

//Html Elements
var timeLeftEl = document.getElementById("time");
var nameEl = document.getElementById('name');
var beforeGameEl = document.getElementById('before-game');
var quizEl = document.getElementById('quiz');
var responseEl = document.getElementById('response');
var gameOverEl = document.getElementById('game-over');
var answersEl = document.getElementById('answers');
var finalScoreEl = document.getElementById('finalScore');
var emptyNameEl = document.getElementById('emptyName');


// Option button Elements 
option1El = document.getElementById('option-one');
option2El = document.getElementById('option-two');
option3El = document.getElementById('option-three');
option4El = document.getElementById('option-four');


// Pressing button starts game 
startBtnEl.onclick = beginQuiz;

// Pressing Submit button saves info
submitBtnEl.onclick = saveScore;

// Pressing an answer button
answersEl.onclick = questionAnswer;

// Initializes the quiz and Timer 
function beginQuiz() {

    //Hides initial text
    beforeGameEl.setAttribute('class', 'hide');

    //Causes quiz questions to show up
    quizEl.setAttribute('class', 'game');

    //Sets and displays first timer value
    time = 60;
    timeLeftEl.textContent = time;

    //Calls function to display first question
    getQuestion();

    //Changes and updates the timer every second
    timer = setInterval(function () {

        if (time > 0) {
            time--;
            timeLeftEl.textContent = time;
            if (time === 0) {

                // If time is 0, ends game
                gameOver();
            }

        }

    }, 1000)



}





function getQuestion() {

    //Gets current question object based upon current index
    currentQuestion = questions[questionIndex];



    //Updates question element
    var askQuestion = document.getElementById('question');
    askQuestion.textContent = currentQuestion.sentence;

    // Updates answer button elements
    option1El.textContent = currentQuestion.choices[0];
    option2El.textContent = currentQuestion.choices[1];
    option3El.textContent = currentQuestion.choices[2];
    option4El.textContent = currentQuestion.choices[3];



}

function questionAnswer(event) {
    var buttonEl = event.target;

    // Does nothing if it wasn't an answer button that was clicked
    if (!buttonEl.matches('.answer')) {

        return;
    }


    // Checks if answer is wrong, subtracts 15 sec if it is. If time is 0 ends game.
    // If answer is correct, adds 5 seconds to time.
    if (buttonEl.textContent !== currentQuestion.answer) {
        
        time -= 15;

        responseText = "Wrong!!!";
        responseEl.style.color = "red";

        if (time < 0) {
            time = 0;
        }
        if (time === 0) {
            gameOver();
        }


    } else {
        time += 5;

        
        responseText = "Correct!!!";
        responseEl.style.color = "#337752";

    }

    showResponse();

    // Updates Timer Element
    timeLeftEl.textContent = time;

    //Increases question Index
    questionIndex++;

    

    //If there are no other questions ends game. Otherwise pulls next question
    if (questionIndex > questions.length - 1) {
        
        gameOver();
    } else {
        getQuestion();
    }
}

//Shows response of whether last question was correct
function showResponse() {
    responseEl.textContent = responseText;

    responseEl.setAttribute("class", "response");
    setTimeout(function () {
        responseEl.setAttribute('class', 'hide');
    }, 1000);

}

// Stops timer and asks for name
function gameOver() {

    clearInterval(timer);
    quizEl.setAttribute("class", "hide");
    finalScoreEl.textContent = "Your score was " + time;
    gameOverEl.setAttribute("class", "game");


}

function saveScore() {

    // Gets text from input and trims whitespace
    var name = nameEl.value.trim();

    // If the value is empty returns a response 
    if (name === '') {
        emptyNameEl.textContent = "You can't submit an empty name";
        emptyNameEl.setAttribute("class", "response");
        setTimeout(function () {
            emptyNameEl.setAttribute('class', 'hide');
        }, 1000);

    }
    else {


        // Gets highscores strings and parses it into an object otherwise creates an empty array
        var highscores = JSON.parse(window.localStorage.getItem('scores')) || [];

        // Creates newScore object
        var newScore = {
            score: time,
            name: name,
        };

        // Adds new score and saves it as a string in local storage
        highscores.push(newScore);
        window.localStorage.setItem('scores', JSON.stringify(highscores));

        // Opens the highscores page
        window.location.href = 'highscores.html';


    }
}









// Available questions

var questions = [
    {
        sentence: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        sentence: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        sentence: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        sentence:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        sentence:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];
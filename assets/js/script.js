var questionIndex = 0;
var currentQuestion;


var startBtn = document.getElementById('start');
var beforeGame = document.getElementById('before-game');
var quiz = document.getElementById('quiz');


// Option button Elements 
option1El = document.getElementById('option-one');
option2El = document.getElementById('option-two');
option3El = document.getElementById('option-three');
option4El = document.getElementById('option-four');


function beginQuiz() {

    beforeGame.setAttribute('class', 'hide');

    quiz.removeAttribute('class');

    getQuestion();

    



}
startBtn.onclick = beginQuiz;




function getQuestion(){

    currentQuestion = questions[questionIndex];
    questionIndex ++;

    var askQuestion = document.getElementById('question');
  askQuestion.textContent = currentQuestion.sentence;

  
  option1El.textContent = '1. ' + currentQuestion.choices[0];
  option2El.textContent = '2. ' + currentQuestion.choices[1];
  option3El.textContent = '3. ' + currentQuestion.choices[2];
  option4El.textContent = '4. ' + currentQuestion.choices[3];


  
}

















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
var questionIndex = 0;
var currentQuestion;
var time;

var timeLeftEl = document.getElementById("time");
var startBtn = document.getElementById('start');
var beforeGame = document.getElementById('before-game');
var quiz = document.getElementById('quiz');

var answersEl = document.getElementById('answers');


// Option button Elements 
option1El = document.getElementById('option-one');
option2El = document.getElementById('option-two');
option3El = document.getElementById('option-three');
option4El = document.getElementById('option-four');


// Pressing button starts game 
startBtn.onclick = beginQuiz;

answersEl.onclick = questionAnswer;

// Initializes the quiz and Timer 
function beginQuiz() {

    //Hides initial text
    beforeGame.setAttribute('class', 'hide');

    //Causes quiz questions to show up
    quiz.removeAttribute('class');

    //Sets and displays first timer value
    time = 60;
    timeLeftEl.textContent = time;
    
    //Calls function to display first question
    getQuestion();

    //Changes and updates the timer every second
    setInterval( function() {

        if (time>0){
          time --;
        timeLeftEl.textContent = time;  
        }else{
            // ADD GAME OVER 

        }
          
    }, 1000)



}





function getQuestion(){

    //Gets current question object based upon current index
    currentQuestion = questions[questionIndex];
    //increases question index
    questionIndex ++;

    //Updates question element
    var askQuestion = document.getElementById('question');
  askQuestion.textContent = currentQuestion.sentence;

  // Updates answer button elements
  option1El.textContent = '1. ' + currentQuestion.choices[0];
  option2El.textContent = '2. ' + currentQuestion.choices[1];
  option3El.textContent = '3. ' + currentQuestion.choices[2];
  option4El.textContent = '4. ' + currentQuestion.choices[3];


  
}

function questionAnswer(event) {
    var buttonEl = event.target;
  
    // if the clicked element is not a choice button, do nothing.
    if (!buttonEl.matches('.answer')) {
        
      return;
    }
  
    

    if(buttonEl.textContent.substr(3)!==currentQuestion.answer){
        console.log("Wrong");
    }else{
        console.log("Correct");
    }
    
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
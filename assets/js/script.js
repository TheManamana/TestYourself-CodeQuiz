var questionIndex = 0;
var currentQuestion;
var time;
var timer;
var responseText;


var timeLeftEl = document.getElementById("time");
var startBtnEl = document.getElementById('start');
var beforeGameEl = document.getElementById('before-game');
var quizEl = document.getElementById('quiz');
var responseEl = document.getElementById('response');

var answersEl = document.getElementById('answers');



// Option button Elements 
option1El = document.getElementById('option-one');
option2El = document.getElementById('option-two');
option3El = document.getElementById('option-three');
option4El = document.getElementById('option-four');


// Pressing button starts game 
startBtnEl.onclick = beginQuiz;

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
    timer = setInterval( function() {

        if (time>0){
          time --;
        timeLeftEl.textContent = time;  
        }else{
            gameOver(); 

        }
          
    }, 1000)



}





function getQuestion(){

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
  
    

    if(buttonEl.textContent!==currentQuestion.answer){
        console.log("Wrong");
        time -= 15;

        responseText = "Wrong!!!";
        responseEl.style.color = "red";

        if(time<0){
            time = 0;
        }
        

    }else{
        time += 5;
        
        console.log("Correct");
        responseText = "Correct!!!";
        responseEl.style.color = "#337752";

    }

    showResponse();


    timeLeftEl.textContent = time;

    questionIndex ++;

    console.log(questionIndex);

    if(questionIndex > questions.length - 1){
        console.log('Game Over');
        gameOver();
    }else{
        getQuestion();
    }
  }


  function showResponse(){
    responseEl.textContent=responseText;

    responseEl.setAttribute("class", "response");
    setTimeout(function () {
        responseEl.setAttribute('class', 'hide');
      }, 1000);

  }

  function gameOver(){

    clearInterval(timer);

    
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
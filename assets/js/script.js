var questionIndex = 0;
var currentQuestion;
var time;
var timer;
var responseText;

var startBtnEl = document.getElementById('start');
var submitBtnEl= document.getElementById('submit');


var timeLeftEl = document.getElementById("time");
var nameEl = document.getElementById('name');
var beforeGameEl = document.getElementById('before-game');
var quizEl = document.getElementById('quiz');
var responseEl = document.getElementById('response');
var gameOverEl = document.getElementById('game-over');
var answersEl = document.getElementById('answers');
var finalScoreEl =document.getElementById('finalScore');


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
    timer = setInterval( function() {

        if (time>0){
          time --;
        timeLeftEl.textContent = time; 
            if (time===0){
                gameOver();
            }
        
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
        if(time===0){
            gameOver();
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
    quizEl.setAttribute("class","hide");
    finalScoreEl.textContent = "Your score was " + time;
    gameOverEl.setAttribute("class","game");

    
  }

  function saveScore(){

    // get value of input box
  var name = nameEl.value.trim();

  // make sure value wasn't empty
  if (name !== '') {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem('highscores')) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      name: name,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    // redirect to next page
    window.location.href = 'highscores.html';
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
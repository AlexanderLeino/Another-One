///When user opens when page the timer starts. Once the timer starts the user needs to click on one of the four options avaialable. Done
/// Then the user will receive feedback if his answer was correct or not.  
/// If the answer is correct then we will store the true value and update the counter
/// Then the user will have to click next to continue.
// Once the user clicks next then it will load another question and four answers. 
// The user will keep doing this until time runs out
// Then the user will be able to add his score to the high score list at the end and will be able to update his initials. 
var startButton = document.getElementById('start-button-container')
var mainContainer = document.getElementById('container')
var scoreKeeper = document.getElementById('score-keeper')
var score = 0
var userChoice
var currentScore = document.getElementById('current-score').innerText = score
var timeKeeperText = document.getElementById('timer-text')
var timeKeeper = document.getElementById('time-keeper')
var questionEl = document.getElementById('question-body')
var answerbuttonEL1 = document.getElementById('answer-button1')
var answerbuttonEL2 = document.getElementById('answer-button2')
var answerbuttonEL3 = document.getElementById('answer-button3')
var answerbuttonEL4 = document.getElementById('answer-button4')
var nextButton = document.getElementById('next-button')
startButton.addEventListener('click', startGame)
//answerbuttonEL1.addEventListener('click',selectAnswer)

function startGame() {
setFirstQuestion()
startButton.setAttribute('style', 'visibility: hidden;');
mainContainer.setAttribute('style', 'visibility: visible;')
scoreKeeper.setAttribute('style', 'visibility: visible;')
timeKeeper.setAttribute('style', 'visibility: visible;')
timeKeeperText.setAttribute('style', 'visibility: visible;')
const startingMinutes = 1
let time = startingMinutes * 60;
const countdownEl = document.getElementById('time-keeper'); 
setInterval(updateCountDown, 1000);
function updateCountDown() {
    const minutes = Math.floor(time/ 60);
    let seconds = time % 60;
    seconds = seconds < 1 ? '0' + seconds : seconds;
    countdownEl.innerHTML= `${minutes}: ${seconds}`;
    time--;
    if (minutes ==0 && seconds == 0) {
        countdownEl.innerHTML= 'Time Has Expired'
        time = 0
        
    }
}}

    let questions = [
    {
        question: 'What is HTML an abbreviation for?',
        option1: 'Hypertext Markup Language',
        option2: 'How to make Leeks',
        option3: 'How to make legos',
        option4: 'How to make love',
        answer: 1,
    }
]




function setFirstQuestion (){
 questionEl.innerHTML = questions[0].question
 answerbuttonEL1.innerHTML = questions[0].option1
 answerbuttonEL2.innerHTML = questions[0].option2
 answerbuttonEL3.innerHTML = questions[0].option3
 answerbuttonEL4.innerHTML = questions[0].option4
}



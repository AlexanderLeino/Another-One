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
var timeKeeperText = document.getElementById('timer-text')
var timeKeeper = document.getElementById('time-keeper')
var questionEl = document.getElementById('question-body')
var answerbuttonEL1 = document.getElementById('answer-button1')
var answerbuttonEL2 = document.getElementById('answer-button2')
var answerbuttonEL3 = document.getElementById('answer-button3')
var answerbuttonEL4 = document.getElementById('answer-button4')
var nextButton = document.getElementById('next-button')
nextButton.addEventListener('click', nextQuestion)
startButton.addEventListener('click', startGame)


function startGame() {
startButton.setAttribute('style', 'visibility: hidden;');
mainContainer.setAttribute('style', 'visibility: visible;')
scoreKeeper.setAttribute('style', 'visibility: visible;')
timeKeeper.setAttribute('style', 'visibility: visible;')
timeKeeperText.setAttribute('style', 'visibility: visible;')
const startingMinutes = 1
let time = startingMinutes * 60;
const countdownEl = document.getElementById('time-keeper');


/// This establishes the timer on the top right corner of the screen. 
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
}



}



const questions = [
    {
        question: 'What is HTML an abbreviation for?',
                
                    
        answers: [
            { Text: 'Hypertext Markup Language', correct: true },
            { Text: 'How to make leeks', correct: false },
            { Text: 'How to make legos', correct: false},
            { Text: 'How to make love', correct: false},
        ]
    } 
]
console.log(questions[0].answers[0].Text) /// This 


function nextQuestion (){
 questionEl.innerHTML = questions[0].question
     answerbuttonEL1.innerHTML= questions[0].answers[0].Text
     answerbuttonEL2.innerHTML = questions[0].answers[1].Text
     answerbuttonEL3.innerHTML = questions[0].answers[2].Text
     answerbuttonEL4.innerHTML = questions[0].answers[3].Text

}


function selectAnswer(){

}


console.log(questions[0].question)
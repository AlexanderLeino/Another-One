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
var userChoice = 0
var currentScore = document.getElementById('current-score').innerText = score
var questionCounter = 0
var numberOfCorrectAnswers = 0
var numberOfIncorrectAnswers = 0
var timeKeeperText = document.getElementById('timer-text')
var timeKeeper = document.getElementById('time-keeper')
var questionEl = document.getElementById('question-body')
var answerbuttonEL1 = document.getElementById('answer-button1')
var answerbuttonEL2 = document.getElementById('answer-button2')
var answerbuttonEL3 = document.getElementById('answer-button3')
var answerbuttonEL4 = document.getElementById('answer-button4')
var nextButton = document.getElementById('next-button')
startButton.addEventListener('click', startGame)
answerbuttonEL1.addEventListener('click',getUserAnswer)
answerbuttonEL2.addEventListener('click',getUserAnswer)
answerbuttonEL3.addEventListener('click',getUserAnswer)
answerbuttonEL4.addEventListener('click',getUserAnswer)
//answerbuttonEL1.addEventListener('click',selectAnswer)

function startGame() {
getQuestion()
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
    },

    {
        question: 'What is CSS an abreviation for?',
        option1: 'woooooo',
        option2: 'Cascading Style Sheet',
        option3: 'a ccc mutherfucker',
        option4: 'gettin low get in loww',
        answer: 2,
    },
    {
        question: 'Whats your favorite color?',
        option1: 'wooboooo',
        option2: 'Cascading Style Sheet',
        option3: 'blue',
        option4: 'gettin low get in loww',
        answer: 3,
    },
    {
        question: 'Favorite Icecream',
        option1: 'woooooo',
        option2: 'Cascading Style Sheet',
        option3: 'a ccc mutherfucker',
        option4: 'BlueMoon',
        answer: 4,
    },
    {
        question: 'Say wooo?',
        option1: 'woooooo',
        option2: 'Cascading Style Sheet',
        option3: 'a ccc mutherfucker',
        option4: 'gettin low get in loww',
        answer: 1,
    }
]
function getQuestion() {
    userChoice
console.log(`userChoice should button number. User Choice = ${userChoice}`)
console.log(`The current question number is + ${questionCounter}`)
    
    if(questionCounter==0){
        questionEl.innerHTML = questions[0].question
        answerbuttonEL1.innerHTML = questions[0].option1
        answerbuttonEL2.innerHTML = questions[0].option2
        answerbuttonEL3.innerHTML = questions[0].option3
        answerbuttonEL4.innerHTML = questions[0].option4
    }
    
    if (questionCounter == 1) {
        questionEl.innerHTML = questions[1].question
        answerbuttonEL1.innerHTML = questions[1].option1
        answerbuttonEL2.innerHTML = questions[1].option2
        answerbuttonEL3.innerHTML = questions[1].option3
        answerbuttonEL4.innerHTML = questions[1].option4

    }
    if (questionCounter == 2) {
        questionEl.innerHTML = questions[2].question
        answerbuttonEL1.innerHTML = questions[2].option1
        answerbuttonEL2.innerHTML = questions[2].option2
        answerbuttonEL3.innerHTML = questions[2].option3
        answerbuttonEL4.innerHTML = questions[2].option4

    }

    if (questionCounter == 3) {
        questionEl.innerHTML = questions[3].question
        answerbuttonEL1.innerHTML = questions[3].option1
        answerbuttonEL2.innerHTML = questions[3].option2
        answerbuttonEL3.innerHTML = questions[3].option3
        answerbuttonEL4.innerHTML = questions[3].option4

    }

    if (questionCounter == 4) {
        questionEl.innerHTML = questions[4].question
        answerbuttonEL1.innerHTML = questions[4].option1
        answerbuttonEL2.innerHTML = questions[4].option2
        answerbuttonEL3.innerHTML = questions[4].option3
        answerbuttonEL4.innerHTML = questions[4].option4

    }   
}
function getUserAnswer (){
    if (questionCounter === 0 && userChoice === 1){
        console.log('You got Question 1 correct')
        questionCounter++
        numberOfCorrectAnswers++
        getQuestion()
    }
    else if (questionCounter === 1 && userChoice === 2){
        console.log('You got Question 2 correct')
        questionCounter++
        numberOfCorrectAnswers++
        getQuestion()
    }
    else if (questionCounter === 2 && userChoice === 3){
        console.log('You got Question 3 correct')
        questionCounter++
        numberOfCorrectAnswers++
        getQuestion()
    }
    else if (questionCounter === 3 && userChoice === 4){
        console.log('You got Question 3 correct')
        questionCounter++
        numberOfCorrectAnswers++
        getQuestion()
    }
    else if (questionCounter === 4 && userChoice === 1){
        console.log('You got Question 3 correct')
        questionCounter++
        numberOfCorrectAnswers++
        getQuestion()
    }
    else {
        console.log('You got the question wrong')
        questionCounter++
        numberOfIncorrectAnswers++
        getQuestion()
    }
    console.log(questionCounter)
        console.log(`number of correct answers ${numberOfCorrectAnswers}`)
        console.log(`number of incorrect answers ${numberOfIncorrectAnswers}`)
}

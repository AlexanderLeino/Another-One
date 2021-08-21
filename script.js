///When user opens when page the timer starts. Once the timer starts the user needs to click on one of the four options avaialable. Done
/// Then the user will receive feedback if his answer was correct or not.  
/// If the answer is correct then we will store the true value and update the counter
/// Then the user will have to click next to continue.
// Once the user clicks next then it will load another question and four answers. 
// The user will keep doing this until time runs out
// Then the user will be able to add his score to the high score list at the end and will be able to update his initials.
var localData = window.localStorage
var ulKeeper = []
var gameCount = 0
var leaderBoardScoreAndName = []
console.log(leaderBoardScoreAndName)
var finalScoreSpan = document.getElementById('final-score-span')
var startButton = document.getElementById('start-button')
var mainContainer = document.getElementById('container')
var actualLeaderBoard = []
var scoreKeeper = document.getElementById('score-keeper')
var userChoice = 0
var currentScore = document.getElementById('current-score')
var finalScore
var questionCounter = 0
var numberOfCorrectAnswers = 0
var numberOfIncorrectAnswers = 0
var time
var timeKeeperText = document.getElementById('timer-text')
var highScoreButton = document.getElementById('high-score-button')
var timeKeeper = document.getElementById('time-keeper')
var questionEl = document.getElementById('question-body')
var answerbuttonEL1 = document.getElementById('answer-button1')
var answerbuttonEL2 = document.getElementById('answer-button2')
var answerbuttonEL3 = document.getElementById('answer-button3')
var answerbuttonEL4 = document.getElementById('answer-button4')
var nextButton = document.getElementById('next-button')
var formcontainer = document.getElementById('form-container')
var scoreBoardContainer = document.getElementById('scoreboard-container')
var leaderUl = document.querySelector('ul')
var resetButton = document.getElementById('resetButton')
var gameStarted = false
var startTime

startButton.addEventListener('click', startGame)
answerbuttonEL1.addEventListener('click',getUserAnswer)
answerbuttonEL2.addEventListener('click',getUserAnswer)
answerbuttonEL3.addEventListener('click',getUserAnswer)
answerbuttonEL4.addEventListener('click',getUserAnswer)
resetButton.addEventListener('click', restartGame)


document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
});
//answerbuttonEL1.addEventListener('click',selectAnswer)
time = 60;
    const countdownEl = document.getElementById('time-keeper'); 
    
    
    function updateCountDown() {
        if(gameStarted){
        const minutes = Math.floor(time/ 60);
        seconds = time % 60;
        seconds = seconds < 1 ? '0' + seconds : seconds;
        countdownEl.innerHTML= `${minutes}: ${seconds}`;
        time--;
        if (time <= 0) {
            countdownEl.innerHTML= 'Time Has Expired'    
        }}
        else{
            console.log('I have died')
            clearInterval(startTime)
            return;
        }
    }
function startGame() {
    getQuestion()
    gameCount++
    console.log(`The current gamecount is ${gameCount})`)
    currentScore.textContent = numberOfCorrectAnswers
    startButton.setAttribute('style', 'visibility: hidden;');
    formcontainer.setAttribute('style', 'visbility: hidden;')
    mainContainer.setAttribute('style', 'visibility: visible;')
    scoreKeeper.setAttribute('style', 'visibility: visible;')
    timeKeeper.setAttribute('style', 'visibility: visible;')
    timeKeeperText.setAttribute('style', 'visibility: visible;')
    resetButton.setAttribute('style', 'visibility: hidden;');
    gameStarted = true
    startTime = setInterval(updateCountDown, 1000);
    }
    
    let questions = [
        {
            question: 'What is HTML an abbreviation for?',
            option1: 'Hypertext Markup Language',
            option2: 'Happy to Make Lemons',
            option3: 'How to Make Legos',
            option4: 'How to Make Linguine',
            answer: 1,
        },
        
        {
            question: 'What is CSS an abreviation for?',
            option1: 'Corporate Secret Society',
            option2: 'Cascading Style Sheet',
            option3: 'Come See Shore',
            option4: 'Coporate Symatic Syntax ',
            answer: 2,
        },
        {
            question: 'What will be logged to the console if i = 0; console.log(i)',
            option1: 'NAN',
            option2: 'i = 0',
            option3: '0',
            option4: 'undefined',
            answer: 3,
        },
        {
            question: 'What is the main purpose for bootstrap',
            option1: 'You gotta pick yourself up by your bootstraps bud',
            option2: 'Bootstraps help keep your boots on',
            option3: 'Trick question there is no application called bootstrap',
            option4: 'Gives the creator the ability to use prebuilt templates for website designs',
            answer: 4,
        },
        {
            question: 'What is Github',
            option1: 'A place where you can upload and share your coding projects',
            option2: 'You mean grubhub ',
            option3: 'A food delivery app',
            option4: 'A place to download software illegally',
            answer: 1,
        }
    ]
    function getQuestion() {
        userChoice
        console.log(`userChoice should button number. User Choice = ${userChoice}`)
        console.log(`The current question number is + ${questionCounter}`)
        formcontainer.setAttribute('style', 'visbility: hidden;')
        if(questionCounter == 0){
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
            currentScore.innerHTML = numberOfCorrectAnswers
            
            getQuestion()
        }
        else if (questionCounter === 1 && userChoice === 2){
            console.log('You got Question 2 correct')
            questionCounter++
            numberOfCorrectAnswers++
            currentScore.innerHTML = numberOfCorrectAnswers
            getQuestion()
        }
        else if (questionCounter === 2 && userChoice === 3){
            console.log('You got Question 3 correct')
            questionCounter++
            numberOfCorrectAnswers++
            currentScore.innerHTML = numberOfCorrectAnswers
            getQuestion()
        }
        else if (questionCounter === 3 && userChoice === 4){
            console.log('You got Question 3 correct')
            questionCounter++
            numberOfCorrectAnswers++
            currentScore.innerHTML = numberOfCorrectAnswers
            getQuestion()
        }
        else if (questionCounter === 4 && userChoice === 1){
            console.log('You got Question 3 correct')
            questionCounter++
            numberOfCorrectAnswers++
            currentScore.textContent = numberOfCorrectAnswers
            getQuestion()
        }
        else {
            console.log('You got the question wrong')
            questionCounter++
            numberOfIncorrectAnswers++
            time = time - 10
            console.log(time)
            getQuestion()
        }
        if(questionCounter == 5)
        {
            endGame()
        }}
        console.log(questionCounter)
        console.log(`number of correct answers ${numberOfCorrectAnswers}`)
        console.log(`number of incorrect answers ${numberOfIncorrectAnswers}`)
        
        
        
        function endGame(){
            gameStarted = false
            finalScore = time
            console.log(finalScore)
            resetButton.setAttribute('style', 'visibility: visible;');
            formcontainer.setAttribute('style', 'visibility: visible;')
            mainContainer.setAttribute('style', 'visbility: hidden;')
            highScoreButton.setAttribute('style', 'visibility:hidden')
            
            finalScoreSpan.innerText = finalScore
        
            

        }
    
    function createLeaderBoard () {
        console.log('Hello I am working')
        formcontainer.setAttribute('style', 'visbility: hidden;')
        var textValue = document.getElementById('userInitials').value
        console.log(textValue)
        var storeScoreBoardValues = {}
        storeScoreBoardValues.initials=textValue
        storeScoreBoardValues.score=time
        leaderBoardScoreAndName.push(storeScoreBoardValues)
        console.log(leaderBoardScoreAndName)
        for (var i = 0; i < leaderBoardScoreAndName.length; i++){
            localData.setItem('Leader' + i, leaderBoardScoreAndName[i].initials + leaderBoardScoreAndName[i].score) 
            }
        

        showScoreBoard()
    }
        function showScoreBoard () {
            
            leaderBoardScoreAndName.sort((a, b) => b.score - a.score)
            leaderBoardScoreAndName.forEach((e) => {
            var newScore = document.createElement('li')
            ulKeeper.push(newScore)
            newScore.innerText = `${e.initials} ${e.score}`
            leaderUl.appendChild(newScore)    });
    
            scoreBoardContainer.setAttribute('style','visibility:visible')
            startButton.setAttribute('style', 'visibility: hidden;');
            mainContainer.setAttribute('style', 'visibility: hidden;')
            scoreKeeper.setAttribute('style', 'visibility: hidden;')
            timeKeeper.setAttribute('style', 'visibility: hidden;')
            timeKeeperText.setAttribute('style', 'visibility: hidden;')
            formcontainer.setAttribute('style', 'visibility: hidden;')
            highScoreButton.setAttribute('style', 'visibility:hidden')
            resetButton.setAttribute('style', 'visibility: visible;');
        }
            function restartGame() {
                resetButton.setAttribute('style', 'visibility: hidden;');
                formcontainer.setAttribute('style', 'visibility: hidden;')
                time = 60
                questionCounter = 0
                numberOfCorrectAnswers = 0
                numberOfIncorrectAnswers = 0
                for (i = 0; i < ulKeeper.length; i++){
                    leaderUl.removeChild(ulKeeper[i])
                }
                ulKeeper = []
                startButton.setAttribute('style', 'visibility: visible')
                highScoreButton.setAttribute('style', 'visibility: visible')
            }
            function retreiveLocalStorage (){
                for(i = 0; i < localData.length; i++ ){
                    console.log('Anything')
                    if(localData.getItem('Leader' + i) != null){
                        console.group('anything2')
                    var oldObjects = {}
                    oldObjects.initials = localData.getItem('Leader' + i).replace(/[0-9]/g, '')
                    oldObjects.score = parseInt(localData.getItem('Leader' + i).match(/\d+/g));
                    leaderBoardScoreAndName.push(oldObjects)
                }
            
                  
                }
        }
            retreiveLocalStorage()
        
        // time is for my scores
        // Initials 
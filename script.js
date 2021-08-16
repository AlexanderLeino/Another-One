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
}

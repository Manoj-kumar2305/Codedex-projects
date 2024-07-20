const bells = new Audio('./bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const resetBtn = document.querySelector('.btn-reset');
const setBtn = document.querySelector('.button--submit');
let myInterval;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      const minuteDiv = document.querySelector('.minutes');
      const secondDiv = document.querySelector('.seconds');

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.');
  }
};

startBtn.addEventListener('click', appTimer);
const resetTimer = () => {
  clearInterval(myInterval);
  state = true;
  document.querySelector('.minutes').textContent = '25';
  document.querySelector('.seconds').textContent = '00';
}
resetBtn.addEventListener('click', resetTimer);


setBtn.addEventListener('click', () => {
  resetTimer();
  const input = document.querySelector('.input').value;
  if (input > 0) {
    session.textContent = input;
  } else {
    alert('Please enter a number between 1 and 60');
  }
});
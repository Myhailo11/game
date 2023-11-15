const startButton = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time__list");
const restartButton = document.querySelector(".game__new");
const board = document.querySelector(".board");
const timerDisplay = document.querySelector("#timer");
let time = 0;

console.log("startButton:", startButton);
console.log("time:", time);
console.log("TimeLists:", timeList);
console.log("Screens:",screens);
console.log(timerDisplay);


startButton.addEventListener("click", () => {
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (timeListElement) => {
  if (timeListElement.target.classList.contains("time__btn")) {
    time = parseInt(timeListElement.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    console.log("time:", time);
    startGame();
  }
});

restartButton.addEventListener("click",() => {
  location.reload();
});

function startGame(){
  setInterval(decreaceTime, 1000);
  showTime(time);
}

function decreaceTime(){
  if(time === 0){
  finishGame();
  }  else {
    let zeroTime = --time;
    if (zeroTime < 10) {
     zeroTime = `0${zeroTime}`;
    }
    showTime(zeroTime);
  }
}
function showTime(value){
  timerDisplay.innerHTML = `00:${value}`;
}
function finishGame(){
  timerDisplay.parentNode.classList.add("hide");
  board.innerHTML = `<h3>ваш рахунок:</h3>`
}



const startButton = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time__list");
const restartButton = document.querySelector(".game__new");
const timerDisplay = document.querySelector("#timer");
const board = document.querySelector(".board");
let time = 0;
let score=0;




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
board.addEventListener("click", (e) =>{
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
}
)
restartButton.addEventListener("click",() => {
  location.reload();
});

function startGame(){
  setInterval(decreaceTime, 1000);
  showTime(time);
  createRandomCircle();
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
  board.innerHTML = `<h3>ваш рахунок:${score}</h3>`
}

function createRandomCircle(){
  const circle  = document.createElement("div");
  const size  =  getRandomNumber(20,80);
  console.log ("size :",size);
  const {width, height} =board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
}

function getRandomNumber (min,max){
  return Math.round(Math.random()*(max-min)+min);
}
reeload.addEventListener("clic", () => {
  location.reload();
});
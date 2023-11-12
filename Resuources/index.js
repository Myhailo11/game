const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time__list");
const reload = document.querySelector(".game__new");
const board = document.querySelector(".board");
const timeEl = document.querySelector("#time");
let time = 0;

console.log("time:", time);
console.log("TimeLists:", timeList);
console.log("Screens:",screens);
console.log(timeEl);


startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time__btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    console.log("time:", time);
  }
});

reload.addEventListener("click",() => {
  location.reload();
}) 
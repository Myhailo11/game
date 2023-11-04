const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time__list");
let time = 0;

console.log("time:", time);
console.log(timeList);
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


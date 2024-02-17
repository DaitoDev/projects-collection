const navLine = document.querySelector(".nav-line");
const hero = document.querySelector(".hero");

function randTime() {
  let randInt = Math.floor(Math.random() * 8) + 1;
  return randInt * 1000;
}

function blink() {
  setTimeout(() => {
    navLine.classList.remove("blink");

    setTimeout(() => {
      navLine.classList.add("blink");
    }, 100);
  }, randTime());
}

function setTime() {
  setInterval(() => {
    blink();
  }, randTime());
}

setTime();

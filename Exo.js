let countEl = document.getElementById("count-el"); // pass in arguments
let count = 0;

let saveEl = document.getElementById("save-el");

const increment = () => {
  count = count + 1;
  countEl.textContent = count;
};

const save = () => {
  let entries = count + " - ";
  saveEl.textContent += entries;
  countEl.textContent = 0;
  count = 0;
};

// let welcomeEl = document.getElementById("welcome-el");

// const name = "Isabelle";
// const greeting = "Welcome ";

// welcomeEl.innerText = greeting + name;
// welcomeEl.textContent += "👋";

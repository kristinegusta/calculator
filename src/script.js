import { lightMode } from "../modules/lightModeToggle.js";
import { clickEventListeners } from "../modules/eventListenersClick.js";
import { keyboardEvent } from "../modules/eventListenersKeyboard.js";

const btn = document.querySelector(".btn");
const listOfTd = document.querySelectorAll("td");
const inputDisplay = document.querySelector("p");
const result = document.querySelector(".result");
const ul = document.querySelector("ul");


//Give an event listener to the button. toggle light class  on click
btn.addEventListener("click", (event) => {
  lightMode(listOfTd)
});
//Add event listener to the trash button to clear the history list
const clearListBtn = document.querySelector(".trash");
clearListBtn.addEventListener("click", (event) => {
  ul.innerHTML = "";
});
//Give event listeners to the TD
clickEventListeners(listOfTd, result, inputDisplay, ul)
// The same event listeners to keyboard buttons
document.body.addEventListener("keyup", (event) => {
  keyboardEvent(event, inputDisplay, result, ul)
});

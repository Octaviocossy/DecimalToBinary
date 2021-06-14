import { binaryLogic } from "./binaryLogic.js";
import { renderMenu } from "./renderMenu.js";
import { renderResults } from "./renderResults";

export const app = () => {
  renderMenu();
  const btn = document.getElementById("btn");
  const number = document.getElementById("numberInp");
  number.addEventListener("keyup", (x) => {
    if (number.value != "") {
      if (x.keyCode === 13) {
        renderResults(binaryLogic(number.value));
      }
    }
  });
  btn.addEventListener("click", (x) => {
    x.preventDefault();
    if (number.value != "") {
      renderResults(binaryLogic(number.value));
    } else {
      alert("Enter a number in the input");
    }
  });
};

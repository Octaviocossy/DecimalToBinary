import { binaryLogic } from "./binaryLogic.js";
import { render } from "./render.js";

export const app = () => {
  const btn = document.getElementById("btn");
  const number = document.getElementById("numberInp");

  number.addEventListener("keyup", (x) => {
    if (number.value != "") {
      if (x.keyCode === 13) {
        render(binaryLogic(number.value));
      }
    } else {
      alert("Enter a number in the input");
    }
  });
  btn.addEventListener("click", (x) => {
    x.preventDefault();
    if (number.value != "") {
      render(binaryLogic(number.value));
    } else {
      alert("Enter a number in the input");
    }
  });
};

import { app } from "./app.js";

export const renderResults = (r) => {
  const menu = document.getElementById("main");
  const number = document.getElementById("numberInp");
  let html = `
 <section>
   <div class="menu" id="menu">
    <div class="title-div">
      <h2 class="title">Decimal to Binary</h2>
      <h2 class="title">Result 🎉</h2>
    </div>
    <label class="txt" for>Decimal number (${number.value}) converted to binary:</label>
    <textarea readonly type="text" class="out" id="out">${r}</textarea>
    <button class="btn" id="gBack">Go Back</button>
 </section>
 <footer class="footer">
    <p class="footer-p">Made with 💛 By<a href="https://github.com/Octaviocossy" target="_blank" class="link">Octavio</a>.</p>
 </footer>`;

  menu.innerHTML = html;
  const gbackBtn = document.getElementById("gBack");
  gbackBtn.addEventListener("click", () => {
    app();
  });
};

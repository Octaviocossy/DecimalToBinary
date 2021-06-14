export const renderMenu = () => {
  const menu = document.getElementById("main");
  let html = `
  <section>
   <div class="menu" id="menu">
      <div class="title-div">
        <h1 class="title">Decimal to Binary</h1>
        <h1 class="title_2">Converter</h1>
      </div>
      <label class="txt" for="">Enter a decimal number to know its binary equivalent.</label>
      <input class="inp" type="number" id="numberInp" name="NumberBox" placeholder="Number" autofocus/>
      <button class="btn" id="btn">Convert</button>
    </div>
  </section>
  <footer class="footer">
    <p class="footer-p">Made with 💛 By<a href="https://github.com/Octaviocossy" target="_blank" class="link">Octavio</a>.</p>
  </footer>`;
  menu.innerHTML = html;
};

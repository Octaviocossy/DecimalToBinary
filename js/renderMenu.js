export const renderMenu = () => {
  const menu = document.getElementById("main");
  let html = `
  <div class="menu" id="menu">
    <div class="title-div">
      <h1 class="title">Decimal to Binary</h1>
      <h1 class="title_2">Converter</h1>
    </div>
    <label class="txt" for="">Enter a decimal number to know its binary equivalent.</label>
    <input class="inp" type="number" id="numberInp" name="NumberBox" placeholder="Number"/>
    <button class="btn" id="btn">Convert</button>
  </div>`;
  menu.innerHTML = html;
};

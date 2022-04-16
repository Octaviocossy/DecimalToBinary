import "./styles.scss";

const App = () => {
  const btn = document.getElementById("btn");
  const input = document.getElementById("numberInp");
  let results = [];

  const deleteResult = (id) => {
    results = results.filter((item) => item.id !== id);
    renderResults(results, deleteResult);
  };

  const binaryLogic = (number) => {
    const nIng = parseInt(number);
    let resto = [];
    let nAnt = 0;
    let div = 0;
    let rest = 0;
    for (let i = 0; i < 30; i++) {
      if (i === 0) {
        div = nIng / 2;
        rest = nIng % 2;
      } else {
        div = nAnt / 2;
        rest = nAnt % 2;
      }
      resto.unshift(Math.trunc(rest));
      nAnt = div;
    }
    while (resto[0] === 0) {
      resto.shift();
    }
    return {
      base: number,
      binary: resto.join(""),
      id: Math.random().toString(36).slice(2),
    };
  };

  const renderResults = (results, deleteResult) => {
    const ul = document.getElementById("results");
    ul.innerHTML = "";
    results.map((element) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      let btnDelete = document.createElement("button");
      li.className = "main--ul__li";
      p.className = "main--ul__li--p";
      p.textContent = `${element.base} = ${element.binary}`;
      li.appendChild(p);
      ul.appendChild(li);
      btnDelete.className = "main--ul__li--btn";
      btnDelete.textContent = "Delete";
      btnDelete.addEventListener("click", () => deleteResult(element.id));
      li.appendChild(btnDelete);
    });
  };

  input.addEventListener("keyup", (x) => {
    if (input.value != "") {
      if (x.keyCode === 13) {
        results.push(binaryLogic(input.value));
        renderResults(results, deleteResult);
        input.value = "";
      }
    }
  });

  btn.addEventListener("click", (x) => {
    x.preventDefault();
    if (input.value != "") {
      results.push(binaryLogic(input.value));
      renderResults(results, deleteResult);
      input.value = "";
    } else {
      alert("Enter a number in the input");
    }
  });
};

App();

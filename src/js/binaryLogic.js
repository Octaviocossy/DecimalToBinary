export const binaryLogic = (n) => {
  const nIng = parseInt(n);
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
  return resto.join("");
};

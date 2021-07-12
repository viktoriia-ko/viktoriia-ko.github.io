/*
Task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
*/

let n = 0;
let m = 0;

function addNewBreakChain(
  dim1,
  dim2,
  infoText,
  parentChain = document.getElementById("visualisationField")
) {
  const breakChainWrapperComponent = document.createElement("div");
  breakChainWrapperComponent.classList.add("breakChainWrapper");
  breakChainWrapperComponent.innerText = infoText;

  parentChain.appendChild(breakChainWrapperComponent);

  const bar = document.createElement("table");
  bar.classList.add("bar");
  breakChainWrapperComponent.appendChild(bar);
  for (let rowNumber = 1; rowNumber <= dim2; rowNumber++) {
    const barRow = document.createElement("tr");
    bar.appendChild(barRow);
    for (let columnNumber = 0; columnNumber < dim1; ++columnNumber) {
      const barSquare = document.createElement("td");
      barRow.appendChild(barSquare);
    }
  }

  const childChainsWrapperComponent = document.createElement("div");
  childChainsWrapperComponent.classList.add("childChainsWrapper");
  breakChainWrapperComponent.appendChild(childChainsWrapperComponent);

  return childChainsWrapperComponent;
}

function getNumberInput(n, m) {
  while (n <= 0 || n > 10 || isNaN(n)) {
    n = +prompt(
      "Input the first value from 1 to 10, this is the length og the chocolate bar",
      ""
    );
    return n;
  }
  while (m < 1 || m > 10 || isNaN(m)) {
    m = +prompt(
      "Input the second value from 1 to 10, this is the width og the chocolate bar",
      ""
    );
    return m;
  }
  console.log(n, m);
}

function breakBar(dim1, dim2, nameString, parentBreakChain) {
  const breakChain = addNewBreakChain(dim1, dim2, nameString, parentBreakChain);

  if (dim1 === 1 && dim2 === 1) return 0;

  if (dim1 >= dim2) {
    return (
      breakBar(Math.ceil(dim1 / 2), dim2, nameString + "1.", breakChain) +
      breakBar(Math.floor(dim1 / 2), dim2, nameString + "2.", breakChain) +
      1
    );
  } else {
    return (
      breakBar(dim1, Math.ceil(dim2 / 2), nameString + "1.", breakChain) +
      breakBar(dim1, Math.floor(dim2 / 2), nameString + "2.", breakChain) +
      1
    );
  }
}

function playBarBreaker() {
  let dim1 = getNumberInput(n, m);
  let dim2 = getNumberInput(n, m);
  return breakBar(dim1, dim2, "piece ");
}

alert(playBarBreaker());

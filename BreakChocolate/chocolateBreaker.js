/*
+ Задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
+ Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
+ Требовать от пользователя входные данные так-же как в прошлом задании. Выводить каждое ломание шоколадки в консоль с указанием текущего состояния плитки и числа надломов.
+ Для получения размера реализовать функцию getNumberInput(maxValue, minValue)
let barLength = getNumberInput(maxValue, minValue);
+ Плитку ломать рекурсивно.
let finalBreakCount = breakBar(dimension1, dimension2, breakCount);
+ Число надломов вывести на самый верхний уровень рекурсии используя return. (иногда с этим возникают вопросы)
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
      breakBar(Math.ceil(dim1 / 2), dim2, nameString + "_" + "1", breakChain) +
      breakBar(Math.floor(dim1 / 2), dim2, nameString + "_" + "2", breakChain) +
      1
    );
  } else {
    return (
      breakBar(dim1, Math.ceil(dim2 / 2), nameString + "_" + "1", breakChain) +
      breakBar(dim1, Math.floor(dim2 / 2), nameString + "_" + "2", breakChain) +
      1
    );
  }
}

function playBarBreaker() {
  let dim1 = getNumberInput(n, m);
  let dim2 = getNumberInput(n, m);
  return breakBar(dim1, dim2, "piece");
}

alert(playBarBreaker());

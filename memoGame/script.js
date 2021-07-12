const cards = document.querySelectorAll(".memo_card");

let notFlippedCard = false;
let blockGameField = false;
let oneCard, twoCard;

function flipCard() {
  if (blockGameField) return;
  console.log(this, oneCard, this === oneCard);
  if (this === oneCard) return;
  this.classList.add("flip");
  if (!notFlippedCard) {
    notFlippedCard = true;
    oneCard = this;
    return;
  }

  twoCard = this;
  blockGameField = false;

  checkPairsMatch();
  allFlippedCards();
}

function checkPairsMatch() {
  if (oneCard.dataset.object === twoCard.dataset.object) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  oneCard.removeEventListener("click", flipCard);
  twoCard.removeEventListener("click", flipCard);

  clearGameField();
}

function unflipCards() {
  blockGameField = true;
  setTimeout(() => {
    oneCard.classList.remove("flip");
    twoCard.classList.remove("flip");

    clearGameField();
  }, 1000);
}

function clearGameField() {
  [notFlippedCard, blockGameField] = [false, false];
  [oneCard, twoCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

let second = 0;
let minute = 0;
let hour = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = minute + ":" + second;
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function countResult() {
  timer.innerHTML = minute + ":" + second;
  result = Math.floor((minute * 60 + second) / 8);
  return result;
}

function allFlippedCards() {
  const allCards = document.querySelectorAll(".flip").length;
  if (allCards == 16) {
    clearInterval(interval);
    finalTime = timer.innerHTML;
    totalResult = countResult();
    document.getElementById("totalTime").innerHTML = finalTime;
    document.getElementById("totalResult").innerHTML = totalResult;
    showWinScreen();
  }
}

function showWinScreen() {
  document.getElementById("winner").style.display = "block";
}

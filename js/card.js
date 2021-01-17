//Movement Animation to happen
const cardMiddle = document.querySelector(".card-middle");
const cardLeft = document.querySelector(".card-left");
const cardRight = document.querySelector(".card-right");
//Items
const title = document.querySelector(".card-middle h3");
const webImg = document.querySelector(".circle-middle img");
const readMoreBtn = document.querySelector(".read-middle a");
const description = document.querySelector(".info-middle p");

//Moving Animation Event
const animateMiddleCard = (card) => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 4;
    let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
};

const animateLeft = (card) => {
  let cardCenter = card.offsetWidth / 2;
  let cardMidPoint = card.getBoundingClientRect().left + cardCenter;

  let cardCenterHeight = card.offsetHeight / 2;
  let cardMidHeight = card.getBoundingClientRect().top + cardCenterHeight;

  card.addEventListener("mousemove", (e, side) => {
    let xAxis = (cardMidPoint - e.pageX + window.innerWidth / 18) / 4;
    let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
    cardLeft.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
};

const animateRight = (card) => {
  let cardRightCenter = card.offsetWidth / 2;
  let cardRightMiddle = card.getBoundingClientRect().left + cardRightCenter;

  card.addEventListener("mousemove", (e) => {
    let xAxis = (cardRightMiddle - e.pageX - window.innerWidth / 20) / 4;
    let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
    cardRight.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
};

const animateCardInOut = (card) => {
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.05s ease";
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
};

if (window.innerWidth > 850) {
  animateMiddleCard(cardMiddle);
  animateRight(cardRight);
  animateLeft(cardLeft);
  animateCardInOut(cardRight);
  animateCardInOut(cardLeft);
  animateCardInOut(cardMiddle);
}

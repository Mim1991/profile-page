//Movement Animation to happen
// const card = document.querySelector(".card-middle");
const cardMiddle = document.querySelector(".card-middle");
const cardLeft = document.querySelector(".card-left");
const cardRight = document.querySelector(".card-right");
//Items
const title = document.querySelector(".card-middle h3");
const webImg = document.querySelector(".circle-middle img");
const readMoreBtn = document.querySelector(".read-middle a");
const description = document.querySelector(".info-middle p");

// const sizes = document.querySelector(".sizes");

//Moving Animation Event
const animateMiddleCard = (card) => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 4;
    let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
}

const animateCardInOut = (card) => {
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.05s ease";
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
}
  

if (window.innerWidth > 850) {
  animateCard(cardMiddle);
  // animateCard(cardLeft);


//  Left Card
// half the width of the card
let cardCenter = cardLeft.offsetWidth / 2;
// distance from edge of screen to mid point of card
let cardLeftMiddle = cardLeft.getBoundingClientRect().left + cardCenter;

console.log(cardLeft.getBoundingClientRect);
window.addEventListener("mousemove", (e) => {
  // console.log(e.pageX);
});

cardLeft.addEventListener("mousemove", (e) => {
  let xAxis = (cardLeftMiddle - e.pageX + window.innerWidth / 18) / 4;
  let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
  console.log(window.innerWidth);
  cardLeft.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

cardLeft.addEventListener("mouseenter", (e) => {
  cardLeft.style.transition = "all 0.05s ease";
});
//Animate Out
cardLeft.addEventListener("mouseleave", (e) => {
  cardLeft.style.transition = "all 0.5s ease";
  cardLeft.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Right Card
let cardRightCenter = cardRight.offsetWidth / 2;
let cardRightMiddle = cardRight.getBoundingClientRect().left + cardRightCenter;

cardRight.addEventListener("mousemove", (e) => {
  let xAxis = (cardRightMiddle - e.pageX - window.innerWidth / 20) / 4;
  let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
  console.log(window.innerWidth);
  cardRight.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

cardRight.addEventListener("mouseenter", (e) => {
  cardRight.style.transition = "all 0.05s ease";
});
//Animate Out
cardRight.addEventListener("mouseleave", (e) => {
  cardRight.style.transition = "all 0.5s ease";
  cardRight.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

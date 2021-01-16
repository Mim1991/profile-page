//Movement Animation to happen
// const card = document.querySelector(".card-middle");
const container = document.querySelector(".card-middle");
//Items
const title = document.querySelector(".title-middle");
const webImg = document.querySelector(".circle-middle img");
console.log(webImg);
const readMoreBtn = document.querySelector(".read-middle a");
const description = document.querySelector(".info-middle p");

// const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerHeight / 2 - e.pageY + 1480) / 20;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  container.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(600px)";
  webImg.style.transform = "translateZ(300px)";
  description.style.transform = "translateZ(50px)";
  readMoreBtn.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  container.style.transition = "all 0.5s ease";
  container.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  webImg.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  readMoreBtn.style.transform = "translateZ(0px)";
});

const borderTwo = document.querySelector(".border-two");
const sectionTwo = document.querySelector(".section-two");
const contentTwo = document.querySelector(".content-two");
const shadowTwo = document.querySelector(".shadow-work");
const workCards = document.querySelector(".work-cards");

let sectionTwoHeight = sectionTwo.offsetHeight;

window.addEventListener("scroll", () => {
  const sectionTwoY = sectionTwo.getBoundingClientRect();
  const scroll = window.pageYOffset;
  const contentTwoTransform = scroll / (sectionTwoY.top + sectionTwoHeight);
  let borderWidth = contentTwoTransform * 1.009 ** (scroll - 900);
  if (borderWidth < 100) {
    borderTwo.style.width = `${borderWidth}%`;
  }

  shadowTwo.style.height = `${scroll * 0.7 - 300}px`;

  // contentTwo.style.transform = `translateY(${contentTwoTransform * -150}px)`;
  // workCards.style.transform = `translateY(${contentTwoTransform * -150}px)`;
});

const borderTwo = document.querySelector(".border-two");
const sectionTwo = document.querySelector(".section-two");
const contentTwo = document.querySelector(".content-two");
const shadowTwo = document.querySelector(".shadow-work");
console.log(shadowTwo);

let sectionTwoHeight = sectionTwo.offsetHeight;

window.addEventListener("scroll", () => {
  const sectionTwoY = sectionTwo.getBoundingClientRect();
  const scroll = window.pageYOffset;
  const contentTwoTransform = scroll / (sectionTwoY.top + sectionTwoHeight);

  if (contentTwoTransform * 30 - 30 <= 30) {
    borderTwo.style.width = `${contentTwoTransform * 30 - 30}%`;
  }

  shadowTwo.style.height = `${scroll * 0.7 - 300}px`;

  contentTwo.style.transform = `translateY(${contentTwoTransform * -150}px)`;
});

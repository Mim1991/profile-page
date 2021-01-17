const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector(".section");
const imageContainer = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let headerHeight = header.offsetHeight;
let sectionHeight = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  // opacity on scroll
  bigTitle.style.opacity = -scroll / (headerHeight / 1.5) + 1;
  // blur out the section before on scroll. Second value is the rate of blur
  shadow.style.height = `${scroll * 0.7 + 300}px`;

  // when sectionY.top is 0 (it's hit the top of the element) the scroll dist = height to section => eq = 1, 1*50-50  = 0
  // at top of screen scroll = 0, eq = -50
  // As you move down y position goes from -50 to 0 moves down

  const contentTransform = scroll / (sectionHeight + sectionY.top);

  if (contentTransform <= 1 && contentTransform >= 0) {
    content.style.transform = `translateY(${contentTransform * 50 - 50}px)`;

    // Opposite of above and content moves up
    imageContainer.style.transform = `translateY(${
      contentTransform * -50 + 50
    }px)`;

    opacity.forEach((element) => {
      element.style.opacity = contentTransform;
    });
  }

  // this is the equation to reuse to calculate the approach to the section

  const maxBorder = (scroll / (sectionY.top + sectionHeight)) * 30;
  if (maxBorder <= 30) {
    border.style.width = `${maxBorder}%`;
  }
});

const sliderCtn = document.querySelector(".sub-slider__container");
const prevBtn = document.querySelector(".sub-slider-btn");
const nextBtn = document.querySelector(".sub-slider-btn__next");
let index = 0;
let subindex = 0;
let em = 16;
const subSlideSpeed = 600;
window.onresize = function () {
  sliderCtn.style.transform = `translate3d(0, 0, 0)`;
  document.location.reload();
};

if (matchMedia("(max-width: 36em)").matches) {
  smallSlide();
} else {
  normalSlide();
}

function smallSlide() {
  nextBtn.addEventListener("click", function () {
    if (subindex === 5) {
    } else {
      subindex += 1;
      sliderCtn.style.transform = `translate3d(${-100 * subindex}vw, 0, 0)`;
      sliderCtn.style.transition = `${subSlideSpeed}ms`;
    }
  });
  prevBtn.addEventListener("click", function () {
    if (subindex > 0) {
      subindex -= 1;
      sliderCtn.style.transform = `translate3d(${
        -100 * (subindex + 1) + 100
      }vw, 0, 0)`;
      sliderCtn.style.transition = `${subSlideSpeed}ms`;
    } else {
    }
  });
}

function normalSlide() {
  nextBtn.addEventListener("click", function () {
    nextBtn.style.pointerEvents = "auto";
    if (index === 3) {
    } else {
      index += 1;
      sliderCtn.style.transform = `translate3d(${-33.333 * index}vw, 0, 0)`;
      sliderCtn.style.transition = `${subSlideSpeed}ms`;
    }
  });
  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      index -= 1;
      sliderCtn.style.transform = `translate3d(${
        -33.333 * (index + 1) + 33.333
      }vw, 0, 0)`;
      sliderCtn.style.transition = `${subSlideSpeed}ms`;
    } else {
    }
  });
}

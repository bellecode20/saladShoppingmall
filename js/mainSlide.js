///////// Main Slide

const mainSlideWrap = document.querySelector(".main-slider-wrapper");
const mainSlideCntr = document.querySelectorAll(".main-slider__container");
const slideLen = mainSlideCntr.length;
const slideWidth = 100;
const slideSpeed = 700;
mainSlideWrap.style.width = slideWidth * (slideLen + 2) + "vw";
let startNum = 0;

// slide img 수에 맞는 버튼 자동 생성
const btns = document.querySelector(".main-slider__btns");
function createBtn() {
  for (let i = 1; i <= slideLen; i++) {
    const newBtn = document.createElement("div");
    newBtn.classList.add("main-slider__btn");
    btns.appendChild(newBtn);
  }
}
createBtn();
const btnsArr = Array.from(document.querySelectorAll(".main-slider__btn"));
btnsArr[0].classList.toggle("btn--selected");

//Copy first and last slide
let firstChild = mainSlideWrap.firstElementChild;
let lastChild = mainSlideWrap.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

//Add Copied Slides
mainSlideWrap.appendChild(clonedFirst);
mainSlideWrap.insertBefore(clonedLast, mainSlideWrap.firstElementChild);

//wrapper에서 이미지 넘겨서 진짜 첫번째 이미지 나오게 하기
mainSlideWrap.style.transform = `translate3d(-${
  slideWidth * (startNum + 1)
}vw, 0, 0)`;
let curIndex = startNum; // current slide index (except copied slide)
let curSlide = mainSlideWrap[curIndex]; // current slide dom

//슬라이드 넘기기!
setInterval(toLeftSlide, 5000);
mainSlideWrap.addEventListener("click", toLeftSlide);
function noClickInTrans() {
  mainSlideWrap.style.pointerEvents = `none`;
  setTimeout(function () {
    mainSlideWrap.style.pointerEvents = `auto`;
  }, 700);
}
function toLeftSlide() {
  if (curIndex <= slideLen - 1) {
    mainSlideWrap.style.transform = `translate3d(-${
      slideWidth * (curIndex + 2)
    }vw, 0, 0)`;
    mainSlideWrap.style.transition = slideSpeed + "ms";
    noClickInTrans();
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      mainSlideWrap.style.transition = "0ms";
      mainSlideWrap.style.transform = `translate3d(-${slideWidth}vw, 0, 0)`;
    }, slideSpeed);
    noClickInTrans();
    curIndex = -1;
  }
  //btn들 array로 변환
  if (mainSlideWrap.style.transform === `translate3d(-200vw, 0px, 0px)`) {
    btnsArr[0].classList.remove("btn--selected");
    btnsArr[1].classList.add("btn--selected");
  } else if (
    mainSlideWrap.style.transform === `translate3d(-300vw, 0px, 0px)`
  ) {
    btnsArr[1].classList.remove("btn--selected");
    btnsArr[2].classList.add("btn--selected");
  } else if (
    mainSlideWrap.style.transform === `translate3d(-400vw, 0px, 0px)`
  ) {
    btnsArr[2].classList.remove("btn--selected");
    btnsArr[0].classList.add("btn--selected");
  }
  curSlide = mainSlideWrap[++curIndex];
}

//헤더 펼쳐지기
const wideNav = document.querySelector(".nav--wide");
const navLogo = document.querySelector("#nav-logo--normal");
const mainSlideWrapper = document.querySelector("#main-slider-wrapper");
const headerHoverOverlay = document.querySelector(".header--hover--overlay");

function mouseenterNav() {
  wideNav.classList.toggle("nav--wide--hover");
  headerHoverOverlay.classList.toggle("none");
  navLogo.src = "img/logo-dark-header.png";
}
function mouseleaveNav() {
  wideNav.classList.toggle("nav--wide--hover");
  headerHoverOverlay.classList.toggle("none");
  navLogo.src = "img/logo.png";
}
wideNav.onmouseenter = mouseenterNav;
wideNav.onmouseleave = mouseleaveNav;

//스크롤 내렸을 때 헤더 없어지기

const wideHeader = document.querySelector(".header--wide");
const narrowHeader = document.querySelector(".header--narrow");

window.onload = function () {
  window.addEventListener("scroll", function () {
    let vh = window.innerHeight;
    if (window.scrollY > vh) {
      wideHeader.classList.add("none");
      narrowHeader.style.display = "none";
    } else {
      wideHeader.classList.remove("none");
      narrowHeader.style.display = "block";
      console.log("else 실행");
    }
    console.log(window.scrollY);
  });
};

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

// - 직접 하나하나씩 const
const navRegularDlvy = document.querySelector("#nav--regular-delivery");
const subNavRegularDlvy = document.querySelector("#subnav--regular-delivery");
const navSalad = document.querySelector("#nav--salad");
const subNavSalad = document.querySelector("#subnav--salad");
const navSandwich = document.querySelector("#nav--sandwich");
const subNavSandwich = document.querySelector("#subnav--sandwich");
const navSnack = document.querySelector("#nav--snack");
const subNavSnack = document.querySelector("#subnav--snack");

//nav 들어올 때
navRegularDlvy.onmouseenter = function () {
  subNavRegularDlvy.classList.remove("none");
  subNavRegularDlvy.classList.toggle("slow-appear");
};
navSalad.onmouseenter = function () {
  subNavSalad.classList.remove("none");
  subNavRegularDlvy.classList.toggle("slow-appear");
};
navSandwich.onmouseenter = function () {
  subNavSandwich.classList.remove("none");
};
navSnack.onmouseenter = function () {
  subNavSnack.classList.remove("none");
};

//nav 떠날 때
navRegularDlvy.onmouseleave = function () {
  subNavRegularDlvy.classList.add("none");
};
navSalad.onmouseleave = function () {
  subNavSalad.classList.add("none");
};
navSandwich.onmouseleave = function () {
  subNavSandwich.classList.add("none");
};
navSnack.onmouseleave = function () {
  subNavSnack.classList.add("none");
};

//subnav 들어올 때
subNavRegularDlvy.onmouseenter = function () {
  navRegularDlvy.classList.remove("none");
  subNavRegularDlvy.classList.remove("none");
  mouseenterNav();
};
subNavSalad.onmouseenter = function () {
  navSalad.classList.remove("none");
  subNavSalad.classList.remove("none");
  mouseenterNav();
};
subNavSandwich.onmouseenter = function () {
  navSandwich.classList.remove("none");
  subNavSandwich.classList.remove("none");
  mouseenterNav();
};
subNavSnack.onmouseenter = function () {
  navSnack.classList.remove("none");
  subNavSnack.classList.remove("none");
  mouseenterNav();
};

//subnav 떠날 때
subNavRegularDlvy.onmouseleave = function () {
  navRegularDlvy.classList.remove("none");
  subNavRegularDlvy.classList.add("none");
  mouseleaveNav();
};
subNavSalad.onmouseleave = function () {
  navSalad.classList.remove("none");
  subNavSalad.classList.add("none");
  mouseleaveNav();
};
subNavSandwich.onmouseleave = function () {
  navSandwich.classList.remove("none");
  subNavSandwich.classList.add("none");
  mouseleaveNav();
};
subNavSnack.onmouseleave = function () {
  navSnack.classList.remove("none");
  subNavSnack.classList.add("none");
  mouseleaveNav();
};

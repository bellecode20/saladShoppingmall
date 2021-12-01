const navHamburger = document.querySelector("#nav__hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarTrans = document.querySelector(".sidebar--trans");

navHamburger.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar--trans");
  sidebar.classList.toggle("test");
});

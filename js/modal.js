//모달 버튼 누르거나 ESC누르면 닫기
const modalOverlay = document.querySelector("#modal-overlay");
const modalCloseBtn = document.querySelector("#modal-close-div");
const wrap = document.querySelector(".wrap");

modalCloseBtn.addEventListener("click", function () {
  modalOverlay.classList.add("none");
  wrap.classList.remove("wrap");
});

window.onkeyup = function (event) {
  if (event.keyCode == 27) {
    modalOverlay.classList.add("none");
    wrap.classList.remove("wrap");
  }
};

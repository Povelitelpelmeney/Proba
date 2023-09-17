"use strict";
const modalWind = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".close-modal-window");
const btnsShowModalWindow = document.querySelectorAll(".show-modal-window");
console.log(btnsShowModalWindow);
const close = function () {
  modalWind.classList.add("hidden");
  overlay.classList.add("hidden");
};
const display = function () {
  console.log(`beb `);
  modalWind.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener("click", display);
}
btnCloseModalWindow.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (!modalWind.classList.contains("hidden")) close();
  }
});

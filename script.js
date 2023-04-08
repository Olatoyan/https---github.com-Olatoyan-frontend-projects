"use strict";

const navOpenButton = document.querySelector(".header__nav__open");
const navOpenButto = document.querySelector(".nav-open");
const navCloseButton = document.querySelector(".header__nav__close");

navOpenButton.addEventListener("click", function () {
  navOpenButto.classList.remove("close");
  navCloseButton.classList.add("open");
  navOpenButton.classList.add("close");
});
navCloseButton.addEventListener("click", function () {
  navOpenButto.classList.add("close");
  navCloseButton.classList.remove("open");
  navOpenButton.classList.remove("close");
});

"use strict";
console.log("hello newbie, darkmode");

const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

// Lightmode / Darkmode

// get local storage
const darkmode = JSON.parse(localStorage.getItem("darkmode")) ?? true;
// local storage UPDATE
if (!darkmode) {
  document.body.classList.add("darkmode");
}

darkmodeToggleButton.addEventListener("click", () => {
  // local storage
  if (darkmode) {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", JSON.stringify(false));
  } else {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", JSON.stringify(true));
  }
  // ui UPDATE
  darkmodeToggleButton.firstElementChild.classList.toggle(
    "flipDarkmodeSwitcher"
  );
});

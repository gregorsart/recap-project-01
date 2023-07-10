"use strict";

console.clear();
console.log("hello newbie");

// VARIABLE DECLARATION

// Lightmode / Darkmode
const htmlBodyTag = document.querySelector('[data-js="body"]');
const htmlSections = document.querySelectorAll("section");
const darkmodeToggleButton = document.querySelector(
  '[data-js="darkmodeToggleButton"]'
);

const htmlCards = document.querySelectorAll('[data-js="card"]');

// EVENT LISTENER & LOGIC

// Lightmode / Darkmode

darkmodeToggleButton.addEventListener("click", () => {
  console.log([darkmodeToggleButton]);
  darkmodeToggleButton.firstElementChild.classList.toggle(
    "flipDarkmodeSwitcher"
  );
  const htmlCollection = htmlBodyTag.children;
  for (let item of htmlCollection) {
    item.classList.toggle("lightmode");
  }
  [...htmlSections].forEach((section) => section.classList.toggle("lightmode"));
});

// Show Answer / Hide Answer Animation
// Works for all the Cards that get added

[...htmlCards].forEach((ele) => {
  const showAnswerButton = ele.querySelector('[data-js="showAnswerButton"]');
  showAnswerButton.addEventListener("click", () => {
    console.log(showAnswerButton.innerText);
    console.log("ele:", ele);
    const answerElement = ele.querySelector('[data-js="answer"]');
    console.log("ele Answer:", answerElement);
    if (showAnswerButton.innerText === "Show Answer") {
      // animatioin
      answerElement.classList.remove("hidden");
      answerElement.classList.add("visible");
      // change button text
      showAnswerButton.innerText = "Hide Answer";
      // remove hidden attribute
      answerElement.removeAttribute("hidden");
    } else {
      console.log("test");
      // animation
      answerElement.classList.remove("visible");
      answerElement.classList.add("hidden");
      // wait until animation has ended, and then set hidden and change the button text
      setTimeout(() => {
        answerElement.setAttribute("hidden", true);
        // change button text
        showAnswerButton.innerText = "Show Answer";
      }, 500);
    }
  });
});

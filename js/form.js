"use strict";
console.clear();
console.log("hello newbie");

// VARIABLES
const form = document.querySelector('[data-js="form"]');

const questionTextarea = document.querySelector(
  '[data-js="textarea-question"]'
);
const answerTextarea = document.querySelector('[data-js="textarea-answer"]');

// EVENT

console.log(questionTextarea, answerTextarea);
// Question
questionTextarea.addEventListener("input", () => {
  const totalLength = questionTextarea.getAttribute("maxlength");
  const inputLength = questionTextarea.value.length;
  const charactersLeft = document.querySelector(
    '[data-js="characters-left-question"]'
  );

  charactersLeft.textContent = `${totalLength - inputLength} characters left`;
});

// Answer
answerTextarea.addEventListener("input", () => {
  const totalLength = answerTextarea.getAttribute("maxlength");
  const inputLength = answerTextarea.value.length;
  const charactersLeft = document.querySelector(
    '[data-js="characters-left-answer"]'
  );

  charactersLeft.textContent = `${totalLength - inputLength} characters left`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("form elements:", data);
});

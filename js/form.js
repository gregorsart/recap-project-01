"use strict";
console.clear();
console.log("hello newbie");

// VARIABLES
const form = document.querySelector('[data-js="form"]');
const cardsUnorderedList = document.querySelector(
  '[data-js="cards-unordered-list"]'
);

const questionTextarea = document.querySelector(
  '[data-js="textarea-question"]'
);
const answerTextarea = document.querySelector('[data-js="textarea-answer"]');

// EVENTS

// Question
questionTextarea.addEventListener("input", () => {
  const totalLength = questionTextarea.getAttribute("maxlength");
  const inputLength = questionTextarea.value.length;
  const charactersLeft = document.querySelector(
    '[data-js="characters-left-question"]'
  );

  charactersLeft.textContent = `${totalLength - inputLength} characters left`;
});

//  Answer
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
  //   GET FORM DATA
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);

  //   INNER HTML
  const answerCardInnerHtml = `

        <h2 data-js="question">${data.question}</h2>
        <div class="card__wrapper">
        <svg
            class="card__icon--questionmark"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
        >
            <path
            fill="currentColor"
            d="M379.063 148.114c0 89.948-99.942 83.84-99.942 146.026v.336c0 7.174-5.815 12.989-12.989 12.989h-54.53c-7.174 0-12.989-5.815-12.989-12.989v-3.668c0-96.055 87.727-89.947 87.727-134.921c0-19.433-14.436-31.093-38.311-31.093c-19.423 0-39.271 8.493-57.314 25.851c-4.624 4.448-11.854 4.729-16.907.776l-35.862-28.05c-6.044-4.727-6.745-13.685-1.402-19.193c29.94-30.865 68.846-49.343 120.369-49.343c81.618.001 122.15 43.864 122.15 93.279zm-88.838 260.403c0 27.762-22.209 50.526-50.525 50.526c-27.762 0-50.526-22.764-50.526-50.526c0-27.761 22.764-50.525 50.526-50.525c28.317 0 50.525 22.764 50.525 50.525z"
            />
        </svg>
        <h2 class="card__answer hidden" data-js="answer" hidden>
            ${data.answer}
        </h2>
        </div>

    `;

  //   CREATE
  const cardElement = document.createElement("li");
  const buttonBookmarkElement = document.createElement("button");

  //   SVG
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.classList.add("bookmark__icon");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  buttonBookmarkElement.append(svgElement);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Z"
  );
  path.setAttribute("fill", "currentColor");
  svgElement.append(path);

  //   create remaining elements
  const answerCardInnerHtmlDiv = document.createElement("div");
  const buttonMainElement = document.createElement("button");
  const unorderedListElement = document.createElement("ul");
  const listItemOne = document.createElement("li");

  //   ADD INPUT CONTENT ON SUBMIT
  buttonMainElement.textContent = "Show Answer";
  listItemOne.textContent = data.tags;

  //   SET ATTRIBUTES
  buttonMainElement.setAttribute("data-js", "showAnswerButton");

  //   ADD CLASSES
  cardElement.classList.add("card");
  buttonMainElement.classList.add("card__button");
  buttonBookmarkElement.classList.add("card__button--bookmark");
  answerCardInnerHtmlDiv.classList.add("card__container");
  listItemOne.classList.add("taglist__item");

  //   SET INNER HTML
  answerCardInnerHtmlDiv.innerHTML = answerCardInnerHtml;

  //   ADD TO DOM STRUCTURE
  buttonBookmarkElement.append(svgElement);
  unorderedListElement.append(listItemOne);

  cardElement.append(
    buttonBookmarkElement,
    answerCardInnerHtmlDiv,
    buttonMainElement,
    unorderedListElement
  );
  cardsUnorderedList.append(cardElement);
});

"use strict";
console.log("hello newbie, displayCards");

// CREATE CARD ELEMENTS --------------------------------------

// INNER HTML for the Question and Answer Card  ----- START
function renderCardsConditionally(cards) {
  // VARIABLES ---------------------------------------------------
  const cardsUnorderedList = document.querySelector(
    '[data-js="cards-unordered-list"]'
  );

  cards.forEach((card) => {
    const answerCardInnerHtmlDiv = document.createElement("div");
    const answerCardInnerHtml = `
  
      <h2 data-js="question">${card.question}</h2>
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
          ${card.answer}
      </h2>
      </div>
      
      `;
    // add class
    answerCardInnerHtmlDiv.classList.add("card__container");
    // set inner html
    answerCardInnerHtmlDiv.innerHTML = answerCardInnerHtml;
    // INNER HTML for the Question and Answer Card  ----- END

    //   tags li element
    const unorderedListElement = document.createElement("ul");
    const listItemOne = document.createElement("li");
    listItemOne.classList.add("taglist__item");
    listItemOne.textContent = card.tags;
    unorderedListElement.append(listItemOne);

    // main button element
    const buttonMainElement = document.createElement("button");
    buttonMainElement.setAttribute("data-js", "showAnswerButton");
    buttonMainElement.classList.add("card__button");
    buttonMainElement.textContent = "Show Answer";

    // bookmark button element with logic ----------------------
    const buttonBookmarkElement = document.createElement("button");
    buttonBookmarkElement.classList.add("card__button--bookmark");
    buttonBookmarkElement.setAttribute("data-js", "bookmark-button");
    // Event Listener
    buttonBookmarkElement.addEventListener("click", () => {
      //  Here I change the boolean value of a card obeject, then I get all the cards except the one I altered and finally I add the altered card back in via push. This approach feels wrong, but it works

      // cards.forEach((cardElement) => {
      //   if (cardElement.id === card.id) {
      //     cardElement.bookmarked = !cardElement.bookmarked;
      //   }
      // });

      const alteredCardObject = {
        ...card,
        bookmarked: !card.bookmarked,
      };
      const filteredArray = cards.filter(
        (cardElement) => cardElement.id != card.id
      );
      // filteredArray.push(alteredCardObject);
      const alteredCardsArray = [...filteredArray, alteredCardObject];

      localStorage.setItem("cards", JSON.stringify(alteredCardsArray));

      buttonBookmarkElement.classList.toggle("active");
    });

    // set initial state of bookmark UI or bookmark.html
    buttonBookmarkElement.classList.remove("active");
    if (card.bookmarked) {
      buttonBookmarkElement.classList.add("active");
    }

    // svg element bookmark ------------------------------------
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.classList.add("bookmark__icon");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("viewBox", "0 0 24 24");

    // path element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Z"
    );
    path.setAttribute("fill", "currentColor");
    // append
    svgElement.append(path);
    // append
    buttonBookmarkElement.append(svgElement);

    // trash button element with logic -------------------------
    const buttonTrashElement = document.createElement("button");
    buttonTrashElement.classList.add("card__button--trash");
    buttonTrashElement.setAttribute("data-js", "trash-button");
    buttonTrashElement.addEventListener("click", () => {
      const filteredArray = cards.filter(
        (cardElement) => cardElement.id != card.id
      );
      localStorage.setItem("cards", JSON.stringify(filteredArray));
      buttonBookmarkElement.classList.toggle("active");
    });

    // svg element trash --------------------------------------
    const svgTrashElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgTrashElement.classList.add("trash__icon");
    svgTrashElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgTrashElement.setAttribute("viewBox", "0 0 24 24");

    // path element
    const pathTrash = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathTrash.setAttribute(
      "d",
      "m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Z"
    );
    pathTrash.setAttribute("fill", "currentColor");
    // append
    svgTrashElement.append(pathTrash);
    // append
    buttonTrashElement.append(svgTrashElement);

    // li element (card)
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-js", "card");
    cardsUnorderedList.append(cardElement);

    // append multiple elements
    cardElement.append(
      buttonTrashElement,
      buttonBookmarkElement,
      answerCardInnerHtmlDiv,
      buttonMainElement,
      unorderedListElement
    );
  });
}

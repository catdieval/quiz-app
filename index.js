import { setDarkLightMode } from "./utils/setDarkLightMode.js";

setDarkLightMode();

if (JSON.parse(localStorage.getItem("array-cards")) === null) {
  const answerElement = document.querySelector('[data-js="answer"]');
  const questionElement = document.querySelector('[data-js="question"]');
  const tagElement = document.querySelector('[data-js="tag"]');
  
  const answer = answerElement.textContent;
  const question = questionElement.textContent;
  const tag = tagElement.textContent;
  
  const obj = {
    questionName: question, answerName: answer, tagName: tag, isBookmarkedValue: false
  };

  let arrayCards = [obj];

  localStorage.setItem("array-cards", JSON.stringify(arrayCards));
}

const container = document.querySelector(".card-container");
let arrayCards = JSON.parse(localStorage.getItem("array-cards"));

let arrayBookmarks;
if (JSON.parse(localStorage.getItem("array-bookmarks")) !== null) {
  arrayBookmarks = JSON.parse(localStorage.getItem("array-bookmarks"));
}

const numberCards = arrayCards.length;

// index 0 is the already present card
let arrayNewCards = arrayCards.slice(1);;

if (numberCards > 1) {
  arrayNewCards.map((obj) => {
    const cardAdded = document.createElement("section");
    cardAdded.classList.add("question-card-box");
    cardAdded.innerHTML = `
  <p class="question" data-js="question">${obj.questionName}</p>
          <button type="button" class="answer-button" data-js="answer-button">
            Hide answer
          </button>
          <p class="question" data-js="answer">${obj.answerName}</p> 
          <div class="tag-section">
             <p>Tag</p>
             <span class="category" data-js="tag">${obj.tagName}</span>
          </div>
          <button
            type="button"
            class="bookmark-button"
            data-js="toggle-bookmark-button"
          >
            🔖
          </button>
          <button
            type="button"
            class="delete-card"
            aria-label="Delete card"
            title="Delete card"
            data-js="delete-card-button"
          >
            ✖
          </button>  
  `;
    container.appendChild(cardAdded);
  });
}

const listOfToggleAnswerBtns = document.querySelectorAll('[data-js="answer-button"]');
const listOfToggleBookmarkBtns = document.querySelectorAll('[data-js="toggle-bookmark-button"]');
const listOfQuestions = document.querySelectorAll('[data-js="question"]');
const listOfAnswers = document.querySelectorAll('[data-js="answer"]');
const listOfTags = document.querySelectorAll('[data-js="tag"]');
const listOfDeleteBtns = document.querySelectorAll('[data-js="delete-card-button"]');

for (let i = 0; i < numberCards; i++) {
  const btnBookmark = listOfToggleBookmarkBtns[i];
  const questionElement = listOfQuestions[i];
  const answerElement = listOfAnswers[i];
  const tagElement = listOfTags[i];
  const btnAnswer = listOfToggleAnswerBtns[i];

  if (arrayCards[i].isBookmarkedValue === true) {
    btnBookmark.classList.add("selected-bookmark-button");
    btnBookmark.setAttribute("isBookmarked", "");
    btnBookmark.title = "Delete bookmark";
    btnBookmark.setAttribute("aria-label", "Delete bookmark"); 

  } else {
    btnBookmark.classList.remove("selected-bookmark-button");
    btnBookmark.removeAttribute("isBookmarked");
    btnBookmark.title = "Bookmark card";
    btnBookmark.setAttribute("aria-label", "Bookmark card");
  }

  const answer = answerElement.textContent;
  const question = questionElement.textContent;
  const tag = tagElement.textContent;

  const obj = {
    questionName: question, answerName: answer, tagName: tag
  };

  btnBookmark.addEventListener("click", () => {
    btnBookmark.classList.toggle("selected-bookmark-button");
    btnBookmark.toggleAttribute("isBookmarked");

    const dialogMessage = document.createElement("p");
    const dialogBookmark = document.createElement("dialog");  
    dialogBookmark.setAttribute("open", "");

    // if the user has bookmarked the card
    if (btnBookmark.hasAttribute("isBookmarked")) {
      arrayCards[i].isBookmarkedValue = true;
      
      localStorage.setItem("array-cards", JSON.stringify(arrayCards));

      btnBookmark.title = "Delete bookmark";
      btnBookmark.setAttribute("aria-label", "Delete bookmark"); 

        if (JSON.parse(localStorage.getItem("array-bookmarks")) === null) {
          arrayBookmarks = [obj];
          
          localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
        } else { 
          // if arrayBookmarks already exists in localStorage
          const indexObjAlreadyBookmarked = arrayBookmarks.findIndex((object) => object.questionName === obj.questionName);
          
          // if the card was previously not bookmarked, then add it to arrayBookmarks
          if (indexObjAlreadyBookmarked === -1) {
            arrayBookmarks.push(obj);
            
            localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
          } 
        }
      
      dialogMessage.textContent = "Card added to bookmarks!";

    } else {
      // if the user has unbookmarked the card
      arrayCards[i].isBookmarkedValue = false;
      
      localStorage.setItem("array-cards", JSON.stringify(arrayCards));

      btnBookmark.title = "Bookmark card";
      btnBookmark.setAttribute("aria-label", "Bookmark card");

      // if arrayBookmarks already exists in localStorage
      if (JSON.parse(localStorage.getItem("array-bookmarks")) !== null) {
        const indexObjAlreadyBookmarked = arrayBookmarks.findIndex((object) => object.questionName === obj.questionName);
            
        // If the card was previously bookmarked, then delete it from arrayBookmarks
        if (indexObjAlreadyBookmarked !== -1) {
          arrayBookmarks.splice(indexObjAlreadyBookmarked, 1);
            
          localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
        }
      }

      dialogMessage.textContent = "Card deleted from bookmarks!";

    }

    dialogBookmark.appendChild(dialogMessage);
    container.appendChild(dialogBookmark);
    setTimeout(() => {
        container.removeChild(dialogBookmark);
    }, 2000);
  });

  btnAnswer.addEventListener("click", () => {
    btnAnswer.textContent = (answerElement.hasAttribute("hidden")) ? "Hide answer": "Show answer";
    answerElement.toggleAttribute("hidden");
  });

  if (i > 0) {
  listOfDeleteBtns[i - 1].addEventListener("click", () => {
    const indexObjAlreadyBookmarked = arrayBookmarks.findIndex((object) => object.questionName === obj.questionName);
    
    // If the card is bookmarked, then delete it from arrayBookmarks
    if (indexObjAlreadyBookmarked !== -1) {
      arrayBookmarks.splice(indexObjAlreadyBookmarked, 1);
            
      localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
    }

    arrayCards.splice(i, 1);

    localStorage.setItem("array-cards", JSON.stringify(arrayCards)); 

    // Reloads the page index.html, to force the number of displayed cards to update
    window.location.reload();
  });
  }
}


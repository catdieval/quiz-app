import { setDarkLightMode } from "./utils/setDarkLightMode.js";

setDarkLightMode();

const container = document.querySelector(".card-container");

if (JSON.parse(localStorage.getItem("array-bookmarks")) !== null) {
  let arrayBookmarks = JSON.parse(localStorage.getItem("array-bookmarks"));
  let numberBookmarks = arrayBookmarks.length;

  if (numberBookmarks >= 1) { 

    arrayBookmarks.map((obj) => {
      const cardBookmarked = document.createElement("section");
      cardBookmarked.classList.add("question-card-box");
      cardBookmarked.innerHTML = `
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
            class="delete-bookmark"
            aria-label="Delete bookmark"
            title="Delete bookmark"
            data-js="delete-bookmark-button"
          >
            ✖
          </button>  
      `;
      container.appendChild(cardBookmarked);  
    }); 

    let arrayCards = JSON.parse(localStorage.getItem("array-cards"));

    const listOfToggleAnswerBtns = document.querySelectorAll('[data-js="answer-button"]');
    const listOfAnswerElements = document.querySelectorAll('[data-js="answer"]');
    const listOfDeleteBtns = document.querySelectorAll('[data-js="delete-bookmark-button"]');
    const listOfQuestions = document.querySelectorAll('[data-js="question"]');

    for (let i = 0; i < numberBookmarks; i++) {
      const btnAnswer = listOfToggleAnswerBtns[i];
      const answerElement = listOfAnswerElements[i];
      const btnDelete = listOfDeleteBtns[i];
      const questionElement = listOfQuestions[i];

      btnAnswer.addEventListener("click", () => {
        btnAnswer.textContent = (answerElement.hasAttribute("hidden")) ? "Hide answer": "Show answer";
        answerElement.toggleAttribute("hidden");
      });

      btnDelete.addEventListener("click", () => {
        arrayBookmarks.splice(i, 1);
            
        localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 

        const question = questionElement.textContent;
        const indexCardToUpdate = arrayCards.findIndex((object) => object.questionName === question);
            
        if (indexCardToUpdate !== -1) {
          arrayCards[indexCardToUpdate].isBookmarkedValue = false;
            
          localStorage.setItem("array-cards", JSON.stringify(arrayCards)); 
        }

        // Reloads the page bookmarks.html, to force the number of displayed bookmarks to update
        window.location.reload();
      });
    } 
  }
} 




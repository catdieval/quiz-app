//console.clear();

const container = document.querySelector(".card-container");

if (JSON.parse(localStorage.getItem("array-bookmarks")) !== null) {
  let arrayBookmarks = JSON.parse(localStorage.getItem("array-bookmarks"));
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
      `;
    container.appendChild(cardBookmarked);  
  });

  const listOfToggleAnswerBtns = document.querySelectorAll('[data-js="answer-button"]');
  const listOfAnswerElements = document.querySelectorAll('[data-js="answer"]');

  for (let i = 0; i < listOfToggleAnswerBtns.length; i++) {
    const btn = listOfToggleAnswerBtns[i];
    const answer = listOfAnswerElements[i];
    btn.addEventListener("click", () => {
      btn.textContent = (answer.hasAttribute("hidden")) ? "Hide answer": "Show answer";
      answer.toggleAttribute("hidden");
    });
  } 
} 




//console.clear();
/*localStorage.removeItem("array-bookmarks");
localStorage.removeItem("array-new-questions");
localStorage.removeItem("array-is-bookmarked"); */



if (JSON.parse(localStorage.getItem("array-new-questions")) !== null) {
    
  const container = document.querySelector(".card-container");
  let arrayNewQuestions = JSON.parse(localStorage.getItem("array-new-questions"));
  arrayNewQuestions.map((obj) => {
  const cardAdded = document.createElement("section");
  cardAdded.classList.add("question-card-box");
  cardAdded.innerHTML = `
<p class="question" data-js="question">${obj.newQuestion}</p>
        <button type="button" class="answer-button" data-js="answer-button">
          Hide answer
        </button>
        <p class="question" data-js="answer">${obj.newAnswer}</p> 
        <div class="tag-section">
           <p>Tag</p>
           <span class="category" data-js="tag">${obj.newTag}</span>
        </div>
        <button
          type="button"
          class="bookmark-button"
          aria-label="Bookmark card"
          title="Bookmark card"
          data-js="toggle-bookmark-button"
        >
          🔖
        </button>
`;
  container.appendChild(cardAdded);
  });

  const listOfToggleBookmarkBtns = document.querySelectorAll('[data-js="toggle-bookmark-button"]');
  const listOfQuestions = document.querySelectorAll('[data-js="question"]');
  const listOfAnswers = document.querySelectorAll('[data-js="answer"]');
  const listOfTags = document.querySelectorAll('[data-js="tag"]');
  
  for (let i = 0; i < listOfToggleBookmarkBtns.length; i++) {
    const btn = listOfToggleBookmarkBtns[i];
    const questionElement = listOfQuestions[i];
    const answerElement = listOfAnswers[i];
    const tagElement = listOfTags[i];

    btn.addEventListener("click", () => {
      btn.classList.toggle("selected-bookmark-button");
      btn.toggleAttribute("isBookmarked");
      
      if (btn.hasAttribute("isBookmarked")) {

        const answer = answerElement.textContent;
        const question = questionElement.textContent;
        const tag = tagElement.textContent;

        const obj = {
          bookmarkedQuestion: question, bookmarkedAnswer: answer, bookmarkedTag: tag
        };

        let arrayBookmarks;
        if (JSON.parse(localStorage.getItem("array-bookmarks")) !== null) {
          arrayBookmarks = JSON.parse(localStorage.getItem("array-bookmarks"));
          arrayBookmarks.push(obj);
        } else {
          arrayBookmarks = [obj];
        } 
  
        localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
      }
      
    });
  }

  const listOfToggleAnswerBtns = document.querySelectorAll('[data-js="answer-button"]');

  for (let i = 0; i < listOfToggleAnswerBtns.length; i++) {
  
    const btn = listOfToggleAnswerBtns[i];
    const answer = listOfAnswers[i];
    btn.addEventListener("click", () => {
      btn.textContent = (answer.hasAttribute("hidden")) ? "Hide answer": "Show answer";
      answer.toggleAttribute("hidden");
    });
  } 

} else {

  const toggleBookmarkBtn = document.querySelector(
    '[data-js="toggle-bookmark-button"]'
  );
  const answerElement = document.querySelector('[data-js="answer"]');
  const questionElement = document.querySelector('[data-js="question"]');
  const tagElement = document.querySelector('[data-js="tag"]');
 
  let arrayIsBookmarked;
  if (JSON.parse(localStorage.getItem("array-is-bookmarked")) !== null) {
    arrayIsBookmarked = JSON.parse(localStorage.getItem("array-is-bookmarked"));

    if (arrayIsBookmarked[0] === true) {
      toggleBookmarkBtn.classList.add("selected-bookmark-button");
      toggleBookmarkBtn.setAttribute("isBookmarked", "");
    } else {
      toggleBookmarkBtn.classList.remove("selected-bookmark-button");
      toggleBookmarkBtn.removeAttribute("isBookmarked");
    }
    
  } else {
    arrayIsBookmarked = [false];
    localStorage.setItem("array-is-bookmarked", JSON.stringify(arrayIsBookmarked));
  }

  toggleBookmarkBtn.addEventListener("click", () => {
    toggleBookmarkBtn.classList.toggle("selected-bookmark-button");
    toggleBookmarkBtn.toggleAttribute("isBookmarked");

    if (toggleBookmarkBtn.hasAttribute("isBookmarked")) {
      arrayIsBookmarked = [true];
      localStorage.setItem("array-is-bookmarked", JSON.stringify(arrayIsBookmarked));
      console.log("Ho");

        if (JSON.parse(localStorage.getItem("array-bookmarks")) === null) {
            console.log("boo");
            const answer = answerElement.textContent;
            const question = questionElement.textContent;
            const tag = tagElement.textContent;

            const obj = {
             bookmarkedQuestion: question, bookmarkedAnswer: answer, bookmarkedTag: tag
            };

            let arrayBookmarks = [obj];
        
            localStorage.setItem("array-bookmarks", JSON.stringify(arrayBookmarks)); 
         }
    }
    else {
        arrayIsBookmarked = [false];
        console.log("Hi")
        localStorage.setItem("array-is-bookmarked", JSON.stringify(arrayIsBookmarked));
    }  
  });

  const toggleAnswerBtn = document.querySelector('[data-js="answer-button"]');

  toggleAnswerBtn.addEventListener("click", () => {
    toggleAnswerBtn.textContent = (answerElement.hasAttribute("hidden")) ? "Hide answer": "Show answer";
    answerElement.toggleAttribute("hidden"); 
  });
}

import { setDarkLightMode } from "./utils/setDarkLightMode.js";

setDarkLightMode();

const formElement = document.querySelector('[data-js="card-form"]');
const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

/* the two textarea elements have sometimes the cursor 
not showing at the beginning but further out when
the user clicks in the textarea, so their text content
must be systematically reset at page load*/
questionInput.textContent = "";
answerInput.textContent = "";

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionInputText = questionInput.value;
  const answerInputText = answerInput.value;
  const tagInputText = "#" + tagInput.value;

  event.target.reset();

  const obj = {
    questionName: questionInputText, answerName: answerInputText, tagName: tagInputText, isBookmarkedValue: false
  };

  let arrayCards = JSON.parse(localStorage.getItem("array-cards"));
  
  const container = document.querySelector("#form-outcome-container");
  container.innerHTML = "";
  
    try {
      const indexCardAlreadyThere = arrayCards.findIndex((object) => object.questionName === obj.questionName);

      // If new card is not already in arrayCards
      if (indexCardAlreadyThere === -1) {
        const newSuccess = document.createElement("p");
        newSuccess.textContent = "Success! A new card was added to your list!"
        newSuccess.classList.add("form-outcome", "green");
        container.appendChild(newSuccess);

        arrayCards.push(obj);
  
        localStorage.setItem("array-cards", JSON.stringify(arrayCards)); 
      } else {
        // if new card is already in arrayCards
        throw new Error(`Error! There is already a card matching the question "${questionInputText}". Therefore NO card was added to your list!`);
      }

    } catch(error) {
      const newError = document.createElement("p");
      newError.textContent = error.message;
      newError.classList.add("form-outcome", "red");
      container.appendChild(newError);
    }

});

function calculateAmountLeft(jsAmountLeft, textAreaInput) {
  const amountLeft = document.querySelector(jsAmountLeft);
  const maxLength = textAreaInput.getAttribute("maxlength");
  const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
  };
  updateAmountLeft(maxLength);
  textAreaInput.addEventListener("input", () => {
    updateAmountLeft(maxLength - textAreaInput.value.length);
  });
}

calculateAmountLeft('[data-js="amountLeftQuestion"]', questionInput);
calculateAmountLeft('[data-js="amountLeftAnswer"]', answerInput);

//console.clear();

import { setDarkLightMode } from "./utils/setDarkLightMode.js";

setDarkLightMode();

const formElement = document.querySelector('[data-js="card-form"]');
const questionInput = document.querySelector("[data-js=question-input]");
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

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

  const indexCardAlreadyThere = arrayCards.findIndex((object) => object.questionName === obj.questionName);
  
  const container = document.querySelector("#form-outcome-container");
  container.innerHTML = "";
  
    const newQuestion = document.createElement("p");
    newQuestion.textContent = "New question: " + questionInputText;
    newQuestion.classList.add("form-outcome");
    container.appendChild(newQuestion);
    const newAnswer = document.createElement("p");
    newAnswer.textContent = "New answer: " + answerInputText;
    newAnswer.classList.add("form-outcome");
    container.appendChild(newAnswer);
    const newTag = document.createElement("p");
    newTag.textContent = "New tag: " + tagInputText;
    newTag.classList.add("form-outcome");
    container.appendChild(newTag);

  if (indexCardAlreadyThere === -1) {
    const newSuccess = document.createElement("p");
    newSuccess.textContent = "Success! A new card was added to your list!"
    newSuccess.classList.add("form-outcome", "green");
    container.appendChild(newSuccess);

    arrayCards.push(obj);
  
    localStorage.setItem("array-cards", JSON.stringify(arrayCards)); 

  } else {
      
    const newError = document.createElement("p");
    newError.textContent = "Error! There is already a card matching the question you provided. Therefore NO card was added to your list!";
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

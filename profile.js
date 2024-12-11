//console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggledarkBtn = document.querySelector('[data-js="toggledarkbutton"]');
const h1Element = document.querySelector('[data-js="h1"]');
const titleBoxElement= document.querySelector('[data-js="titlebox"]');
const hrElement = document.querySelector('[data-js="hr"]');

toggledarkBtn.addEventListener("click", () => {

  bodyElement.classList.toggle("darkmode");
  h1Element.classList.toggle("darkmode");
  titleBoxElement.classList.toggle("darkmode");
  hrElement.classList.toggle("darkmode");
});

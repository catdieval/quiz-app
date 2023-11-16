const bodyElement = document.querySelector('[data-js="body"]');
const toggledarkBtn = document.querySelector('[data-js="toggledarkbutton"]');

toggledarkBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("darkmode");
});

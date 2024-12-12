const bodyElement = document.querySelector('[data-js="body"]');
const toggledarkBtn = document.querySelector('[data-js="toggledarkbutton"]');
const h1Element = document.querySelector('[data-js="h1"]');
const titleBoxElement= document.querySelector('[data-js="titlebox"]');
const hrElement = document.querySelector('[data-js="hr"]');

let theme;
  if (localStorage.getItem("darkLightTheme") === null) {
    theme = "lightMode";
    localStorage.setItem("darkLightTheme", theme);
  } else {
    theme = localStorage.getItem("darkLightTheme");
  }

  if (theme === "darkMode") {
    bodyElement.classList.add("darkmode");
    h1Element.classList.add("darkmode");
    titleBoxElement.classList.add("darkmode");
    hrElement.classList.add("darkmode");
    
  } else if (theme === "lightMode") {
    bodyElement.classList.remove("darkmode");
    h1Element.classList.remove("darkmode");
    titleBoxElement.classList.remove("darkmode");
    hrElement.classList.remove("darkmode");
  }

toggledarkBtn.addEventListener("click", () => {
  bodyElement.toggleAttribute("isDark");

  if (bodyElement.hasAttribute("isDark")) {
    theme = "darkMode";
    localStorage.setItem("darkLightTheme", theme);

    bodyElement.classList.add("darkmode");
    h1Element.classList.add("darkmode");
    titleBoxElement.classList.add("darkmode");
    hrElement.classList.add("darkmode");
  } else {
    theme = "lightMode";
    localStorage.setItem("darkLightTheme", theme);

    bodyElement.classList.remove("darkmode");
    h1Element.classList.remove("darkmode");
    titleBoxElement.classList.remove("darkmode");
    hrElement.classList.remove("darkmode");
  }
});

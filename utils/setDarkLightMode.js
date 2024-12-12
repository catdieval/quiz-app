
export function setDarkLightMode() {   
  const bodyElement = document.querySelector('[data-js="body"]');
  const h1Element = document.querySelector('[data-js="h1"]');
  const titleBoxElement= document.querySelector('[data-js="titlebox"]');
  const hrElement = document.querySelector('[data-js="hr"]');
    
  let theme = localStorage.getItem("darkLightTheme");
    
  function toggleTheme() {
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
    };
   }

  return toggleTheme();
}


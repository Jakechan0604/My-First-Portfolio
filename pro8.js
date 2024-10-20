window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    modesViewOptions.classList.remove("activated");
  }
})

const modeBtn = document.querySelector("#mode-changer");
const modesViewOptions = document.querySelector(".mode-changer-buttons");

modeBtn.addEventListener("click", () => {
  modesViewOptions.classList.toggle("activated")
})

const body = document.body;
const lightModeBtn = document.querySelector("#light-mode");
const darkModeBtn = document.querySelector("#dark-mode");
const themeGetter = localStorage.getItem("currentTheme");

if (themeGetter) {
  body.classList.add("activated");
}

lightModeBtn.addEventListener("click", () => {
  body.classList.add("activated");

  if (body.classList.contains("activated")) {
    localStorage.setItem("currentTheme", "activeTheme");
  } else {
    localStorage.removeItem("currentTheme");
  }
})

darkModeBtn.addEventListener("click", () => {
  body.classList.remove("activated");

  if (body.classList.contains("activated")) {
    localStorage.setItem("currentTheme", "activeTheme");
  } else {
    localStorage.removeItem("currentTheme");
  }
})
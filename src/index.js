// Open/Close Aside/Menu
var canvas = document.getElementById("canvas");
var aside = document.getElementById("aside");
function toggle() {
  canvas.classList.toggle("change");
  aside.classList.toggle("change");
}

const navLinks = document.querySelectorAll(".nav-links a");
const divs = document.querySelectorAll("div.articleDiv");

// Linking nav element with div
// And displaying active
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const targetDiv = link.getAttribute("href").replace("#", "");
    divs.forEach((div) => {
      if (div.id === targetDiv) {
        div.classList.add("active");
      } else {
        div.classList.remove("active");
      }
    });
    // threejsAnimation(targetDiv);
    if (aside.classList.contains("change")) {
      toggle();
    }
  });
});

const pathName = window.location.hash.replace("#", "");

window.addEventListener("load", (event) => {
  if (!pathName || pathName == "") {
    document.getElementById("Home").classList.add("active");
  } else {
    document.getElementById(pathName).classList.add("active");
  }
});

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log(this);
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Dark-Mode
function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", null);
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

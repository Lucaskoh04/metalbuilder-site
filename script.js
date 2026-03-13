const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
    });
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
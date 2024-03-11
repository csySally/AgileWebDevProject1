/* Swiper */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Email Me */
const contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
  window.location.href = "mailto:23687599@student.uwa.edu.au";
});

/* Card Flip */
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* Open in a new window */
const newWindow = document.querySelectorAll(".new-window");
newWindow.forEach((window) => {
  window.addEventListener("click", () => {
    window.open(window.href);
  });
});

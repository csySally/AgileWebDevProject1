/* Email Me */
const contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
  window.location.href = "mailto:23687599@student.uwa.edu.au";
});

/*  Change active navigation */
const pageItems = document.querySelectorAll(".page-item");
pageItems.forEach((pageItem) => {
  pageItem.addEventListener("click", function () {
    pageItems.forEach((item) => {
      item.classList.remove("active");
    });
    pageItem.classList.add("active");
  });
});

/* Hover the map then show the label for WA  */
const waArea = document.querySelector("#wa-area");
const wa = document.querySelector("#wa");
waArea.addEventListener("mouseover", function () {
  wa.style.display = "block";
});
waArea.addEventListener("mouseout", function () {
  wa.style.display = "none";
});

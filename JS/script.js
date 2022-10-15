

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const image = document.querySelector("hamImg");

navToggle.addEventListener("click", function () {
    // substitute for toggle
//   console.log(links.classList);
//   console.log(links.classList.contains("random"));
//   console.log(links.classList.contains("links"));
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
  links.classList.toggle("show-links");
});


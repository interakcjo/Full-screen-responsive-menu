const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".menu__link");
const navigationLink = document.querySelector(".navigation__link");
const active = "active";

let delay = 0;

hamburger.addEventListener("click", function() {
  delay = 0;

  this.classList.toggle(active);
  navigation.classList.toggle(active);
  links.forEach(link => {
    link.classList.toggle(active);
    link.setAttribute("style", `transition-delay: ${delay}ms`);

    delay += 150;
  });

  setTimeout(function() {
    navigationLink.classList.toggle(active);
  }, 750);
});

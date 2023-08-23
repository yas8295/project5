let button = document.querySelector(".links button");
let links = document.querySelectorAll(".links a");
let image = document.querySelector(".logo img");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

function openandclose() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

close.addEventListener("click", function () {
  openandclose();
});
button.addEventListener("click", function () {
  openandclose();
});
overlay.addEventListener("click", function () {
  openandclose();
});
button.addEventListener("mouseover", function () {
  links.forEach(function (el) {
    el.style.opacity = "0.4";
  });
  image.style.opacity = "0.4";
});
button.addEventListener("mouseout", function () {
  links.forEach(function (el) {
    el.style.opacity = "1";
  });
  image.style.opacity = "1";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function () {
    links.forEach(function (el) {
      if (el === links[i]) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0.4";
      }
    });
    button.style.opacity = "0.4";
    image.style.opacity = "0.4";
  });
  links[i].addEventListener("mouseout", function () {
    image.style.opacity = "1";
    button.style.opacity = "1";
    links.forEach(function (el) {
      el.style.opacity = "1";
    });
  });
}

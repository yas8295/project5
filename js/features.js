let features = document.querySelector(".features");
let header = document.querySelector("header");
let featuresImages = document.querySelectorAll(
  ".features .features-box .image"
);
operations = document.querySelector(".operations");
let testimonials = document.querySelector(".testimonials");
let footer = document.querySelector(".footer");
console.log(operations.children);

function visible(section) {
  section.style.opacity = "1";
  section.style.translate = "0px -100px";
}
function hidden(section) {
  section.style.opacity = "0";
  section.style.translate = "0px 0px";
}

window.onscroll = function () {
  if (
    scrollY >=
    features.offsetTop - document.documentElement.clientHeight + 20
  ) {
    visible(features);
    for (let i = 0; i < featuresImages.length; i++) {
      setTimeout(function () {
        featuresImages[i].classList.remove("blur");
      }, 1000);
    }
  } else if (scrollY <= features.offsetTop) {
    hidden(features);
    for (let i = 0; i < featuresImages.length; i++) {
      featuresImages[i].classList.add("blur");
    }
  }
  if (
    scrollY >=
    features.offsetTop - document.documentElement.clientHeight + 20
  ) {
    header.style.position = "fixed";
    header.style.backgroundColor = "rgb(255 255 255 / 90%)";
  } else if (scrollY <= features.offsetTop) {
    header.style.position = "absolute";
    header.style.backgroundColor = "transparent";
  }
  // if (
  //   scrollY >=
  //   operations.offsetTop - document.documentElement.clientHeight + 20
  // ) {
  //   visible(operations);
  // } else if (
  //   scrollY <=
  //   operations.offsetTop - document.documentElement.clientHeight + 20
  // ) {
  //   hidden(operations);
  // }
  if (
    scrollY >=
    testimonials.offsetTop - document.documentElement.clientHeight + 20
  ) {
    visible(testimonials);
  } else if (
    scrollY <=
    testimonials.offsetTop - document.documentElement.clientHeight + 20
  ) {
    hidden(testimonials);
  }
  if (
    scrollY >=
    footer.offsetTop - document.documentElement.clientHeight + 20
  ) {
    footer.style.opacity = "1";
    for (let i = 0; i < footer.children.length; i++) {
      if (
        scrollY >=
        footer.children[i].offsetTop -
          document.documentElement.clientHeight +
          20
      ) {
        visible(footer.children[i]);
      } else if (
        scrollY <=
        footer.children[i].offsetTop -
          document.documentElement.clientHeight +
          20
      ) {
        hidden(footer.children[i]);
      }
    }
  } else if (
    scrollY <=
    footer.offsetTop - document.documentElement.clientHeight + 20
  ) {
    footer.style.opacity = "0";
  }
  if (
    scrollY >=
    operations.offsetTop - document.documentElement.clientHeight + 20
  ) {
    operations.style.opacity = "1";
    for (let i = 0; i < operations.children.length; i++) {
      if (
        scrollY >=
        operations.children[i].offsetTop -
          document.documentElement.clientHeight +
          20
      ) {
        visible(operations.children[i]);
      } else if (
        scrollY <=
        operations.children[i].offsetTop -
          document.documentElement.clientHeight +
          20
      ) {
        hidden(operations.children[i]);
      }
    }
  } else if (
    scrollY <=
    operations.offsetTop - document.documentElement.clientHeight + 20
  ) {
    operations.style.opacity = "0";
  }
};

for (let i = 0; i < footer.children.length; i++) {
  footer.children[i].classList.add("moving");
}
for (let i = 0; i < operations.children.length; i++) {
  operations.children[i].classList.add("moving");
}

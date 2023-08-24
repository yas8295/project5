let testBox = document.querySelector(".testimonials-content .testimonials-box");
let testBullet = document.querySelectorAll(".testimonials-content ul li");
let drag = document.querySelector(".drag");
let btnRight = document.querySelector(".testimonials-content .right");
let btnLeft = document.querySelector(".testimonials-content .left");

let translate = 0;

btnRight.onclick = function () {
  remove();
  if (translate === -200) {
    translate = 0;
    drag.style.translate = `${translate}%`;
  } else {
    translate -= 100;
    drag.style.translate = `${translate}%`;
  }
  for (let i = 0; i < testBullet.length; i++) {
    if (testBullet[i].dataset.move == translate) {
      testBullet[i].style.backgroundColor = "grey";
    }
  }
};
btnLeft.onclick = function () {
  remove();
  if (translate === 0) {
    translate = -200;
    drag.style.translate = `${translate}%`;
  } else {
    translate += 100;
    drag.style.translate = `${translate}%`;
  }
  for (let i = 0; i < testBullet.length; i++) {
    if (testBullet[i].dataset.move == translate) {
      testBullet[i].style.backgroundColor = "grey";
    }
  }
};

function remove() {
  for (let i = 0; i < testBullet.length; i++) {
    testBullet[i].style.backgroundColor = "rgb(190, 190, 190)";
  }
}

testBullet.forEach(function (el) {
  el.onclick = function () {
    remove();
    drag.style.translate = `${el.dataset.move}%`;
    translate = Number(el.dataset.move);
    el.style.backgroundColor = "grey";
  };
});


operationButtons = document.querySelectorAll(".operations-content button");
operationBox = document.querySelectorAll(".operations-content .operations-box");

operationButtons.forEach(function (button) {
  button.onclick = function () {
    for (let i = 0; i < operationButtons.length; i++) {
      if (operationButtons[i].classList.contains("button-active")) {
        operationButtons[i].classList.remove("button-active");
      }
      button.classList.add("button-active");
    }
    for (let i = 0; i < operationBox.length; i++) {
      if (!operationBox[i].classList.contains("hidden")) {
        operationBox[i].classList.add("hidden");
      }
      if (operationBox[i].dataset.index === button.dataset.index) {
        operationBox[i].classList.remove("hidden");
      }
    }
  };
});

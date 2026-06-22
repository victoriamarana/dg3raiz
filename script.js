const buttons = document.querySelectorAll("[data-color]");
const doorColor = document.getElementById("doorColor");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    doorColor.style.backgroundColor = button.dataset.color;
  });
});
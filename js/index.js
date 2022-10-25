import "../css/style.css";
import JSConfetti from "../node_modules/js-confetti/dist/es/index.js";

const init = () => {
  const $form = document.querySelector("form");
  const jsConfetti = new JSConfetti();

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    jsConfetti.addConfetti();
  });
};

init();

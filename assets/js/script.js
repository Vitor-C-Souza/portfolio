import { Base } from "./base.js";
import { Validation } from "./validation.js";

const validation = new Validation();
const base = new Base();

const formulario = document.querySelector("#formulario");
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    validation.validationForm();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  base.header();
  base.footer();
  base.transition();
});

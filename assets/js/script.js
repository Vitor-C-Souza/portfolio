import { Renderizar } from "./base.js";
import { Validation } from "./validation.js";
import { Api } from "./apiService.js";
import { Animation } from "./animacoes.js";
import { Interacao } from "./interacao.js";

const api = new Api();
const validation = new Validation();
const renderizar = new Renderizar();
const animation = new Animation();
const interacao = new Interacao();

const formulario = document.querySelector("#formulario");
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    validation.validationForm();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  api.fetchData(1);
  renderizar.header();
  renderizar.footer();
  renderizar.home();
  renderizar.projetos();
  renderizar.contato();
  interacao.backToTop();
  animation.transition();
  animation.scrollPage();
});

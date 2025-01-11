import { Api } from "./apiService.js";

const api = new Api();

document.addEventListener("DOMContentLoaded", () => {
  api.fetchData();
});

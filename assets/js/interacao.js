export class Interacao {
  backToTop() {
    const backToTopButton = document.getElementById("backToTop");
    const homeSection = document.getElementById("home");
    const headerSection = document.getElementById("cabecalho");

    function toggleButtonVisibility() {
      const homePosition = homeSection.getBoundingClientRect();
      const isHomeInView =
        homePosition.top <= window.innerHeight && homePosition.bottom >= 0;

      if (isHomeInView) {
        backToTopButton.classList.remove("visible");
        backToTopButton.classList.add("hidden");
      } else {
        backToTopButton.classList.remove("hidden");
        backToTopButton.classList.add("visible");
      }
    }

    backToTopButton.addEventListener("click", () => {
      headerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    window.addEventListener("scroll", toggleButtonVisibility);
  }
}

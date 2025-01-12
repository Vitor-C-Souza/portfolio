export class Animation {
  scrollPage() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          targetElement.classList.add("highlight");

          setTimeout(() => {
            targetElement.classList.remove("highlight");
          }, 2000);
        }
      });
    });
  }

  transition() {
    const texts = [
      "Vítor Cavalcante Souza",
      "Desenvolvedor Backend",
      "Desenvolvedor Frontend",
      "Desenvolvedor Fullstack",
    ];
    const textElement = document.getElementById("animatedText");
    let currentTextIndex = 0;
    let isDeleting = false;
    let charIndex = 0;

    function typeEffect() {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
      } else {
        charIndex++;
        if (charIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, 3000);
          textElement.textContent = currentText;
          return;
        }
      }

      const visibleText = currentText.substring(0, charIndex);
      textElement.textContent = visibleText;

      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }
}

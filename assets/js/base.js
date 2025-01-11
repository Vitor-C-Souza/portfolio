const header = document.getElementById("cabecalho");
const footer = document.getElementById("rodape");

export class Base {
  header() {
    if (header) {
      header.innerHTML = `<div id="header_content">
          <div id="titulo">
            <h1 id="animatedText"></h1>
          </div>

          <div id="menu">
            <nav>
              <ul id="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="projetos.html">Projetos</a></li>
                <li><a href="contato.html">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>`;
    }
  }

  footer() {
    if (footer) {
      footer.innerHTML = `<section id="redes_sociais">
        <a
          href="https://www.linkedin.com/in/vitorcavalcantesouza/"
          target="_blank"
        >
          <img src="assets/img/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Vitor-C-Souza" target="_blank">
          <img src="assets/img/github.svg" alt="Github" />
        </a>
        <a href="https://www.instagram.com/vitorcavalcante97/" target="_blank">
          <img src="assets/img/instagram.svg" alt="Instagram" />
        </a>
      </section>

      <h3>© 2025 Vítor Cavalcante Souza. Todos os direitos reservados.</h3>`;
    }
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
          currentTextIndex = (currentTextIndex + 1) % texts.length; // Vai para o próximo texto
        }
      } else {
        charIndex++;
        if (charIndex === currentText.length) {
          // Aguarda 3 segundos antes de começar a apagar
          setTimeout(() => {
            isDeleting = true;
            typeEffect(); // Continua o efeito após o delay
          }, 3000);
          textElement.textContent = currentText; // Garante que o texto completo seja exibido
          return;
        }
      }

      const visibleText = currentText.substring(0, charIndex);
      textElement.textContent = visibleText;

      const typingSpeed = isDeleting ? 50 : 100; // Velocidade ao apagar/digitar
      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }
}

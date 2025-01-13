const header = document.getElementById("cabecalho");
const footer = document.getElementById("rodape");
const home = document.getElementById("home");
const contato = document.getElementById("contato");
const projeto = document.getElementById("projetos");
const curriculo = document.getElementById("curriculo");

export class Renderizar {
  header() {
    if (header) {
      header.innerHTML = `<div id="header_content">
          <div id="titulo">
            <h1 id="animatedText"></h1>
          </div>

          <div id="menu">
            <nav>
              <ul id="menu">
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#curriculo">Curriculo</a></li>
                <li><a href="#contato">Contato</a></li>
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

  home() {
    if (home) {
      home.innerHTML = `<section id="about" class="main-container">
        <h1>Sobre Mim</h1>

        <div id="conteudo">
          <img
            src="./assets/img/profile.jpg"
            alt="Foto do criador desse conteudo"
          />

          <article id="sobre_texto">
            <p>
              Desenvolvedor Back-end apaixonado por transformar ideias em
              soluções eficientes e escaláveis. Com forte experiência em Java,
              Spring Boot e Kotlin, construo APIs RESTful robustas e seguras,
              integrando as melhores práticas em testes com JUnit e Mockito.
              Tenho prática em projetos que utilizam AWS para serviços em nuvem,
              aprimorando a entrega e o desempenho das aplicações.
            </p>
            <p>
              Meus projetos pessoais, como Adopet-API, Controle de Orçamento
              Familiar API e Star Wars API, destacam meu comprometimento com
              inovação e entrega de valor. Valorizo a colaboração em equipe e
              busco sempre implementar soluções que melhorem a experiência dos
              usuários.
            </p>
            <p>
              Com um sólido conhecimento em React, TypeScript e SCSS, também
              tenho uma visão full stack, possibilitando um entendimento
              completo do ciclo de desenvolvimento. Movido por desafios, amo
              aprender novas tecnologias e evoluir minhas habilidades para
              contribuir em projetos de impacto.
            </p>
            <p>
              Sinta-se a vontade para entrar em contato através do meu e-mail.
            </p>
            <p>
              e-mail: vitor_souza97@hotmail.com <br />
              Portfólio GitHub: https://github.com/Vitor-C-Souza
            </p>
          </article>
        </div>
      </section>
      <section id="video" class="main-container">
        <h2>Meu vídeo favorito:</h2>

        <div class="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VgDgWzBL7s4?si=JSPNJYePHwcwb1JD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>`;
    }
  }

  contato() {
    contato.innerHTML = `<h1>Contato</h1>
        <section id="contact">
          <form action="#" method="submit" id="formulario" class="main-container">
            <div class="style-form-input full">
              <label for="nome">Nome: </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
              />
              <span id="txtNome"></span>
            </div>

            <div class="align-email-subject">
              <div class="style-form-input">
                <label for="email">Email: </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  required
                />
                <span id="txtEmail"></span>
              </div>

              <div class="style-form-input right">
                <label for="subject">Assunto: </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Digite o assunto"
                  required
                />
                <span id="txtSubject"></span>
              </div>
            </div>

            <div class="style-form-input full">
              <label for="message">Mensagem: </label>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-submit">Enviar</button>
          </form>

          <article id="mapa" class="main-container">
            <div class="endereco">
              <p>Rua Manoel de Oliveira Ramos, 11</p>
              <p>Cubatão - SP</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.797140006003!2d-46.43216042380222!3d-23.932236478546677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1a3296e452c1%3A0xa9906bac4883161e!2sR.%20Manuel%20de%20Oliveira%20Ramos%20-%20Jardim%20Caraguat%C3%A1%2C%20Cubat%C3%A3o%20-%20SP%2C%2011535-050!5e0!3m2!1spt-BR!2sbr!4v1736254984131!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
        </section>`;
  }

  projetos() {
    projeto.innerHTML = `
                          <h1>Projetos</h1>
                          <div id="repos-list"></div>
                        `;
  }

  curriculo() {
    curriculo.innerHTML = `
    <h1>Currículo</h1>
        <section class="curriculo__cabecalho main-container">
          <center><h2>VÍTOR CAVALCANTE SOUZA</h2></center>
          <p>Cubatão – SP</p>
          <p>Telefone: (013) 99616.1719</p>
          <p>E-mail: vitor_souza97@hotmail.com</p>
          <p>Github: https://github.com/Vitor-C-Souza</p>
          <p>Linkedin: https://www.linkedin.com/in/vitorcavalcantesouza/</p>
        </section>
        <section class="resumo main-container">
          <h3>RESUMO PROFISSIONAL</h3>
          <p>
            Sou desenvolvedor Backend formado em Ciências da Computação pela
            UNIP, capaz de criar sistemas otimizados e com códigos fáceis de
            entender e soluções eficientes, e tenho um sólido conhecimento em
            Java com Spring Boot na área de desenvolvimento de sistemas, mas
            também já atuei em projetos relacionados à Rest API, Autenticação,
            POO e Banco de Dados. Possuo um perfil comunicativo e proativo que
            me permite encontrar soluções em equipe em qualquer projeto. Como
            desenvolvedor backend tenho habilidade em lidar com sistemas e
            infraestrutura e isso me permite ser mais analítico e automatizar
            processos.
          </p>
        </section>
        <section class="habilidades_tecnicas main-container">
          <h3>Habilidades Técnicas:</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>API Restful</li>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Kubernetes</li>
            <li>Nginx</li>
            <li>Junit</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
        </section>
        <section class="educacao main-container">
          <h3>Educação</h3>
          <ul>
            <li>
              <span> Bootcamp - Desenvolvedor Java Full Stack </span>| Data de
              conclusão: 01/2025
              <br />
              Instituição: Generation Brasil.
            </li>
            <li>
              <span>Graduação - Ciências da computação</span>| Data de
              conclusão: 12/2022 <br />
              Instituição: UNIP
            </li>
          </ul>
        </section>
        <section class="experiencias__profissionais main-container">
          <h3>Experiências Profissionais</h3>
          <ul>
            <li>
              <span>Santos Port Authority - Estagiário de TI</span>
              | 03/2022 – 12/2022 <br />
              <br />
              <h4>Principais Responsabilidades:</h4>
              <ul>
                <li>
                  Suporte técnico aos funcionários, atendendo diversos usuários
                  do Porto de Santos.
                </li>
                <li>
                  Participação na gerência de infraestrutura de dados,
                  auxiliando na manutenção e controle do ambiente de TI.
                </li>
                <li>
                  Colaboração com equipes para resolução de problemas e
                  melhorias contínuas.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section class="idiomas main-container">
          <h3>Idiomas</h3>
          <ul>
            <li>Inglês - Avançado</li>
          </ul>
        </section>
        <section class="cursos main-container">
          <h3>Cursos Extra Curriculares & Certificações</h3>
          <table>
            <tr>
              <td>Java Web: crie aplicações usando Spring Boo</td>
              <td>Alura</td>
              <td>40 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Java e Spring Boot</td>
              <td>Alura</td>
              <td>34 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Integração Contínua e Entrega Contínua</td>
              <td>Alura</td>
              <td>48 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Boas Práticas em Java</td>
              <td>Alura</td>
              <td>31 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>
                Aprofunde em Java com arquitetura de Microsserviços, Spring e
                RabbitMQ
              </td>
              <td>Alura</td>
              <td>40 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Mensageria com Apache Kafka</td>
              <td>Alura</td>
              <td>43 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Aprenda a programar em Java com Orientação a Objetos</td>
              <td>Alura</td>
              <td>39 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>
                AWS: Observabilidade com CloudWatch e Containers com ECS e EKS
              </td>
              <td>Alura</td>
              <td>17 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>
                Começando na AWS com Lightsail, EC2, S3, VPC, RDS e DynamoDB
              </td>
              <td>Alura</td>
              <td>47 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Arquitetura Java: do design de código à infraestrutura</td>
              <td>Alura</td>
              <td>27 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Consultas com MySQL</td>
              <td>Alura</td>
              <td>42 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Infraestrutura como código</td>
              <td>Alura</td>
              <td>42 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Angular: crie aplicações web ágeis</td>
              <td>Alura</td>
              <td>85 Horas</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>Começando em DevOps</td>
              <td>Alura</td>
              <td>54 Horas</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>Melhore sua experiência de desenvolvimento com TypeScript</td>
              <td>Alura</td>
              <td>31 Horas</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>Explore React com JavaScript</td>
              <td>Alura</td>
              <td>65 Horas</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>CSS: aprofunde em estilos</td>
              <td>Alura</td>
              <td>36 Horas</td>
              <td>2023</td>
            </tr>
          </table>
        </section>`;
  }
}

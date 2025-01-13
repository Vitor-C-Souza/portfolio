const url = "https://api.github.com/users/vitor-c-souza/repos?per_page=100";

export class Api {
  fetchData() {
    axios
      .get(url)
      .then((response) => {
        this.displayData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer requisição:", error);
      });
  }

  displayData(repos) {
    const reposList = document.getElementById("repos-list");

    if (!reposList) return;

    reposList.innerHTML = "";
    let delay = 0;
    repos.forEach((repo) => {
      if (repo.description != null) {
        setTimeout(() => {
          const repoItem = document.createElement("div");
          const card = document.createElement("div");
          const link = document.createElement("a");
          repoItem.classList.add("repo-item", "main-container");

          link.href = repo.html_url;
          link.target = "_blank";
          card.innerHTML = `
          <div class="description">
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
          </div>
        `;
          repoItem.appendChild(card);
          link.appendChild(repoItem);
          reposList.appendChild(link);
          repoItem.classList.add("visible");
        }, delay);

        delay += 150;
      }
    });
  }
}

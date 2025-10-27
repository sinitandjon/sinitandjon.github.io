// You can add your custom JavaScript here if needed.
// For example, dynamic content loading, animations, etc.

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reflexions-list");

  // Liste des fichiers à charger (tu ajoutes ici tes fichiers à mesure)
  const files = [
    "reflexions/2025-10-27-premiere-reflexion.html",
    "reflexions/2025-11-05-idee-sur-lai.html"
  ];

  files.forEach(file => {
    fetch(file)
      .then(response => response.text())
      .then(content => {
        const article = document.createElement("div");
        article.classList.add("reflexion-block", "mb-5");
        article.innerHTML = content;
        container.appendChild(article);
      })
      .catch(err => console.error("Erreur de chargement :", file, err));
    });
});


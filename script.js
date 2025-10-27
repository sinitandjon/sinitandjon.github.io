// script.js
// Chargement dynamique des réflexions

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reflexions-list");

  if (!container) {
    console.warn("Aucun conteneur #reflexions-list trouvé sur cette page.");
    return;
  }

  // Liste des fichiers à charger
  const files = [
    "reflexions/2025-10-27-premiere-reflexion.html",
  ];

  files.forEach(file => {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Fichier introuvable: ${file}`);
        return response.text();
      })
      .then(content => {
        const article = document.createElement("div");
        article.classList.add("reflexion-block", "mb-5");
        article.innerHTML = content;
        container.appendChild(article);
      })
      .catch(err => {
        console.error("Erreur de chargement :", err);
      });
  });
});

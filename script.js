const content = {
  es: {
    aboutTitle: "Sobre Starfame",
    aboutText: "Starfame Entertainment es una casa productora creativa enfocada en el desarrollo de proyectos culturales y audiovisuales con visión a futuro. Nace como un espacio para impulsar voces auténticas, ideas originales y talento emergente.",
    projectsTitle: "Proyectos",
    projects: [
      "Pedillos 3.0 — Podcast",
      "Proyecto musical — Próximamente",
      "Artistas emergentes — Próximamente",
      "Serie GL / BL — Futuro"
    ],
    contactTitle: "Contacto",
    contactText: "Correo: starfame.ent@gmail.com"
  },
  en: {
    aboutTitle: "About Starfame",
    aboutText: "Starfame Entertainment is a creative production house focused on developing cultural and audiovisual projects with a future-driven vision. It was created to amplify authentic voices, original ideas, and emerging talent.",
    projectsTitle: "Projects",
    projects: [
      "Pedillos 3.0 — Podcast",
      "Music Project — Coming Soon",
      "Emerging Artists — Coming Soon",
      "GL / BL Series — Future Project"
    ],
    contactTitle: "Contact",
    contactText: "Email: starfame.ent@gmail.com"
  }
};

function setLanguage(lang) {
  document.getElementById("about-title").innerText = content[lang].aboutTitle;
  document.getElementById("about-text").innerText = content[lang].aboutText;
  document.getElementById("projects-title").innerText = content[lang].projectsTitle;
  document.getElementById("contact-title").innerText = content[lang].contactTitle;
  document.getElementById("contact-text").innerText = content[lang].contactText;

  const list = document.getElementById("projects-list");
  list.innerHTML = "";
  content[lang].projects.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// Idioma por defecto
setLanguage("es");

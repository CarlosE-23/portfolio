"use-strict";

import { pushGreenMessage } from "../components/Message.js";
import { classToggle } from "../utilities/classToggle.js";
import { classes } from "./classes.js";
import { $elements } from "./elements.js";

const d = document;

// Funciones que manipula el sidebart

function openMenu() {
  $elements.btnMenu.classList.remove("open");
  $elements.btnMenu.classList.add("close");
  $elements.sidebar.classList.add("open");
}

function closeMenu() {
  $elements.btnMenu.classList.add("open");
  $elements.btnMenu.classList.remove("close");
  $elements.sidebar.classList.remove("open");
}

function btnMenu() {
  const media = matchMedia("max-width:600px");

  const handleMedia = (e) => {
    if (!e.matches) closeMenu();
  };

  media.addEventListener("change", handleMedia);
  handleMedia(media);

  $elements.sidebar.addEventListener("click", closeMenu);
  $elements.btnMenu.addEventListener("click", (e) => {
    if (e.currentTarget.matches(".open")) openMenu();
    else if (e.currentTarget.matches(".close")) closeMenu();
  });
}

// Fundion de area de contactos

function openMail() {
  const handleMail = () =>
    window.open(
      "mailto:carlosguanipa23@gmail.com?subject=Hola%20Carlos%20¡Hablemos!"
    );
  $elements.openMailElements.forEach((el) =>
    el.addEventListener("click", handleMail)
  );
}

function copyMail() {
  const handleCopy = () => {
    navigator.clipboard.writeText("carlosguanipa23@gmail.com");
    pushGreenMessage("Copiado en el portapapeles");
  };
  $elements.copyMailElements.forEach((el) =>
    el.addEventListener("click", handleCopy)
  );
}

function handleMail() {
  openMail();
  copyMail();
}

// Funcion que inicializa las funciones de interaccion
function interations() {
  btnMenu();
  handleMail();
  classToggle($elements.acordeonElements, classes.active); // Activa el sistema de acordeón
}

export { interations };

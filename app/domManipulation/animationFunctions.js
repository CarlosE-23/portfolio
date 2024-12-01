"use strict";

import { classes } from "./classes.js";
import { $elements } from "./elements.js";

// Función para ocultar el contenido principal
const hideMain = (btn) => {
  btn.addEventListener("click", () => {
    // Remueve la clase para mostrar los ítems
    $elements.itemsToDisplay.forEach((item) =>
      item.classList.remove(classes.showItem)
    );
    // Añade la clase para ocultar los ítems
    $elements.itemsToDisplay.forEach((item) =>
      item.classList.add(classes.hiddenItem)
    );
    // Después de un retraso, oculta la sección "About Me" y el contenedor principal
    setTimeout(() => {
      $elements.banner.classList.remove(classes.hideBanner);
      $elements.mainConteiner.classList.remove(classes.showMain);
    }, 1000);
  });
};

// Función para mostrar el contenido principal
const showMain = (btn) => {
  btn.addEventListener("click", () => {
    // Oculta Banner
    $elements.banner.classList.add(classes.hideBanner);
    // Muestra el contenedor principal
    $elements.mainConteiner.classList.add(classes.showMain);
    // Después de un retraso, muestra los ítems
    setTimeout(() => {
      $elements.itemsToDisplay.forEach((item) =>
        item.classList.add(classes.showItem)
      );
      $elements.itemsToDisplay.forEach((item) =>
        item.classList.remove(classes.hiddenItem)
      );
    }, 1000);
  });
};

// Inicializa las funciones de animación
function animactionFunctions() {
  showMain($elements.btnShowMain);
  hideMain($elements.titleBtn);
}

// Función que establece opacidad 0 en los elementos
function nullOpacity(elements) {
  elements.forEach((el) => el.classList.add(classes.nullOpaity));
}

export { animactionFunctions, nullOpacity };

"use strict";

import { $elements } from "./app/domManipulation/elements.js";
import {
  animactionFunctions,
  nullOpacity,
} from "./app/domManipulation/animationFunctions.js";
import LoadContentDynamically from "./app/domManipulation/LoadContentDynamically.js";
import { interations } from "./app/domManipulation/domInteraction.js";

const d = document,
  w = window;

// Al cargar el contenido del documento
w.addEventListener("DOMContentLoaded", (e) => {
  LoadContentDynamically(); //Carga contenido dinamico
  nullOpacity($elements.itemsToDisplay); // Establece opacidad 0 en los ítems
  animactionFunctions(); // Inicializa las funciones de animación
  interations(); //Carcar funciones de inteccion
});

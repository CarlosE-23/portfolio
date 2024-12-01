"use strict";

import { classes } from "./app/domManipulation/classes.js";
import { $elements } from "./app/domManipulation/elements.js";
import {
  animactionFunctions,
  nullOpacity,
} from "./app/domManipulation/animationFunctions.js";
import { classToggle } from "./app/utilities/classToggle.js";
import LoadContentDynamically from "./app/domManipulation/LoadContentDynamically.js";

const d = document,
  w = window;

// Al cargar el contenido del documento
w.addEventListener("DOMContentLoaded", (e) => {
  LoadContentDynamically(); //Carga contenido dinamico
  nullOpacity($elements.itemsToDisplay); // Establece opacidad 0 en los ítems
  animactionFunctions(); // Inicializa las funciones de animación
  classToggle($elements.acordeonElements, classes.active); // Activa el sistema de acordeón
});

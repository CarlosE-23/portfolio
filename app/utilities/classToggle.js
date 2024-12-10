//Funcion de alternacion de clases de acordeon

export function classToggle(elements, classes) {
  const active = (e) => {
    e.target.matches("p") ||
      e.target.matches("span") ||
      e.currentTarget.classList.toggle(classes);
  };
  elements.forEach((el) => el.addEventListener("click", active));
}

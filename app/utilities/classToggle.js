//Funcion de alternacion de clases

export function classToggle(elements, classes) {
  const active = (e) => {
    e.currentTarget.classList.toggle(classes);
  };
  elements.forEach((el) => el.addEventListener("click", active));
}

//Funciones de carga dinamica
import { $elements } from "./elements.js";
import { projects } from "../data/projects.js";
import ProjectCardContainer from "../components/ProjectCardContainer.js";

const d = document;

//Projects

const $projectsFragment = d.createDocumentFragment();
projects.forEach((el) =>
  $projectsFragment.appendChild(ProjectCardContainer(el))
); //Crear Fragmento con elementos Projects

console.log($projectsFragment);

const loadProjects = () =>
  $elements.projectsContainer.appendChild($projectsFragment); //Funcion que carga los projectos al DOM

//funcion que carga el contenido
export default function LoadContentDynamically() {
  loadProjects();
}

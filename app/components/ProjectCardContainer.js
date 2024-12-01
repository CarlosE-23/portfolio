import { $elements } from "../domManipulation/elements.js";
import getImageByName from "../utilities/getImageByName.js";

const d = document;

export default function ProjectCardContainer(project) {
  const { name, description, imgName, githubURL, technologies } = project;

  const $clone = d.importNode($elements.projectCardTemplate.content, true);

  const $img = $clone.querySelector(".img-container img");
  $img.src = `./app/assets/projects-img/${imgName}`;
  $img.alt = `${name.replaceAll(" ", "-")}-img`;

  $clone.querySelector(".name").textContent = name;
  $clone.querySelector(".description").textContent = description;

  const $technologiesImgFragment = d.createDocumentFragment();

  technologies.forEach((el) => {
    const $img = d.createElement("img");
    $img.src = `./app/assets/icons/${getImageByName(el)}`;
    $img.alt = el;
    $img.title = el;
    $img.classList.add("technologies-icon");
    $technologiesImgFragment.appendChild($img);
  });

  $clone.querySelector(".technologies").appendChild($technologiesImgFragment);
  $clone.querySelector(".github").href = githubURL;

  return $clone;
}

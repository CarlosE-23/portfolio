const technologies = [
  {
    name: "CSS",
    imgName: "icon-css.svg",
  },
  {
    name: "HTML",
    imgName: "icon-html.svg",
  },
  {
    name: "Git",
    imgName: "icon-git.svg",
  },
  {
    name: "React",
    imgName: "react-2.svg",
  },
  {
    name: "JavaScript",
    imgName: "icon-javascript.svg",
  },
  {
    name: "TypeScript",
    imgName: "icons8-typeScript.svg",
  },
  {
    name: "VSCode",
    imgName: "icon8-visual-studio-code.svg",
  },
  {
    name: "GitHub",
    imgName: "icon8-github.svg",
  },
];

export default function getImageByName(name) {
  return technologies.find((el) => el.name === name).imgName;
}

"use strict";

const d = document,
  root = d.getElementById("root"),
  titleBtn = d.getElementById("title"),
  banner = d.querySelector(".banner-container"),
  btnShowMain = d.getElementById("start-btn"),
  mainConteiner = d.querySelector(".main-container"),
  itemsToDisplay = d.querySelectorAll("[data-show]"),
  acordeonElements = d.querySelectorAll("[data-acordeon] .acordeon"),
  projectCardTemplate = d.getElementById("project-card"),
  projectsContainer = d.querySelector(".projects-container");

export const $elements = {
  root,
  banner,
  btnShowMain,
  titleBtn,
  mainConteiner,
  itemsToDisplay,
  acordeonElements,
  projectsContainer,
  projectCardTemplate,
};

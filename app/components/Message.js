// Creacion de mensajes

import { $elements } from "../domManipulation/elements.js";

const d = document;

function createMessage(message) {
  const $copy = d.importNode($elements.messageTemplate.content, true);
  $copy.querySelector(".message-text").textContent = message;
  $copy
    .querySelector(".message-close")
    .addEventListener("click", deleteMessage);
  return $copy.firstElementChild;
}

function deleteMessage(e) {
  e.currentTarget.parentNode.remove();
}

function pushGreenMessage(message) {
  const $message = createMessage(message);
  $message.classList.add("green");
  $elements.messagesContainer.insertAdjacentElement("beforeend", $message);
  $elements.messagesContainer.classList.add("new-message");
  setTimeout(() => {
    $elements.messagesContainer.classList.remove("new-message");
    setTimeout(() => $message.remove(), 1500);
  }, 300);
}

function pushRedMessage(message) {
  const $message = createMessage(message);
  $message.classList.add("red");
  $elements.messagesContainer.insertAdjacentElement("beforeend", $message);
  $elements.messagesContainer.classList.add("new-message");
  setTimeout(() => {
    $elements.messagesContainer.classList.remove("new-message");
    setTimeout(() => $message.remove(), 1500);
  }, 300);
}

export { pushGreenMessage, pushRedMessage };

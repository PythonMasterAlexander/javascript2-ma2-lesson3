import { ulHtmlContainer } from "../constants/constants.js";

export const createListFromInput = function(listItems) {
  ulHtmlContainer.innerHTML = "";

  for(let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i].item;
    const listItemId = listItems[i].id;

    ulHtmlContainer.innerHTML += `
      <li>
        <span>${listItem}</span>
        <span><input type="checkbox" data-id="${listItemId}"></span>
      </li>
    `;
  }
};
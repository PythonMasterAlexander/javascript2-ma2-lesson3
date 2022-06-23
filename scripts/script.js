import { inputHtmlButton, inputHtmlField } from "./constants/constants.js";
import { createListFromInput } from "./components/createListFromInput.js";

let listOfInputValues = [];
const minLengthInputValue = 3;

const generateListItem = function() {
  const inputValue = inputHtmlField.value.trim();

  if(inputValue.length >= minLengthInputValue) {
    const addPropertyToInputValue = {id: Date.now(), item: inputValue};

    inputHtmlField.value = "";
    inputHtmlField.focus();

    listOfInputValues.push(addPropertyToInputValue);
  }

  createListFromInput(listOfInputValues);
};

inputHtmlButton.addEventListener('click', generateListItem);
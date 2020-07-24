/**
 * Calculate the value of two numbers. 
 *
 * @param {string|number} valueX
 * @param {string|number} action
 * @param {string|number} valueY
 * @return {number}
 */
const calculate = (valueX, action, valueY) => {
  const x = parseFloat(valueX);
  const y = parseFloat(valueY);
  let result = null;

  switch (action) {
    case "add":
      result = x + y;
      break;
    case "subtract":
      result = x - y;
      break;
    case "multiply":
      result = x * y;
      break;
    case "divide":
      result = x / y;
      break;}


  return result;
};

/**
    * Invert a number.
    *
    * @param {string|number} value
    * @return {number}
    */
const invert = value => {
  const x = parseFloat(value);
  return -x;
};

const calculator = document.querySelector(".js-calculator");
const calculatorDisplay = calculator.querySelector(".js-calculator__value");
const calculatorKeys = calculator.querySelector(".js-calculator__body");
const calculatorClearAll = calculator.querySelector(".js-calculator__clearall");
const calculatorClear = calculator.querySelector(".js-calculator__clear");
let valueX = null;
let operator = null;
let ValueZ = null;
let previousKeyType = null;
let previousKeyValue = null;

calculatorKeys.addEventListener("click", e => {
  // Ignore the event if the target node, or the target node's direct parent (to
  // allow for <abbr>), is a not a buttton.
  if (!e.target.matches("button") && !e.target.parentNode.matches("button")) {return;}

  // Asign the target node, or the target node's direct parent (to allow for
  // <abbr>).
  const key = e.target.parentNode.matches("button") ? e.target.parentNode : e.target;

  const keyType = key.dataset.type ? key.dataset.type : null;
  const keyAction = key.dataset.action ? key.dataset.action : null;
  const keyValue = key.dataset.value ? key.dataset.value : null;
  const displayValue = calculatorDisplay.textContent;

  Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-selected"));

  if (keyAction === "clearAll" || keyAction === "clear") {
    if (keyAction === "clearAll") {
      valueX = null;
      operator = null;
      valueZ = null;
      previousKeyType = null;
      previousKeyValue = null;
    } else {
      calculatorClearAll.hidden = false;
      calculatorClear.hidden = true;
    }

    calculatorDisplay.textContent = "0";
  } else {
    calculatorClearAll.hidden = true;
    calculatorClear.hidden = false;
  }

  if (keyAction === "invert") {
    calculatorDisplay.textContent = invert(displayValue);
  }

  if (keyAction === "percentage") {
  }

  if (keyType === "operator") {
    key.classList.add("is-selected");

    if (valueX !== null && operator && previousKeyType !== "operator" && previousKeyType !== "function" && previousKeyValue !== "calculate") {
      const calculatedValue = calculate(valueX, operator, displayValue);
      calculatorDisplay.textContent = calculatedValue;
      valueX = calculatedValue;
    } else {
      valueX = displayValue;
    }

    operator = keyAction;
  }

  if (keyAction === "decimal") {
    if (!displayValue.includes(".")) {
      calculatorDisplay.textContent = displayValue + ".";
    } else if (previousKeyType === "operator" || previousKeyType === "function" && previousKeyValue === "calculate") {
      calculatorDisplay.textContent = "0.";
    }
  }

  if (keyAction === "calculate") {
    let valueY = displayValue;

    if (valueX !== null) {
      if (previousKeyType === "function" && previousKeyValue === "calculate") {
        valueX = valueY;
        valueY = valueZ;
      }

      calculatorDisplay.textContent = calculate(valueX, operator, valueY);
    }

    valueZ = valueY;
  }

  if (!keyAction) {
    if (displayValue === "0" || previousKeyType === "operator" || previousKeyType === "function" && previousKeyValue === "calculate") {
      calculatorDisplay.textContent = keyValue;
    } else {
      calculatorDisplay.textContent = displayValue + keyValue;
    }
  }

  previousKeyType = keyType;
  previousKeyValue = keyAction ? keyAction : keyValue;
});
document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.querySelector(".text-input");
  const buttonLog = document.querySelector(".log-input");
  const clearButton = document.querySelector(".clear-button");
  const blockButton = document.querySelector(".block-button");
  const hideButton = document.querySelector(".hide-button");
  const randomColor = document.querySelector(".random-color");
  const createButton = document.querySelector(".create-button");
  const removeButton = document.querySelector(".remove-button");
  const wrappepMain = document.querySelector(".wrapper");
  const numberInput = document.querySelector(".number-input");
  const removeNumberButton = document.querySelector(".remove-nth-block");

  buttonLog.addEventListener("click", () => {
    console.log(textInput.value);
  });

  clearButton.addEventListener("click", () => {
    textInput.value = "";
  });

  blockButton.addEventListener("click", blockMyInput);

  function blockMyInput() {
    if (textInput.disabled) {
      textInput.disabled = false;
    } else {
      textInput.disabled = true;
    }
  }

  hideButton.addEventListener("click", () => {
    textInput.classList.toggle("hide");
  });

  randomColor.addEventListener("click", () => {
    const colors = ["red", "green", "black", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    textInput.style.color = colors[randomIndex];
  });

  createButton.addEventListener("click", () => {
    let newContainer = document.createElement("div");
    newContainer.textContent = textInput.value;
    newContainer.classList.add("new-block");

    wrappepMain.appendChild(newContainer);
    textInput.value = "";
  });

  removeButton.addEventListener("click", () => {
    const newBlocksCollection = document.getElementsByClassName("new-block");
    const blockArray = Array.from(newBlocksCollection);
    const findRemoveBlock = blockArray.pop();
    findRemoveBlock.remove();
  });

  removeNumberButton.addEventListener("click", () => {
    const blockIndex = parseInt(numberInput.value - 1);
    const newBlocksCollection = document.getElementsByClassName("new-block");
    const blockArray = Array.from(newBlocksCollection);

    if (numberInput.value > 0) {
      const deleteBlock = blockArray[blockIndex];
      deleteBlock.remove();
    }
  });
});

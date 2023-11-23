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
  const hiddenInput = document.querySelector(".hidden");

  buttonLog.addEventListener("click", () => {
    console.log(textInput.value);
  });

  clearButton.addEventListener("click", () => {
    textInput.value = "";
  });

  blockButton.addEventListener("click", () => {
    textInput.disabled = !textInput.disabled;
    if (textInput.disabled) {
      blockButton.textContent = "Unblock Input";
    } else {
      blockButton.textContent = "Block Input";
    }
  });

    
  hideButton.addEventListener("click", () => {
    hiddenInput.classList.toggle("hide");
    if (hideButton.textContent === "Hide Input") {
      hideButton.textContent = "Show Input";
    } else {
      hideButton.textContent = "Hide Input";
    }
  });
    

  randomColor.addEventListener("click", () => {
    const colors = ["red", "green", "black", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    textInput.style.color = colors[randomIndex];
  });

  createButton.addEventListener("click", () => {
    if (textInput.value.trim() !== "") {
      let newContainer = document.createElement("div");
      newContainer.textContent = textInput.value;
      newContainer.classList.add("new-block");

      wrappepMain.appendChild(newContainer);
      textInput.value = "";
    }
  });

  let blockDeleteNow = true; 

removeButton.addEventListener("click", () => {
  const newBlocksCollection = document.getElementsByClassName("new-block");
  const blockArray = Array.from(newBlocksCollection);

  if (blockArray.length > 0) {
    const findRemoveBlock = blockArray.pop();
    findRemoveBlock.remove();
  } else if (blockDeleteNow ) {
    console.log("Извините, но у вас больше нет созданных блоков");
    blockDeleteNow = false; 
  }
});
    
    
removeNumberButton.addEventListener("click", () => {
    const blockIndex = parseInt(numberInput.value - 1);
    const newBlocksCollection = document.getElementsByClassName("new-block");
    const blockArray = Array.from(newBlocksCollection);
    if (blockArray.length > 0 && blockIndex >= 0 && blockIndex < blockArray.length) {
      const deleteBlock = blockArray[blockIndex];
      deleteBlock.remove();
    } else {
      console.log("Извините, но у вас больше нет созданных блоков");
    }
  });
});
    
    
    
    



//your JS code here. If required.
const gridContainer = document.getElementById("grid-container");

// Create 3x3 grid
for (let i = 1; i <= 9; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  box.id = i; 
  box.innerText = i;
  gridContainer.appendChild(box);
}

document.getElementById("change_button").addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const colorValue = document.getElementById("colour_id").value;

  // Reset all blocks first
  resetColors();

  // Change specific color
  if (blockId >= 1 && blockId <= 9) {
    const selectedBlock = document.getElementById(blockId);
    selectedBlock.style.backgroundColor = colorValue;
  } else {
    alert("Please enter a valid ID between 1 and 9");
  }
});

document.getElementById("Reset").addEventListener("click", resetColors);

function resetColors() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
}

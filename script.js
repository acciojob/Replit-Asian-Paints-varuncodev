const gridContainer = document.getElementById("grid-container");

// Create 3x3 blocks dynamically
for (let i = 1; i <= 9; i++) {
  const block = document.createElement("div");
  block.classList.add("grid-item");
  block.id = i;
  block.innerText = i;
  gridContainer.appendChild(block);
}

// Change Color Button Click
document.getElementById("change_button").addEventListener("click", () => {
  const idValue = document.getElementById("block_id").value;
  const colorValue = document.getElementById("colour_id").value;

  resetBlocks();

  if (idValue >= 1 && idValue <= 9) {
    const selectedBlock = document.getElementById(idValue);
    selectedBlock.style.backgroundColor = colorValue;
  } else {
    alert("Please enter a valid Block ID between 1 and 9");
  }
});

// Reset Button
document.getElementById("Reset").addEventListener("click", resetBlocks);

// Reset all to transparent
function resetBlocks() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
}

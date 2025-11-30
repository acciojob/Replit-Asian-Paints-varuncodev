let gridContainer = document.getElementById("grid-container");

// Generate grid items only once
if (gridContainer.children.length === 0) {
  for (let i = 1; i <= 9; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-item");
    box.id = i;
    box.innerText = i;
    gridContainer.appendChild(box);
  }
}

document.getElementById("change_button").addEventListener("click", () => {
  resetColors();

  const idValue = document.getElementById("block_id").value;
  const colorValue = document.getElementById("colour_id").value;

  if (idValue >= 1 && idValue <= 9) {
    document.getElementById(idValue).style.backgroundColor = colorValue;
  }
});

document.getElementById("reset_button").addEventListener("click", () => {
  resetColors();
});

function resetColors() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
}

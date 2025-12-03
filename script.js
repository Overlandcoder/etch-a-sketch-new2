const grid = document.querySelector(".grid");
const btn = document.querySelector(".btn");

createRows(16);

btn.addEventListener('click', () => {
  let gridSize = prompt("How many squares per side?", '');
  if (!gridSize) return;
  
  createRows(gridSize, true);
})

function createRows(gridSize, resetting = false) {
  if (resetting) grid.replaceChildren();

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    createCubes(gridSize, row);
    row.classList.add("row");
    grid.appendChild(row);
  }
  
  addListeners();
}

function createCubes(gridSize, parent) {
  for (let i = 0; i < gridSize; i++) {
    cube = document.createElement("div");
    cube.classList.add("cube")
    parent.appendChild(cube);
  }
}

function addListeners() {
  const cubes = document.querySelectorAll(".cube");

  cubes.forEach(cube => {
    cube.addEventListener('mouseover', () => {
      cube.style.backgroundColor = "black";
    })
  })
}

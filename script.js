const grid = document.querySelector(".grid");
let gridSize = prompt("How many squares per side?", '');

function createRows() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    createCubes(row);
    row.classList.add("row");
    grid.appendChild(row);
  }
}

function createCubes(parent) {
  for (let i = 0; i < gridSize; i++) {
    cube = document.createElement("div");
    cube.classList.add("cube")
    parent.appendChild(cube);
  }
}

createRows();

const cubes = document.querySelectorAll(".cube");

cubes.forEach(cube => {
  cube.addEventListener('mouseover', () => {
    cube.style.backgroundColor = "black";
  })
})

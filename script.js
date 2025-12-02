const grid = document.querySelector(".grid");

function createRows(numOfRows) {
  for (let i = 0; i < numOfRows; i++) {
    const row = document.createElement("div");
    createCubes(16, row);
    grid.appendChild(row);
  }
}

function createCubes(numOfCubes, parent) {
  for (let i = 0; i < numOfCubes; i++) {
    cube = document.createElement("div");
    cube.classList.add("cube")
    parent.appendChild(cube);
  }
}

createRows(16);

const cubes = document.querySelectorAll(".cube");

cubes.forEach(cube => {
  cube.addEventListener('mouseover', () => {
    cube.style.backgroundColor = "black";
  })
})

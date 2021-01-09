const gridContainer = document.querySelector("#grid-container");
const colorPicker = document.querySelector("#input-color");
const colorButtons = document.querySelectorAll("#color-choice");
var slider = document.querySelector("#size-range");
var clearButton = document.querySelector("#clear");
var color = "black";

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        var gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseenter", fillColor);
        gridContainer.appendChild(gridElement);
    }
}

function selectColor(e) {
    color = e.target.value;
}

function changeColor(e) {
    switch(e.target.dataset.color) {
        case "rainbow":
            color = "rainbow";
            break;
        case "eraser":
            color = "eraser";
            break;
        default:
            color = "black";
            break;
    }
}

function fillColor() {
    switch(color) {
        case "rainbow":
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case "eraser":
            this.style.backgroundColor = "#ffffff";
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((e) => {
        gridContainer.removeChild(e);
    })
}

function changeSize() {
    let newSize = slider.value;
    clearGrid();
    setGridSize(newSize);
    fillGrid(newSize);
}

function clearColor() {
    var gridElement = document.querySelectorAll(".grid-element");
    gridElement.forEach(item => item.style.backgroundColor = "#ffffff");
}

window.addEventListener("load", setDefaultGrid);
colorPicker.addEventListener("input", selectColor);
slider.addEventListener("mouseup", changeSize);
clearButton.addEventListener("click", clearColor);
colorButtons.forEach(colorButton => colorButton.addEventListener("click", changeColor));
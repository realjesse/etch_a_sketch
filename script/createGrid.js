// Initialize variables and constants
let sketchAreaNode = document.querySelector("#sketch_area");
let gridsizeButtonNode = document.querySelector("#gridsize");
let clearButtonNode = document.querySelector("#clear_button");
let rgbButtonNode = document.querySelector("#RGB_button");
let isDragging = false;
let isColorful = false;
let gridsize = 16;

// Create the pixelated grid
function createGrid(numOfPixels) {
    clearGrid();
    // Calculate size of pixel
    const lengthOfPixel = sketchAreaNode.offsetWidth / numOfPixels;

    // Create the row container for pixels
    for (i = 0; i < numOfPixels; i++) {
        const rowPixelContainer = document.createElement("div");
        rowPixelContainer.style.display = "flex";

        // Create the individual pixels
        for (j = 0; j < numOfPixels; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = `${lengthOfPixel}px`;
            pixel.style.height = `${lengthOfPixel}px`;
            rowPixelContainer.appendChild(pixel);
        }

        // Append to main page
        sketchAreaNode.appendChild(rowPixelContainer);
    }
}

function clearGrid() {
    sketchAreaNode.replaceChildren();
}

// Edit pixel style
function stylePixel(event) {
    if (isDragging === true && event.target.className === "pixel") {
        event.target.style.backgroundColor = 'black';
    }
}

// Starting coloring
function startColoring(event) {
    if (event.target.className === "pixel") {
        // Prevents the browser from trying to drag element
        event.preventDefault();
        stylePixel(event);
        isDragging = true;
    }
}

// End coloring
function endColoring() {
    isDragging = false;
}

// Get new gridsize, create new grid
function getGridsize() {
    gridsize = parseInt(prompt("What gridsize do you want?"))
    createGrid(gridsize);
}

// Add event listener
sketchAreaNode.addEventListener('mousedown', startColoring);
sketchAreaNode.addEventListener('mouseover', stylePixel);
sketchAreaNode.addEventListener('mouseup', endColoring);
gridsizeButtonNode.addEventListener('click', getGridsize);
clearButtonNode.addEventListener('click', () => {
    clearGrid();
    createGrid(gridsize);
});
rgbButtonNode.addEventListener('click', () => {
    isColorful = true;
})

// Test
createGrid(gridsize);
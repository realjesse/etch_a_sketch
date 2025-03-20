// Initialize variables and constants
let sketchAreaNode = document.querySelector("#sketch_area");
let gridsizeButtonNode = document.querySelector("#gridsize");
let clearButtonNode = document.querySelector("#clear_button");
let rgbButtonNode = document.querySelector("#RGB_button");
let blackButtonNode = document.querySelector("#black_button");
let shadingButtonNode = document.querySelector("#shading_button");
let isShading = false;
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
            pixel.style.opacity = "0";
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
        if (isColorful) {
            event.target.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
            event.target.style.opacity = "100";
        }
        else if (isShading) {
            let currentOpacity = parseFloat(event.target.style.opacity);
            if (currentOpacity <= .9) {
                event.target.style.opacity = String(currentOpacity + 0.1);
                event.target.style.backgroundColor = 'black';
                console.log(event.target.style.opacity);
            }
        }
        else {
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity = "100";
        }
    }
}

// Starting coloring
function startColoring(event) {
    if (event.target.className === "pixel") {
        // Prevents the browser from trying to drag element
        event.preventDefault();
        isDragging = true;
        stylePixel(event);
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

// Get random int from 0 to 255, for rgb coloring
function getRandomInt() {
    return Math.floor(Math.random() * 256)
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
    isShading = false;
});
blackButtonNode.addEventListener('click', () => {
    isColorful = false;
    isShading = false;
});
shadingButtonNode.addEventListener('click', () => {
    isShading = true;
    isColorful = false;
})

// Test
createGrid(gridsize);
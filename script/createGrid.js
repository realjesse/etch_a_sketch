// Initialize variables and constants
let sketchAreaNode = document.querySelector("sketch_area");

function createGrid(numOfPixels) {
    const lengthOfPixel = sketchAreaNode.offsetWidth / numOfPixels;

    for (i = 0; i < numOfPixels; i++) {
        const rowPixelContainer = document.createElement("div");
        rowPixelContainer.style.display = "flex";

        for (j = 0; j < numOfPixels; j++) {
            const pixel = document.createElement("div");
            pixel.style.width = `${lengthOfPixel}px`;
            pixel.style.height = `${lengthOfPixel}px`;
            rowPixelContainer.appendChild(pixel);
        }

        sketchAreaNode.appendChild(rowPixelContainer);
    }
}

createGrid(16);
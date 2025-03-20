// Initialize variables and constants
let sketchAreaNode = document.querySelector("sketch_area");

function createGrid(numOfPixels) {
    const lengthOfPixel = sketchAreaNode.offsetWidth / numOfPixels;

    for (i = 0; i < numOfPixels; i++) {
        const rowPixelContainer = document.createElement("div");

        for (j = 0; j < numOfPixels; j++) {
            const pixel = document.createElement("div");
            
        }
    }
}
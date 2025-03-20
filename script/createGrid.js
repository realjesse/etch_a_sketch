// Initialize variables and constants
let sketchAreaNode = document.querySelector("#sketch_area");

// Create the pixelated grid
function createGrid(numOfPixels) {
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

// Edit pixel style
function stylePixel(event) {
    
}

// Test
createGrid(16);
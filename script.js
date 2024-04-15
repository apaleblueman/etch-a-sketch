//start with a 16X16 grid
makeGrid(16,Math.floor(500/16),"ui")
// Function to generate a random rainbow color
function getRainbow() {
    let colorCode = Math.floor(Math.random() * 7);
    switch(colorCode) {
        case 0:
            return "red";
        case 1:
            return "orange";
        case 2:
            return "yellow";
        case 3:
            return "green";
        case 4:
            return "blue";
        case 5:
            return "indigo";
        case 6:
            return "violet";
        default:
            return "black"; // Default to black if something unexpected happens
    }
}

// Function to create a grid
function makeGrid(numCells, cellSize, buttonId) {
    let canvas = document.querySelector("#sketchPad");
    canvas.innerHTML = ""; // Clear previous grid content
    for (let row = 0; row < numCells; row++) {
        // Create a row
        let rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        canvas.appendChild(rowDiv);
        for (let col = 0; col < numCells; col++) {
            // Create each cell in the row
            let colDiv = document.createElement("div");
            colDiv.style.width = `${cellSize}px`;
            colDiv.style.height = `${cellSize}px`;
            colDiv.style.border = "solid 1px black";
            rowDiv.appendChild(colDiv);
            // Add event listener for mouseover based on buttonId
            if (buttonId === "ui") {
                // If "ui" button is clicked, color cells black on mouseover
                colDiv.addEventListener('mouseover', () => {
                    colDiv.style.backgroundColor = "black";
                });
            } else if (buttonId === "random") {
                // If "random" button is clicked, color cells with random rainbow color on mouseover
                colDiv.addEventListener('mouseover', () => {
                    colDiv.style.backgroundColor = getRainbow();
                });
            } else {
                // If no button is specified or unknown buttonId, default to coloring cells black on mouseover
                colDiv.addEventListener('mouseover', () => {
                    colDiv.style.backgroundColor = "black";
                });
            }
        }
    }
}

// Event listener for the button click to create a new grid
let makeGridButton = document.querySelector("#buttons");
makeGridButton.addEventListener('click', (event) => {
    let target = event.target;
    let cellNum = parseInt(prompt("Enter dimensions")); // Prompt user for grid dimensions
    if (cellNum > 100 || cellNum < 1) {
        alert("Enter a valid number!"); // Alert if entered value is not valid
    } else {
        let cellSize = Math.floor((500 / cellNum));
        makeGrid(cellNum, cellSize, target.id); // Create a new grid with specified dimensions
    }
});

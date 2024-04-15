//start with 16X16 grid
makeGrid(16,Math.floor((500/16)));
let makeGridButton = document.querySelector("#buttons");
makeGridButton.addEventListener('click', (event)=>{
    let cellNum = parseInt(prompt("Enter dimentions"));
    if(cellNum>100 || cellNum < 1){
     alert("Enter a valid number!");
    }else{
        let cellSize = Math.floor((500/cellNum));
        makeGrid(cellNum,cellSize);
    }
})

//random colors
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
            return "black"; // default to black if something unexpected happens
    }
}


//make a grid
function makeGrid(numCells,cellSize){
    let canvas = document.querySelector("#sketchPad");
    canvas.innerHTML="";
    for(let cellIter = 0; cellIter<numCells; cellIter++){
        let rowDiv = document.createElement("div");
        rowDiv.style.display="flex";
        canvas.appendChild(rowDiv);
        for(let cellIter = 0; cellIter<numCells; cellIter++){
            let colDiv = document.createElement("div");
            colDiv.style.width=`${cellSize}px`;
            colDiv.style.height=`${cellSize}px`;
            colDiv.style.border="solid 1px black";
            rowDiv.appendChild(colDiv);
            colDiv.addEventListener('mouseover',()=>{
                colDiv.style.backgroundColor="black";
            });
            
        }
    }
}
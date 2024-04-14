//creating grids

let sketchpad = document.querySelector("#sketchPad");

document.addEventListener('DOMContentLoaded', (event)=>{
    let cells = 12;
    let h = (500/cells)-1.8;
    let w =(500/cells)-1.8;
    for(let row=0;row<cells*cells;row++){
            let cell = document.createElement("div");
            cell.style.border="solid 1px"        
            cell.style.width=`${w}px`
            cell.style.height=`${h}px`
            sketchpad.appendChild(cell);
    }
})


let changeSize = document.querySelector("#ui");

changeSize.addEventListener('click' , (event)=>{
    cells = parseInt(prompt("Enter size"))
})

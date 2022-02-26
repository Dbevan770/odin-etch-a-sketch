// Store the grid container and tooltip elements
const gridContainer = document.querySelector('.grid-container');
const tooltip = document.querySelector('.tooltip');

// Check whether the mouse is down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let eraseMode = false;
const eraseBtn = document.querySelector('#erase');
const drawBtn = document.querySelector('#draw');
const modeText = document.querySelector('.modetext');

// Add click event listeners to each of the grid size buttons
const gridBtns = document.querySelectorAll('.gridbtn');
gridBtns.forEach(gridBtn =>{
    gridBtn.addEventListener('click', e => {
        emptyGrid();
        createGrid(e.target.id);
    });
    // Due to potential performance issues, warn the user when hovering
    // over a 32x32 button or larger they may experience problems.
    if(gridBtn.id >= 32){
        gridBtn.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
        gridBtn.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    }
});

// Set reset button to delete the grid
reset.addEventListener('click', () => {
    emptyGrid();
});

eraseBtn.addEventListener('click', () => {
    if(!eraseMode){
        eraseMode = true;
        drawBtn.classList.remove('selected');
        eraseBtn.classList.add('selected');
    } 

    return;
});

drawBtn.addEventListener('click', () => {
    if(eraseMode){
        eraseMode = false;
        eraseBtn.classList.remove('selected');
        drawBtn.classList.add('selected');
    }
    return;
});

function createGrid(size){
    for (let i = 0; i < size * size; i++){
        var div = document.createElement('div');
        var sizePercent = (100 / size);
        div.classList.add('grid-piece');
        div.style.cssText = "width: "+sizePercent+"%; height: "+sizePercent+"%";
        div.addEventListener('mouseover', fillGrid);
        div.addEventListener('mousedown', fillGrid);
        gridContainer.appendChild(div);
    };
}

// Delete all of the grid boxes
function emptyGrid(){
    if(!document.querySelectorAll('.grid-piece')){
        return;
    }
    else {
        document.querySelectorAll('.grid-piece').forEach(e => e.remove());
    }
}

// Color currently targeted grid square black
function fillGrid(gridBox){
    if(gridBox.type === 'mouseover' && !mouseDown) return;

    if(!eraseMode){
        gridBox.target.style.backgroundColor = '#000000';
    }
    else{
        gridBox.target.style.backgroundColor = '#FFFFFF';
        gridBox.target.style.border = "1px solid black";
    }
    
}

function SetDefaults(){
    eraseMode = false;
    drawBtn.classList.add('selected');
}

document.onload(SetDefaults());
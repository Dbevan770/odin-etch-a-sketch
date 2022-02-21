const gridContainer = document.querySelector('.grid-container');
let gridBoxes;
const tooltip = document.querySelector('.tooltip');

const gridBtns = document.querySelectorAll('.gridbtn');
gridBtns.forEach(gridBtn =>{
    gridBtn.addEventListener('click', e => {
        emptyGrid();
        createGrid(e.target.id, (e.target.id * e.target.id));
    });
    if(gridBtn.id >= 32){
        gridBtn.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible');
        });
        gridBtn.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    }
});

reset.addEventListener('click', () => {
    emptyGrid();
});

function createGrid(htwt, size){
    for (let i = 0; i < size; i++){
        var div = document.createElement('div');
        var sizePercent = (100 / htwt);
        div.classList.add('grid-piece');
        div.style.cssText = "width: "+sizePercent+"%; height: "+sizePercent+"%";
        gridContainer.appendChild(div);
    };

    getGridSqaures();
}

function emptyGrid(){
    if(!document.querySelectorAll('.grid-piece')){
        return;
    }
    else {
        document.querySelectorAll('.grid-piece').forEach(e => e.remove());
    }
}


function getGridSqaures(){
    gridBoxes = document.querySelectorAll('.grid-piece');

    gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', () => {  
        gridBox.classList.add('filled');
    }));
}
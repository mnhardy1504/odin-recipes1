
function enterGrid() {
    let size = prompt("What number of squares per side do you want for each side of the grid?", 7);
    document.documentElement.style.setProperty('--num-columns', size); 
    const gridContainer = document.getElementById('grid-container'); 
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild); 
    };

    for (let i = 0; i < size * size; i++ ) {
       const div = document.createElement('div');
       div.classList.add('grid-item');
       div.addEventListener('mouseenter', mouseHoverStart);
       div.addEventListener('mouseleave', mouseHoverEnd);
       gridContainer.appendChild(div);
     }
}

function mouseHoverStart(event) {
    event.target.style.backgroundColor = 'red';
}

function mouseHoverEnd(event) {
    event.target.style.backgroundColor ='lightgray';
}

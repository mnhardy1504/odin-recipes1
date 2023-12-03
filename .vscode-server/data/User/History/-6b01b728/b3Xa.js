document.addEventListener('DOMContentLoaded', drawGrid);

// function drawGrid(){
//     const gridContainer = document.querySelector('.grid-container'); 
//     console.log('hey');
//     for (let i = 0; i < 16 * 16; i++) {
//         const div = document.createElement('div');
//         div.classList.add('grid-item');
//         div.addEventListener('mouseenter', mouseHoverStart);
//         div.addEventListener('mouseleave', mouseHoverEnd);
//         gridContainer.appendChild(div);
//         console.log('hey whats up', div);
//     }
// }

enterGrid()
    for (let i = 0; i < 100 * 100; ) {
       const div = document.createElement('div');
       div.classList.add('grid-item');
       div.addEventListener('mouseenter', mouseHoverStart);
       div.addEventListener('mouseleave', mouseHoverEnd);
       gridContainer.appendChild(div);
     }


function mouseHoverStart(event) {
    event.target.style.backgroundColor = 'red';
    console.log('this works');
}

function mouseHoverEnd(event) {
    event.target.style.backgroundColor ='lightgray';
    console.log('new statement');
}

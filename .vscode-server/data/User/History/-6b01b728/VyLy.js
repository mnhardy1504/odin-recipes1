let size = prompt("What number of squares per side do you want for each side of the grid?", 16 );


function enterGrid() {
    const gridContainer = document.getElementsByClassName('grid-container'); 
    for (let i = 0; i < 100 * 100; ) {
       const div = document.createElement('div');
       div.classList.add('grid-item');
       div.addEventListener('mouseenter', mouseHoverStart);
       div.addEventListener('mouseleave', mouseHoverEnd);
       gridContainer[0].appendChild('div');
       console.log('hi')
     }
}

document.addEventListener('DOMContentLoaded', enterGrid);

function mouseHoverStart(event) {
    event.target.style.backgroundColor = 'red';
    console.log('this works');
}

function mouseHoverEnd(event) {
    event.target.style.backgroundColor ='lightgray';
    console.log('new statement');
}

    // for (let i = 0; i < 100 * 100; ) {
    //    const div = document.createElement('div');
    //    div.classList.add('grid-item');
    //    div.addEventListener('mouseenter', mouseHoverStart);
    //    div.addEventListener('mouseleave', mouseHoverEnd);
    //    gridContainer.appendChild(div);
    //    console.log('hi')
    //  }



// function drawGrid(){

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







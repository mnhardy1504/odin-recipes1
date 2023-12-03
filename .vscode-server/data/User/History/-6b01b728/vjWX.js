let interactionCount = 0;

function enterGrid() {
    let size = prompt("What number of squares per side do you want for each side of the grid?", 7);
    document.documentElement.style.setProperty('--num-columns', size);
    const gridContainer = document.getElementById('grid-container');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', mouseHoverStart);
        div.addEventListener('mouseleave', mouseHoverEnd);
        gridContainer.appendChild(div);
    }
}

function mouseHoverStart(event) {
    interactionCount++;
    const currentColor = event.target.style.backgroundColor;
    const currentDarkness = interactionCount * 10; // Increase darkness by 10% with each interaction

    if (currentDarkness <= 100) {
        event.target.style.backgroundColor = darkenColor(currentColor, currentDarkness);
    }
}

function darkenColor(color, darkness) {
    // Function to darken a color
    let num = parseInt(color.slice(4, -1)); // Extract the numeric part of the color string
    num = Math.floor(num * (1 - darkness / 100)); // Darken the color
    return `rgb(${num}, 0, 0)`; // Set the red component based on darkness level
}

function mouseHoverEnd(event) {
    event.target.style.backgroundColor = 'lightgray';
}

}
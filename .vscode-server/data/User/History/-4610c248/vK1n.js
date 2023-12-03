// Select the parent element
const container = document.querySelector('#container');

// Create the first <p> element with red text
const redText = document.createElement('p');
redText.textContent = 'Hey, I\'m Red';
redText.classList.add('red-text');

// Create the second <h3> element with blue text
const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3";
blueText.classList.add('blue-text');

// Append the elements to the parent container
container.appendChild(redText);
container.appendChild(blueText);

// Create the main <div> element with a black border and pink background
const mainDiv = document.createElement('div');
mainDiv.style.border = '2px solid black';
mainDiv.style.backgroundColor = 'pink';

// Create an <h1> element inside the main <div>
const h1Element = document.createElement('h1');
h1Element.textContent = "I'm in a div";

// Create a <p> element inside the main <div>
const pElement = document.createElement('p');
pElement.textContent = "ME TOO!";

// Append the <h1> and <p> to the main <div>
mainDiv.appendChild(h1Element);
mainDiv.appendChild(pElement);

// Append the main <div> to the container
container.appendChild(mainDiv);

// the JavaScript file
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
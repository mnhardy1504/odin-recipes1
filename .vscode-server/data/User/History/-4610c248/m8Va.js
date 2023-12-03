const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = 'Hey, I\'m Red';
redText.style.color = 'red';

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';

mainDiv.style.border = '2px solid black'; // Add a black border
mainDiv.style.backgroundColor = 'pink';

const h1Element = document.createElement('h1');
h1Element.textContent = "I'm in a div";

const pElement = document.createElement('p');
pElement.textContent = "ME TOO!";

mainDiv.appendChild(h1Element);
mainDiv.appendChild(pElement);

container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(mainDiv);
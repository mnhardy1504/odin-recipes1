const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = 'Hey, I\'m Red';
redText.style.color = 'red';

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';

container.appendChild(redText);
container.appendChild(blueText);
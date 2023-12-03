const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('red-style');
content.textContent = 'Hey, Im Red';

container.appendChild(content);


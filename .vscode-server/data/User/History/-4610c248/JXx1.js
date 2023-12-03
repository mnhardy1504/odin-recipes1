const container = document.querySelector('#container');

const content = document.createElement('p');
content.textContent = 'Hey, I\'m Red';

content.classList.add('red-text');

container.appendChild(content);


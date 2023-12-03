const container = document.querySelector('#container');

const content = document.createElement('p');
content.textContent = 'Hey, I\'m Red'; 
content.style.color = 'red';

container.appendChild(content);

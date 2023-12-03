const container = document.querySelector('#container');

const content = document.createElement('p');
content.textContent = 'Hey, I\'m Red'; 
content.style.color = 'red';

const content = document.createElement('h3');
content.textContent = "I'm a blue h3";
content.style.color = 'blue';

container.appendChild(content);

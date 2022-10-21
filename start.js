const body = document.querySelector('body');

const secondParagraph = document.createElement('p');
secondParagraph.classList.add('secondParagraph');
secondParagraph.textContent = 'This is the first text from my practice';
secondParagraph.style.color = 'red';
body.appendChild(secondParagraph);

const firstH3 = document.createElement('h3');
firstH3.classList.add('firstH3');
firstH3.textContent = 'This text is blue, right?';
firstH3.style.color = 'blue';
body.appendChild(firstH3);

const container = document.createElement('div');
container.classList.add('container');
container.style.borderBlockColor = 'black';
container.style.backgroundColor = 'pink';
body.appendChild(container);

const firstH1 = document.createElement('h1');
firstH1.classList.add('firstH1');
firstH1.textContent = 'The is a Header inside a new div';
container.appendChild(firstH1);

const thirdParagraph = document.createElement('p');
thirdParagraph.classList.add('thirdParagraph');
thirdParagraph.textContent = 'This paragraph is also inside the new div';
container.appendChild(thirdParagraph);
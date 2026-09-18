// main.js
const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('col');
  container.appendChild(cell);
}

// main.js (continued)

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('col')) {
    e.target.style.backgroundColor = 'black';
  }
});

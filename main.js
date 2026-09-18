// main.js
const container = document.querySelector('#container');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('col');
  container.appendChild(cell);
}

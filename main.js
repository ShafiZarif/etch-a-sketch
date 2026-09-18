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

// main.js (continued)

const button = document.getElementById('btn-gradient');

button.addEventListener('click', () => {
  const raw = prompt('How many squares per side? (1–100)');

  // Cancelled
  if (raw === null) return;

  // Convert and validate
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    alert('Please enter a whole number between 1 and 100.');
    return;
  }

  // Clear old grid
  container.replaceChildren();

  // Update cell width for the new grid size
  container.style.setProperty('--cell-size', `${100 / n}%`);

  // Build new n × n grid
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement('div');
    cell.classList.add('col');
    container.appendChild(cell);
  }
});

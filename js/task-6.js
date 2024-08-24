function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

controls.createBtn.addEventListener('click', () => {
  const amount = parseInt(controls.input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    controls.input.value = ''; 
  }
});

controls.destroyBtn.addEventListener('click', () => {
  destroyBoxes();
  controls.input.value = ''; 
});

function createBoxes(amount) {
  destroyBoxes(); 

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(div);
  }

  controls.boxesContainer.append(...elements);
}

function destroyBoxes() {
  controls.boxesContainer.innerHTML = ''; 
}

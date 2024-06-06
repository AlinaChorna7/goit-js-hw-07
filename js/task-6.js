document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () =>{
    const amount = parseInt(input.value, 10);
    if(isNaN(amount) || amount < 1 || amount > 100){
    return alert('Please enter a number between 1 and 100.');
    }
    createBoxes(amount);
    input.value = '';
  });
  destroyButton.addEventListener('click', () =>{
    boxesContainer.innerHTML = '';

  });
function createBoxes(amount){
  boxesContainer.innerHTML = '';
  for(let i = 0; i < amount; i ++){
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function getRandomHexColor(){
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
});

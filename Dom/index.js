
const incrementButton = document.getElementById('incrementButton');
const countElement = document.getElementById('count');

let counter = 0;

function incrementCounter() {
  counter++;
  countElement.textContent = counter;
}
incrementButton.addEventListener('click', incrementCounter);
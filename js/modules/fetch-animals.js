import AnimateNumbers from './animate-numbers.js';

export default function fetchAnimals(url, target) {
  function createAnimalHtml(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers('[data-number]', '.numbers', 'ativo');
    animateNumbers.init();
  }

  const numberGrid = document.querySelector(target);
  function appendAnimal(animal) {
    const divAnimal = createAnimalHtml(animal);
    numberGrid.appendChild(divAnimal);
  }

  // fetch the animals and create the elements
  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach((animal) => appendAnimal(animal));
      animateAnimalsNumbers();
    } catch (error) {
      console.log(error);
    }
  }
  return createAnimals();
}

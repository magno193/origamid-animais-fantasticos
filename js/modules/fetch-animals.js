import AnimateNumbers from './animate-numbers.js';

export default function initFetchAnimals() {
  function createAnimalHtml(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numberGrid = document.querySelector('.numbers-grid');

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimalHtml(animal);
        numberGrid.appendChild(divAnimal);
      });
      const animateNumbers = new AnimateNumbers('[data-number]', '.numbers', 'ativo');
      animateNumbers.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals('./mock/animalsapi.json');
}

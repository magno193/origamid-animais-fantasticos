import initAnimateNumbers from './animate-numbers.js';

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numberGrid = document.querySelector('.numbers-grid');

      animalsJSON.forEach(animal => {
        const divAnimal = createAnimalHtml(animal);
        numberGrid.appendChild(divAnimal);
      });
      initAnimateNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  function createAnimalHtml(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  fetchAnimals('./mock/animalsapi.json')
}

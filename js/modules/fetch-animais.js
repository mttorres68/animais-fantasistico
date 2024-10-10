import AnimateNumbers from './anima-numeros.js';

export default function fetchAnimals(url, target) {
  // CRIA A DIV CONTENDO INFORMAÇÕES
  // COM O TOTAL DE ANIMAIS
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // PREENCHE CADA ANIMAL NO DOM
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  // ANIMA OS NÚMERO DE CADA ANIMAL
  function animateAnimalNumbers() {
    const animateNumbers = new AnimateNumbers('[data-numero]', '.numeros', 'ativo');
    animateNumbers.init();
  }

  // PUXA OS ANIMAIS ATRAVÉS DE UM ARQUIVO JSON
  // CRIA CADA ANIMAL UTILIZANDO CREATE-ANIMAL
  async function createAnimals() {
    try {
      // FETCH E ESPERA RESPOSTA
      // TRANSFORMA EM JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // APÓS A TRANSFORMAÇÃO DE JSON, ATIVA AS FUNÇÕES
      // PARA PREENCHER E ANIMAR OS NÚMEROS
      animaisJSON.forEach(animal => fillAnimals(animal));
      animateAnimalNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}

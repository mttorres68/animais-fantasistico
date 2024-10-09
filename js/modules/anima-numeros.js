export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // BIND O THIS DO OBJETO AO CALLBACK DA MUTAÇÃO
    this.handleMutation = this.handleMutation.bind(this);
  }

  // RECEBE UM ELEMENTO DO DOM, COM NÚMERO EM SEU TEXTO
  // INCREMENTA A PARTIR DE 0 ATÉ O NÚMERO FINAL
  static increaseNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ATIVA O INCREMENTA NÚMERO PARA CADA
  // NÚMERO SELECIONADO DO DOM
  animateNumbers() {
    this.numbers.forEach(number => this.constructor.increaseNumber(number));
  }

  // FUNÇÃO QUE OCORRE QUANDO A MUTAÇÕES OCORRER
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  // ADICIONA A MUTATION-OBSERVER PARA VERIFICAR
  // QUANDO A CLASSE ATIVO É ADICIONADO AO ELEMENTO TARGET
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

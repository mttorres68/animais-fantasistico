export default class Accordion {
  constructor(accordionList, activeClass) {
    this.accordionList = document.querySelectorAll(accordionList);
    if (activeClass === undefined) {
      this.activeClass = 'ativo';
    } else {
      this.activeClass = activeClass;
    }
  }

  // MÉTODO PARA ATIVAR A CLASS
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }


  //  ADICIONA OS EVENTOS AO ACCORDION
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }


  // INICIAR A CLASS
  init() {
    if (this.accordionList.length) {
      // ATIVAR O PRIMEIRO ITEM - SEMPRE ATIVO AO INICIAR / ACESSAR O SITE
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}

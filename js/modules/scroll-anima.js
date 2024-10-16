import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  // PEGA A DISTÂNCIA DE CADA ITEM EM RELAÇÃO
  // AO TOPO DO SITE
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // VERIFICA A DISTÂNCIA EM CADA OBJETO
  // EM RELAÇÃO AO SCROLL DO SITE
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add('ativo');
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }

    return this;
  }

  // REMOVE O EVENT SCROLL
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}

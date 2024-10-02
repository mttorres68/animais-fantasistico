export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // SEMPRE QUE HOUVER CALLBACK - REALIZE O BIND
    // BIND DO OBJETO DA CLASSE AOS CALLBACKS
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // MOVE A TOOLTIP COM BASE EM SEUS ESTILOS
  // DE ACORDO COM A POSIÇÃO DO MOUSE
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 200 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // REMOVE A TOOLTIP E OS EVENTOS DE mouseMove e mouseLeave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  //  CRIAR TOOLTIP BOX E COLOCA NO BODY
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // CRIA A TOOLTIP E ADICIONA OS EVENTOS DE mouseMove E mouseLeave AO TARGET
  onMouseOver({ currentTarget }) {
    // CRIA A TOOLTIP BOX E COLOCA EM UMA PROPRIEDADE
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // ADICIONA OS EVENTOS DE mouseOver A CADA TOOLTIP
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }


  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }

    return this;
  }
}

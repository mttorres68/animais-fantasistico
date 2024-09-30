export default class Modal {
  constructor(openButton, closedButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closedButton = document.querySelector(closedButton);
    this.containerModal = document.querySelector(containerModal);
    this.click = 'click';

    // BIND this AO CALLBACK PARA
    // FAZER REFERÊNCIA AO OBJETO
    // DA CLASS

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  //  ABRE E FECHA O MODAL
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //  ADICIONA O EVENTO DE TOGGLE AO MODAL
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // FECHA MODAL AO CLICAR LADO DE FORA
  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // ADICIONA OS EVENTOS AOS ELEMENTOS DO MODAL
  addModalEvents() {
    this.openButton.addEventListener(this.click, this.eventToggleModal);
    this.closedButton.addEventListener(this.click, this.eventToggleModal);
    this.containerModal.addEventListener(this.click, this.clickOutModal);
  }

  init() {
    if (this.openButton && this.closedButton && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}

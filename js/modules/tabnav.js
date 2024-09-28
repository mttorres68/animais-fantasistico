

export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }


  // ATIVA A TAB DE ACORDO COM O INDEX DA MES
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // ADICIONA OS EVENTOS NAS TABS
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }


  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabNavEvent();
      // ATIVAR PRIMEIRO ITEM
      this.activeTab(0);
    }
  }
}

import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import Accordion from './modules/accordion.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');

const tabContent = '[data-tab="content"] section';
const tabMenu = '[data-tab="menu"] li';
const tabNav = new TabNav(tabMenu, tabContent);

const openButton = '[data-modal="abrir"]';
const closedButton = '[data-modal="fechar"]';
const containerModal = '[data-modal="container"]';
const modal = new Modal(openButton, closedButton, containerModal);


accordion.init();
scrollSuave.init();
tabNav.init();
modal.init();

initAnimacaoScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

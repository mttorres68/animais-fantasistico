import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimals from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import Accordion from './modules/accordion.js';
import Tooltip from './modules/tooltip.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');

const tabContent = '[data-tab="content"] section';
const tabMenu = '[data-tab="menu"] li';
const tabNav = new TabNav(tabMenu, tabContent);

const openButton = '[data-modal="abrir"]';
const closedButton = '[data-modal="fechar"]';
const containerModal = '[data-modal="container"]';
const modal = new Modal(openButton, closedButton, containerModal);

const tooltipElement = '[data-tooltip]';
const tooltip = new Tooltip(tooltipElement);

const sections = '[data-anime="scroll"]';
const scrollAnima = new ScrollAnima(sections);
scrollAnima.init();

accordion.init();
scrollSuave.init();
tabNav.init();
modal.init();
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
fetchAnimals('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

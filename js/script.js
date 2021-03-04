import Accordion from './modules/accordion.js';
import TabNavigation from './modules/tabnav.js';
import ScrollAnimation from './modules/scroll-animation.js';
import fetchBitCoin from './modules/fetch-bitcoin.js';
import Modal from './modules/modal.js';
import Operation from './modules/operation.js';
import SmoothScroll from './modules/smooth-scroll.js';
import ToolTip from './modules/tooltip.js';
import fetchAnimals from './modules/fetch-animals.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordionList = new Accordion('[data-animation="accordion"] dt');
accordionList.init();

const tabNavigation = new TabNavigation(
  '[data-tab="menu"] li', '[data-tab="content"] section',
);
tabNavigation.init();

const modal = new Modal(
  '[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]',
);
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

const scrollAnimation = new ScrollAnimation('[data-animation="scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation('[data-week]', 'open');
operation.init();

fetchAnimals('../mock/animalsapi.json', '.numbers-grid');
fetchBitCoin('https://blockchain.info/ticker', '.btc-price');

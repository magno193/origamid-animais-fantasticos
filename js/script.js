import Accordion from './modules/accordion.js';
import TabNavigation from './modules/tabnav.js';
import initAnimateNumbers from './modules/animate-numbers.js';
import initAnimationScroll from './modules/animation-scroll.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initMenuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import initOperation from './modules/operation.js';
import SmoothScroll from './modules/smooth-scroll.js';
import initTooltip from './modules/tooltip.js';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordionList = new Accordion('[data-animation="accordion"] dt');
accordionList.init();

initAnimationScroll();
const tabNavigation = new TabNavigation(
  '[data-tab="menu"] li', '[data-tab="content"] section',
);
tabNavigation.init();

const modal = new Modal(
  '[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]',
);
modal.init();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimateNumbers();
initOperation();
initFetchAnimals();
initFetchBitcoin();

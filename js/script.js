import initAccordion from './modules/accordion.js';
import initAnimateNumbers from './modules/animate-numbers.js';
import initAnimationScroll from './modules/animation-scroll.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initMenuMobile from './modules/menu-mobile.js';
import initModal from './modules/modal.js';
import initOperation from './modules/operation.js';
import SmoothScroll from './modules/smooth-scroll.js';
import initTabNav from './modules/tabnav.js';
import initTooltip from './modules/tooltip.js';

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[hre^="#"]');
smoothScroll.init();

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimateNumbers();
initOperation();
initFetchAnimals();
initFetchBitcoin();

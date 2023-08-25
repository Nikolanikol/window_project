
import './slider';
import './modules/modal';
import tabs from './modules/tabs';

import modals from './modules/modal';
import form from './modules/form';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded',()=>{

    let modalState = {};
    modals();
    form(modalState);
    tabs('.glazing_block', '.glazing_content', '.tab-active','.glazing_slider');
    // calc()
})
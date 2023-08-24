
import './slider';
import './modules/modal';
import tabs from './modules/tabs';

import modals from './modules/modal';
import form from './modules/form';

document.addEventListener('DOMContentLoaded',()=>{

    let modalState = {};
    modals();
    form(modalState);
    tabs('.glazing_block', '.glazing_content', '.active','.glazing_slider');
    // tabs('.glazing_block', '.glazing_content', 'active','.slick-track');
    // tabs('.glazing_slider ', '.glazing_block', 'active','.glazing_slider');
})
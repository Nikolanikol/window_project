
import './slider';
import './modules/modal';
import tabs from './modules/tabs';

import modals from './modules/modal';
import form from './modules/form';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded',()=>{

    let calcObj = {
        width: 'none',
        height: 'none',
        profileType: 'none',
        profileOption: 'none',
    };
    modals();
    calc(calcObj)
    form(calcObj);
    tabs('.no_click', '.decoration_content>div>div', '.after_click', '.decoration_slider');
    tabs('.glazing_block', '.glazing_content', '.tab-active','.glazing_slider');
    tabs('.balcon_icons_img', '.big_img img', '.do_image_more', '.balcon_icons');
    // calc()
})
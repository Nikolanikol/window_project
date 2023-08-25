function calc(){
    const calcBtn = document.querySelectorAll('.glazing_price_btn'),
          popupCalc = document.querySelector('.popup_calc'),
          popupCalcBtn = document.querySelector('.popup_calc_button'),
          popupCalcProfileBtn = document.querySelector('.popup_calc_profile_button'),
          popupCalcEndClose = document.querySelector('.popup_calc_end_close');

    calcBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            openModal('.popup_calc')
        })
    popupCalc.addEventListener('click',(e)=>{
        if(e.target == popupCalc || e.target == popupCalc.querySelector('strong')){
            closeModal('.popup_calc')
        }
    })
    popupCalcBtn.addEventListener('click', ()=>{
        closeModal('.popup_calc');
        openModal('.popup_calc_profile');
        // place for obj create
    });
    popupCalcProfileBtn.addEventListener('click', ()=>{
        closeModal('.popup_calc_profile');
        openModal('.popup_calc_end');
        // place for obj create
    });
    popupCalcEndClose.addEventListener('click', (e)=>{
        // created array responce to server
        e.preventDefault();
        closeModal('.popup_calc_end');
    })


    function openModal(modalSelector) {
        document.querySelector(modalSelector).classList.remove('hide');
        document.querySelector(modalSelector).classList.add('show');
    };
    function closeModal(modalSelector){
        document.querySelector(modalSelector).classList.remove('show');
        document.querySelector(modalSelector).classList.add('hide');
    };

    // popup_calc popup_calc_profile popup_calc_end
})
}
calc()
export default calc;
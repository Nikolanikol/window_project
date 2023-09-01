function modals(){
    function openModal(modalSelector) {
        modalSelector.classList.remove('hide');
        modalSelector.classList.add('show');
    };
    function closeModal(modalSelector){
        modalSelector.classList.remove('show');
        modalSelector.classList.add('hide');
    };
    
    
    function modal(triggerSelector, modalSelector){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = modal.querySelector('strong'),
              window = document.querySelectorAll('[data-modal]');
              console.log(window)

        trigger.forEach(item=>{
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                openModal(modal);
                document.body.style.overflow = 'hidden';
                clearTimeout(modalTimerId);
            });
        })
        modal.addEventListener('click', (e)=>{
            if(e.target == modal || e.target == closeBtn){
                closeModal(modal);
                document.body.style.overflow = '';
                window.forEach(item =>{
                    closeModal(item);
                })
            }

        });

    }
    modal('.popup_engineer_btn', '.popup_engineer', );
    modal('.phone_link', '.popup');

    modal('.glazing_price_btn', '.popup_calc');
    modal('.popup_calc_button', '.popup_calc_profile ');
    modal('.popup_calc_profile_button', '.popup_calc_end')
    // const modalTimerId = setTimeout(()=>{
    //     document.querySelector('.popup').classList.add('show')
    // } , 10000)
}

export default modals;


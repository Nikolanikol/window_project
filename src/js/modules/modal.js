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
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = modal.querySelector('strong');
        trigger.addEventListener('click', (e)=>{
            e.preventDefault();
            openModal(modal);
            clearTimeout(modalTimerId);
        });
        modal.addEventListener('click', (e)=>{
            if(e.target == modal || e.target == closeBtn){
                closeModal(modal);
            }
        });

    }
    modal('.popup_engineer_btn', '.popup_engineer', )
    modal('.phone_link', '.popup') 
    const modalTimerId = setTimeout(()=>{
        document.querySelector('.popup').classList.add('show')
    } , 10000)
}

export default modals;


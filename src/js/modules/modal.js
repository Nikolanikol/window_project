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
              closeBtn = modal.querySelector('strong');
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

            }
        });

    }
    modal('.popup_engineer_btn', '.popup_engineer', )
    modal('.phone_link', '.popup') 
    // const modalTimerId = setTimeout(()=>{
    //     document.querySelector('.popup').classList.add('show')
    // } , 10000)
}

export default modals;


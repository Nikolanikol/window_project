function tabs(tabSelector, tabContentSelector, activeClass, headerSelector){
    const tabs = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector);
    const header = document.querySelector(headerSelector);
    console.log(header)

        //   console.dir(`tab ${tabs}`)
        //   console.log(`tabcontent ${tabContent}`)

    function hideTab(){
        tabs.forEach(item =>{
            item.classList.remove(activeClass);
        })
        tabContent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        })
    }

    function showTab(number){
        tabContent[number].classList.add('show')
        tabs[number].classList.add(activeClass)
    };
    

    hideTab();
    showTab(4);

     header.addEventListener('click',(e)=>{
        if(e.target.classList.contains('glazing_block') || e.target.parentNode.classList.contains('glazing_block')){
            hideTab();
            tabs.forEach((item, i) =>{
                if(item == e.target || e.target.parentNode == item){
                    showTab(i);
                }
            })
        }      
     })
}

export default tabs;
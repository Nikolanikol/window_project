function tabs(tabSelector, tabContentSelector, activeClass, headerSelector){
    const tabs = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector);
    const header = document.querySelector(headerSelector);
    console.log(header)

        //   console.dir(`tab ${tabs}`)
        //   console.log(`tabcontent ${tabContent}`)

    function hideTab(){
        tabs.forEach(item =>{
            item.classList.remove(activeClass.replace(/\./,''));
        })
        tabContent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        })
    }

    function showTab(number){
        tabContent[number].classList.add('show')
        tabs[number].classList.add(activeClass.replace(/\./,''))
    };
    

    hideTab();
    showTab(0);

     header.addEventListener('click',(e)=>{
        if(e.target.classList.contains(tabSelector.replace(/\./,'')) || e.target.parentNode.classList.contains(tabSelector.replace(/\./,''))){
            hideTab();
            tabs.forEach((item, i) =>{
                if(item == e.target || e.target.parentNode == item){
                    showTab(i);
                }
            })
        }      
     })
}
tabs('.no_click', '.decoration_content>div>div', '.after_click', '.decoration_slider')
export default tabs;
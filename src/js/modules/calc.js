// import { forEach } from "core-js/core/array";

function calc(){
    const calcBtn = document.querySelectorAll('.glazing_price_btn'),
          popupCalc = document.querySelector('.popup_calc'),
          popupCalcBigImg = document.querySelectorAll('.big_img img'),
          popupCalcBtn = document.querySelector('.popup_calc_button'),
          popupCalcProfileContent = document.querySelector('.popup_calc_profile'),
          popupCalcProfileBtn = document.querySelector('.popup_calc_profile_button'),
          popupCalcEndClose = document.querySelector('.popup_calc_end');

    const popupCalcInputs = popupCalc.querySelectorAll('input'),
          popupCalcProfileFormControl = document.querySelector('#view_type');
          console.log(popupCalcProfileFormControl.value)

    console.log(popupCalcBigImg)
    let calcObj = {
        width: 'none',
        height: 'none',
        profileType: 'none',
        profileOption: 'none'
    }
    // обработчик событий для открытия popupCalcModal + проверка для ввода инпутов
    calcBtn.forEach(item =>{
        item.addEventListener('click', ()=>{
            openModal(popupCalc)
            popupCalcInputs.forEach(item=>{
                item.addEventListener('input',()=>{
                    item.value = item.value.replace(/\D/, '');
                })
            })
        })

//   добавляет обработчик события на подложку и кнопку закрытия
    calcModalClose(popupCalc);
    calcModalClose(popupCalcProfileContent);
    calcModalClose(popupCalcEndClose);


    popupCalcBtn.addEventListener('click', ()=>{
        closeModal(popupCalc);
        popupCalcBigImg[0].classList.add('show')
        openModal(popupCalcProfileContent);
        // place for obj create
        popupCalcInputs.forEach(item=>{
            if(item.getAttribute('id') == 'width'){
                calcObj.width = item.value;
            }
            if(item.getAttribute('id') == 'height'){
                calcObj.height = item.value;
            }
        })
        console.log(calcObj)
    });
    const checkBoxInput = document.querySelectorAll('.checkbox'),
          checkboxCustom = popupCalcProfileContent.querySelectorAll('.checkbox-custom');
          

        checkBoxInput.forEach((item, i) =>{
            item.addEventListener('click',()=>{
                checkBoxInput.forEach((item, j)=>{
                    item.checked = false;
                    if(i == j){
                        item.checked = true;
                    }
                })
                checkboxCustom.forEach((item , k)=>{
                    if(i == k){
                        calcObj.profileOption = item.getAttribute('id')
                    }
                })
            })
        })
    popupCalcProfileBtn.addEventListener('click', ()=>{
        closeModal(popupCalcProfileContent);
        openModal(popupCalcEndClose);
        // place for obj create
        calcObj.profileType = popupCalcProfileFormControl.value;
       
        console.log(calcObj)

    });

    let  request = async (url, data) =>{
        let res = await fetch(url,{
            method: 'POST',
            body: data,
            // headers:{
            //     'Content-type': 'multipart/form-data'
            // }
        })
        return await res.text();
    };
    popupCalcEndClose.querySelector('form').addEventListener('submit', (e)=>{
        // created array responce to server
        e.preventDefault();
        let calcObjParse = new FormData;
        for(let key in calcObj){
            calcObjParse.append(key, calcObj[key])
        }
        request('assets/server.php', calcObjParse)
            .then((res)=>{
                console.log(res);
            })
            .catch(()=>{
                console.log('calc obj mistake')
            })
        closeModal(popupCalcEndClose)
    })

    popupCalc.addEventListener('click', (e)=>{
        if(e.target.classList.contains('balcon_icons_img') || e.target.parentNode.classList.contains('balcon_icons_img')){
           document.querySelectorAll('.balcon_icons_img').forEach((item,i)=>{
            if(item == e.target || item == e.target.parentNode){
                popupCalcBigImg.forEach(item=>{
                    item.classList.remove('show');
                    item.style.margin = '0 auto';
                    item.style.width = '400px';
                    item.style.height = '300px';
                })
                popupCalcBigImg[i].classList.add('show')
            }
           })
        }
    })
 



    function openModal(selector) {
        selector.classList.remove('hide');
        selector.classList.add('show');
    };
    function closeModal(selector){
        selector.classList.remove('show');
        selector.classList.add('hide');
    };
    function calcModalClose(selector){
        selector.addEventListener('click',(e)=>{
            if(e.target == selector || e.target == selector.querySelector('strong')){
                closeModal(selector)
            }
        })
    }
    // popup_calc popup_calc_profile popup_calc_end
})
}
calc()
export default calc;
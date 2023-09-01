// import { forEach } from "core-js/core/array";

function calc(calcObj){
    const popupCalc = document.querySelector('.popup_calc'),
          popupCalcBtn = document.querySelector('.popup_calc_button'),
          popupCalcProfileContent = document.querySelector('.popup_calc_profile'),
          popupCalcProfileBtn = document.querySelector('.popup_calc_profile_button');

    const popupCalcInputs = popupCalc.querySelectorAll('input'),
          popupCalcProfileFormControl = document.querySelector('#view_type');


    popupCalcBtn.addEventListener('click', ()=>{
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
        calcObj.profileType = popupCalcProfileFormControl.value;
        console.log(calcObj)
    });
}


export default calc;
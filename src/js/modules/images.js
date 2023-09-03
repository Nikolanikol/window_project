function images(){
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    bigImg.style.width = '50vh';
    bigImg.style.height = '70vh';

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    



    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target && e.target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path)
            document.body.style.overflow = 'hidden'
        }

        if(e.target && e.target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = ''
        }
    })
}

export default images;
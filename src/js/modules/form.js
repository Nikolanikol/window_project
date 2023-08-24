// import { error, type } from "jquery";

function form(state){
    const forms = document.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input');
        //   console.log(inputs)
        //   console.log(forms)
    const message = {
        loading: 'идет загрузка...',
        sucsess: 'загрузка завершена',
        failure: 'произошла ошибка'
    };
  


    // const postData = async (url, data) => {
    //     document.querySelector('.status').textContent = message.loading;
    //     let res = await fetch(url, {
    //         method: "POST",
    //         body: data
    //     });

    //     return await res.text();
    // };


    let  request = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url,{
            method: 'POST',
            body: data,
            // headers:{
            //     'Content-type': 'multipart/form-data'
            // }
        })
        return await res.text();
    };
    const clearInputs = ()=>{
        inputs.forEach(item=>{
            item.value = '';
        })
    }

    forms.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            // fetch('assets/server.php', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(res =>{
            //     console.log(res)
            // })
            // .catch(()=>{
            //     console.log('false')
            // })


            // const formParse = Object.fromEntries(formData.entries());

            request('assets/server.php', formData) 
                .then((res)=>{
                    console.log(res);
                    statusMessage.textContent = message.sucsess;
                })
                .catch(()=>{
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove()
                    }
                        
                    ,3000);
                });
        });
    });
    
    
    
    
    
}
    

export default form;
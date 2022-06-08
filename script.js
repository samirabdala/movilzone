


    const form = document.getElementById('formu');
    const nombre = document.getElementById('fname');
    const mail= document.getElementById('femail');
    const msj= document.getElementById('ftext');
    const ok = document.getElementById("ok");
    let errnam = document.querySelector("#errname");
    let errmail = document.querySelector("#errmail");
    let errtxt = document.querySelector("#errmsj");
    const regExp = /[a-zA-Z0-9\._-]+@[a-zA-Z0-9\._-]+(\.[a-zA-Z]+)+(\.[a-zA-Z]+)?/gi
    const otrCarct = /[0-9\W]+/g;
    let listNode = document.querySelectorAll('.inp')
    console.log(listNode[1]);

    form.addEventListener('submit',(x)=> {
        x.preventDefault();
    })

    function envioFormulario(){
        if (nombre.value.length < 0 || nombre.value.trim() == ''){
            errnam.classList.replace("pp","err")
            listNode[0].classList.replace("inp","errInp")
        } else {
            errnam.classList.replace("err","pp")
        }

        if ((mail.value.length < 1 || mail.value.trim() == '') || regExp.test(mail.value)){
            errmail.classList.replace("pp","err")  
            listNode[1].classList.replace("inp","errInp")
        }else {    
            errmail.classList.replace("err","pp")
        }

       if (msj.value.length < 1 || msj.value.trim() == ''){            
            errtxt.classList.replace("pp","err")    
            listNode[2].classList.replace("ftext","errInp")
        }else {            
            errtxt.classList.replace("err","pp")           
        }
        
        if(nombre.value != 0 && mail.value != 0 && msj.value.length >= 10 && regExp.test(mail.value)){
            ok.innerHTML = "Gracias " + nombre.value + ". Tu formulario se envio exitosamente."
            
            listNode[0].classList.replace("errInp","inp")
            listNode[1].classList.replace("errInp","inp")
            listNode[2].classList.replace("errInp","inp")
            form.reset();
            ok.classList.replace("bfSend","sendOk")


        }

    }

    function typingname(){
        let xx = document.querySelector("#fname")
        let err = document.querySelector("#errname");
            xx.addEventListener("keyup",()=>{
                if(nombre.value.length>1){
                    err.classList.replace("err","pp")
                }else{
                    err.classList.replace("pp","err")
                }     
                      
             });
    }
    function typingMail(){
        let xx = document.querySelector("#femail")
        let err = document.querySelector("#errmail");
            
            xx.addEventListener("keyup",()=>{
                if(mail.value.length>1 && regExp.test(mail.value)){
                    err.classList.replace("err","pp")
                }else{
                    err.classList.replace("pp","err")
                }
            });
    }
    function typingTxt(){
        let xx = document.querySelector("#ftext")
        let err = document.querySelector("#errmsj");
        
            xx.addEventListener("keyup",()=>{
                if(msj.value.length>1){
                    err.classList.replace("err","pp")
                }else{
                    err.classList.replace("pp","err")
                }            
            });
    }
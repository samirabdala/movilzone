


    const form = document.getElementById('formu');
    const nombre = document.getElementById('fname');
    const mail= document.getElementById('femail');
    const msj= document.getElementById('ftext');
    const ok = document.getElementById("ok");
    let listNode = document.querySelectorAll('.inp')
    console.log(listNode[1]);

    form.addEventListener('submit',(x)=> {
        x.preventDefault();
    })

    function envioFormulario(){
        if (nombre.value.length < 1 || nombre.value.trim() == ''){
            let errnam = document.querySelector("#errname");
            errnam.classList.replace("pp","err")
            listNode[0].classList.replace("inp","errInp")
        } else {
            let errnam = document.querySelector("#errname");
            errnam.classList.replace("err","pp")

        }

        if (mail.value.length < 1 || mail.value.trim() == ''){
            let errmail = document.querySelector("#errmail");
            errmail.classList.replace("pp","err")  
            listNode[1].classList.replace("inp","errInp")

        }else {
            let errmail = document.querySelector("#errmail");
            errmail.classList.replace("err","pp")

        }
        if (msj.value.length < 1 || msj.value.trim() == ''){
            let errtxt = document.querySelector("#errmsj");
            errtxt.classList.replace("pp","err")    
            listNode[2].classList.replace("ftext","errInp")

        }else {
            let errtxt = document.querySelector("#errmsj");
            errtxt.classList.replace("err","pp")
            
        }
        
        if(nombre.value != 0 && mail.value != 0 && msj.value.length >= 10){
            ok.innerHTML = "Gracias " + nombre.value + ". Tu formulario se envio exitosamente."
            form.reset();
            listNode[0].classList.replace("errInp","inp")
            listNode[1].classList.replace("errInp","inp")
            listNode[2].classList.replace("errInp","inp")


        }

    }

    function typingname(){
        let xx = document.querySelector("#fname")
        let err = document.querySelector("#errname");
            xx.addEventListener("keydown",(x)=>{
                err.classList.replace("err","pp")
            });
    }
    function typingMail(){
        let xx = document.querySelector("#femail")
        let err = document.querySelector("#errmail");
        
            xx.addEventListener("keydown",(x)=>{
                err.classList.replace("err","pp")
            });
    }
    function typingTxt(){
        let xx = document.querySelector("#ftext")
        let err = document.querySelector("#errmsj");
        
            xx.addEventListener("keydown",(x)=>{
                err.classList.replace("err","pp")
            });
    }
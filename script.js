const formu = document.querySelector('.formulario');
let inpts = document.querySelectorAll('.inp');
const ps = document.querySelectorAll('p')
const la1 = document.querySelector('.uno')
const in1 = document.querySelector('.one')
const la2 = document.querySelector('.dos')
const in2 = document.querySelector('.two')
const la3 = document.querySelector('.tres')
const in3 = document.querySelector('.tree')

const regExp2 = /([^A-Za-z0-9\.@_-])+/
const regExp = /([a-zA-Z0-9\._-]+@[a-zA-Z0-9\._-]+(\.[a-zA-Z]+)+(\.[a-zA-Z]+)?)/i
const otrCarct = /[0-9\W]+/;
const num =/[0-9]+/
let ox = document.createElement('h1');
checkNomb = 0, checkMail = 0, checkTxt = 0;
formu.addEventListener('submit',(e) => {
    e.preventDefault();
})
inpts[0].addEventListener('keyup',(x) => {
    if(otrCarct.test(inpts[0].value)){
        ps[0].textContent = 'Ingrese un nombre valido.';
        la1.classList.replace('onela','errLabl');
        checkNomb = 0;
    } else { 
        if(!(otrCarct.test(inpts[0].value))){
            ps[0].textContent = '';
        la1.classList.replace('errLabl','onela');

        }
    }   
});

inpts[1].addEventListener('keyup', () =>{
    if(regExp2.test(inpts[1].value)){
        ps[1].textContent = 'Caracter especial no valido, solo se aceptan "." "-" "_" .';
        la2.classList.replace('onela','errLabl');
        checkMail = 0;
    } else {
        if(!(regExp2.test(inpts[1].value))){
            ps[1].textContent = '';
            la2.classList.replace('errLabl','onela');

        }
    }
});

function val(){
    
     
    if(inpts[0].value.length == 0){
        la1.classList.replace('onela','errLabl');        
        ps[0].textContent = 'Debe completar este campo.';
        in1.classList.replace('inp','errInp');       

    } else {
        if((otrCarct.test(inpts[0].value)) || (inpts[0].value.length >20 )) {
            ps[0].textContent = 'Campo debe ser menor a 20 caracteres y solo letras. ';
            checkNomb=0;
            la1.classList.replace('onela','errLabl');
        } else {
            checkNomb=1;
            console.log(checkNomb)
            la1.classList.replace('errLabl','onela');
            in1.classList.replace('errInp','inp');       

        }
    }
    
    if(inpts[1].value.length == 0){
        la2.classList.replace('onela','errLabl');        
        ps[1].textContent = 'Debe completar este campo.';
        in2.classList.replace('inp','errInp');       

    } else {
        if(!(regExp.test(inpts[1].value)) && inpts[1].value.length > 0){
            ps[1].textContent = 'Ingrese un mail valido'
            checkMail=0;
            la2.classList.replace('onela','errLabl');
    
        } else {
            in2.classList.replace('errInp','inp');       
            ps[1].textContent = '';
            checkMail=1;
            la2.classList.replace('errLabl','onela');
    
        }
    }
    
    
    if(inpts[2].value.length == 0){
        la3.classList.replace('onela','errLabl'); 
        ps[2].textContent = 'Debe completar este campo.';
        in3.classList.replace('ftext','errtext');       

    } else { if (inpts[2].value.length < 20) {
                ps[2].textContent = 'El mensaje debe contener mas de 20 caracteres.';
                checkTxt=0;
                 la3.classList.replace('onela','errLabl');
            } else{       
                in3.classList.replace('errtext','ftext');       
                ps[2].textContent = ''
                 checkTxt=1;
                la3.classList.replace('errLabl','onela');

            }
        }
    if(checkNomb == 1 && (checkMail == 1 || checkMail == 2) && checkTxt == 1 ) {
        ps[3].className.replace("msj","send-ok");
        ps[3].appendChild(ox);
        ox.innerHTML = 'Muchas gracias ' + inpts[0].value + ' por contactarte, pronto nos comunicaremos contigo. ';

        formu.reset();
    }

}




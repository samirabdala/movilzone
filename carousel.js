const imagenes = ['/imag/img.1]','imag/img.2]','imag/img.3]','imag/img.4]','imag/img.5]'];
const contn = document.querySelector('.contCarr');

function carro(){
    let cont=0;

    contn.addEventListener('click', ev =>{
        const next = document.querySelector('.nextBot');
        const back = document.querySelector('.backBot');
        let imgn = document.getElementsByClassName('.unindx')
        const x = ev.target;
        vv = document.querySelector('unindix')
        vv.src ='imagenes[1]';
        if(x == back.value){
            console.log(x + "back")
            imgn.src = imagenes[cont-1];

            if(cont > 0){
                imgn.src = imagenes[cont-1];
                cont--;
            } else{
                imgn.src = imagenes[imagenes.length-1];
                cont = imagenes.length-1;

            }
        } else if (x == next){
            console.log(x + "next")
            imgn.src = imagenes[cont + 1];
            if(cont < imagenes[imagenes.length - 1]){
                
                cont++;
            } else{
                imgn.src = imagenes[0];
                cont = 0;

            }

        }

    });
    
}



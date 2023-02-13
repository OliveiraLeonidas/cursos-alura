function tocaSom(IdElementoAudio){
    document.querySelector(IdElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//const listaDeSons = document.querySelectorAll('audio');

let cont = 0;
while(cont < listaDeTeclas.length){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];

    //template String
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function (){ //funcao anonima
        tocaSom(idAudio);
    }
    cont++;
    console.log(cont);
}

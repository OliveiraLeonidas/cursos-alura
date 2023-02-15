const listaDeTeclas = document.querySelectorAll('.tecla');

for(let cont = 0; cont < listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template String
    
    tecla.onclick = function (){ //funcao anonima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento)
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}

function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } 
    else {
        console.log("elemento não encontrado ou selector inválido!")
    }
}

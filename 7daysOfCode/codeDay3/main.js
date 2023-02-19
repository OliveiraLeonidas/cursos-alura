let back = document.querySelector("#back")
let front = document.querySelector("#front");
let perguntas = document.querySelector(".container__perguntas")

back.onclick = function () {
    console.log("clicou no backend");
    perguntas.classList.remove('pergunta1');
    perguntas.innerHTML = `<div>` + '<h2 class="texto_pergunta_1">'+ "Definindo caminho" + '</h2>' + '<p class="subtitulo">' + "Escolhe entre uma das duas linguagens de programação, digite 1 para C# ou 2 para Java: " + '</p>' + '<input type=""text class="resposta1">'+ '<button id="btn" class="container__roadpmap__card__button">' + "Enviar" + '</button>' + '</div>';
    
    back.classList.add('desabilitado');
    front.classList.add('desabilitado');
    
    let resposta1 = document.querySelector(".resposta1");
    let enviar = document.querySelector("#btn");

    enviar.onclick = function () {
        enviar.classList.add('desabilitado')
        if(resposta1.value == 1) {
            perguntas.innerHTML = perguntas.innerHTML + '<div>' + `Parabéns por escolher a linguagem C#` + '</div>';
        }else if(resposta1.value == 2){
            perguntas.innerHTML = perguntas.innerHTML + '<div>' + `Parabéns por escolher a linguagem Java` + '</div>';
        }
        escolhaTres()
    }
};

front.onclick = function() {
    console.log("clicou no front");
    perguntas.classList.remove('pergunta1');
    perguntas.innerHTML = `<div>` + '<h2 class="texto_pergunta_1">'+ "Definindo caminho" + '</h2>' + '<p class="subtitulo">' + "Escolhe entre uma das duas frameworks, digite 1 ReactJs para ou 2 para VueJs: " + '</p>' + '<input type=""text class="resposta1">'+ '<button id="btn" class="container__roadpmap__card__button">' + "Enviar" + '</button>' + '</div>';
    
    back.classList.add('desabilitado');
    front.classList.add('desabilitado');
    
    let resposta1 = document.querySelector(".resposta1");
    let enviar = document.querySelector("#btn");

    enviar.onclick = function () {
        enviar.classList.add('desabilitado')
        if(resposta1.value == 1) {
            perguntas.innerHTML = perguntas.innerHTML + '<div>' + `Parabéns por escolher o framework React` + '</div>';
        }else if(resposta1.value == 2){
            perguntas.innerHTML = perguntas.innerHTML + '<div>' + `Parabéns por escolher o framework Vue` + '</div>';
        }
        escolhaTres()
    }
};

function escolhaTres () {
    perguntas.innerHTML = perguntas.innerHTML + '<div id="escolha3">' + "Você deseja continuar se especializando na área escolhida, digite  1, ou digite 2 para se tornar um dev Fullstack?" + '</div>' + '<input type="text" id="resposta3">' + '<button class="container__roadpmap__card__button" id="btn3">' + "Enviar" + '</button>';
    let resposta3 = document.querySelector("#resposta3");
    let enviar = document.querySelector('#btn3')
    
    enviar.onclick = function () {
        enviar.classList.add('desabilitado')
        if(resposta3.value == 1) {
            perguntas.innerHTML +=  '<div>' + "Você escolheu continuar se especializando! " + '</div>' + '<p class="container__roadmap__card__text">' + `Pesquise mais sobre as ferramentas escolhidas` + '</p>' + '<p class="novasRespostas">' + '</p>';
            setTimeout(listando, 1000)
        }else if (resposta3.value == 2){
            perguntas.innerHTML +=  '<div>' + "Você escolheu se tornar um dev Fullstack!" + '</div>' + '<p class="container__roadmap__card__text">' + `Neste caso, é necessário criar uma base em outras áreas do Back-end e do Front-end.` + '</p>' + '<p class="novasRespostas">' + '</p>';
            setTimeout(listando, 1000)
        }
        
    }
}   

function listando() {
    let listaTec = [];
    let novaTec;
    
    do {
        novaTec = prompt(" Tem mais alguma tecnologias que deseja aprender, digite o nome para continuar listando ou digite ok para finalizar a lista.");
        listaTec.push(novaTec);
        console.log(listaTec);
        novaTec = novaTec.toLowerCase();
    } while (novaTec != 'ok');
    
    let listarTecs = document.querySelector('.novasRespostas');
    listaTec.pop();
    listarTecs.innerHTML = `Tecnologias escolhidas: ${listaTec}`
}




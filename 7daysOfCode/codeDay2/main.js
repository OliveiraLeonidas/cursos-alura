const nome = document.querySelector('#nome');
const idade = document.querySelector("#idade");
const programacao = document.querySelector('#programacao');

function click() {
    
    let botaoEnviar = document.getElementById("btn");
    let mostraResposta = document.querySelector("#resposta");
    let mensagemFinal = document.querySelector(".container__formulario");
    
    botaoEnviar.onclick = function() {
        mostraResposta.innerHTML = '<p>' + `Óla ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${programacao.value}.` + '</p>';
        
        setTimeout(novaPergunta,1000);
    };
    
    
    function novaPergunta() {
        mensagemFinal.innerHTML = '<div id="blocoResposta2" >' + `Você está gostando de estudar ${programacao.value}, responda com 1 para SIM, e 2 para NÃO.`+ '<input type="number" id="inputResposta">' + '<button id="btn2" class="container__formulario__botao">' + 'enviar' + '</button>' + '</div>'
        
        let botaoEnviar2 = document.getElementById("btn2");
        let resposta = document.querySelector('#inputResposta');

        botaoEnviar2.onclick = function (){
            if (resposta.value == 1) {
                mensagemFinal.innerHTML = '<div class="feedback">' + ` Muito bom! Continue estudando e você terá muito sucesso. ` + '</div>'
               
           }else if (resposta.value == 2) {
                mensagemFinal.innerHTML = '<div class="feedback">' + ` Ahh que pena... Já tentou aprender outras linguagens? ` + '</div>'
           };
        };
    };
    
}; click();

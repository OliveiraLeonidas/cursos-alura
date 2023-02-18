const nome = document.querySelector('#nome');
const idade = document.querySelector("#idade");
const programacao = document.querySelector('#programacao');

function click() {
    
    let botaoEnviar = document.getElementById("btn");
    let mostraResposta = document.querySelector("#resposta");

    botaoEnviar.onclick = function() {
        mostraResposta.innerHTML = '<p>' + `Óla, ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${programacao.value}` +'</p>';
        
        setTimeout(novaPergunta, 2000)
    };
    

    function novaPergunta() {
        let mensagemFinal = document.querySelector(".container__formulario");
        let resposta = prompt(`Você está gostando de estudar ${programacao.value}, responda com 1 para SIM, e 2 para NÃO.`);


        if (resposta == 1) {
            mensagemFinal.innerHTML = '<div>' + ` Muito bom! Continue estudando e você terá muito sucesso. ` + '</div>'
            
        }else if (resposta == 2) {
            mensagemFinal.innerHTML = '<div>' + ` Ahh que pena... Já tentou aprender outras linguagens? ` + '</div>'
        };
    };
    
}; click();

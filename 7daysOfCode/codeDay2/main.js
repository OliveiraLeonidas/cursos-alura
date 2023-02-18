const nome = document.querySelector('#nome');
const idade = document.querySelector("#idade");
const programacao = document.querySelector('#programacao');

function click() {
    
    let botaoEnviar = document.getElementById("btn");
    let mostraResposta = document.querySelector("#resposta");

    botaoEnviar.onclick = function() {
        
        mostraResposta.innerHTML = '<p>' + `Óla, ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${programacao.value}` +'</p>';

        
        
        setTimeout(novaPergunta, 10000)

        //nome.value = ""; idade.value = ""; programacao.value = "";

    };
    

    function novaPergunta() {
        
        let pergunta = document.querySelector(".container__formulario");
        let mensagemFinal = document.querySelector(".container__formulario");
        
        // pergunta.innerHTML = '<div>' + `Você está gostando de estudar ${programacao.value}, responda com 1 para SIM, e 2 para NÃO.`
        
        let resposta = prompt(`Você está gostando de estudar ${programacao.value}, responda com 1 para SIM, e 2 para NÃO.`)
        
        console.log(resposta)
        //let respostaValor = document.querySelector('input[type="number"]');

        if (resposta == 1) {
            mensagemFinal.innerHTML = '<div>' + ` Muito bom! Continue estudando e você terá muito sucesso. ` + '</div>'
            console.log("Muito bom! Continue estudando e você terá muito sucesso.")
        }else if (resposta == 2) {
            mensagemFinal.innerHTML = '<div>' + ` Ahh que pena... Já tentou aprender outras linguagens? ` + '</div>'
            console.log("Ahh que pena... Já tentou aprender outras linguagens?")
        }
    }
    
}



click();

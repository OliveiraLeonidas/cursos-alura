let testar = document.querySelector('#btnTestar');
let btnStart = document.querySelector('#btnTestar');
let numSecreto = 7
let feedback = document.querySelector('.container__box__jogo');
let cont = 2;


btnStart.onclick = start
function start() {    
    for (let i =0; i<=2;i++){
        let tentativa = prompt(`Digite a sua ${i+1}ª tentativa`);
        if(tentativa == numSecreto){
            feedback.innerHTML += '<div>' + `Você acertou, o número é ${numSecreto}` + '</div>';
            //replay()
            //break;
        }else if (i == 2) {
            feedback.innerHTML += '<div>' + `Você infelizmente não conseguiu dessa vez.` + '</div>';
            //replay()
            //break
        }else if (tentativa != numSecreto){
            alert(`Você errou, tente mais ${cont--}`);
            //replay()
        }
    }
    replay()
}

function replay() {
    feedback.innerHTML += '<button id="btnReplay">' + `Jogar novamente` + '</button>';
    let btnReplay = document.querySelector('#btnReplay');
    btnReplay.onclick = () => window.location.reload(true);
}


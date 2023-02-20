let testar = document.querySelector('#btnTestar');
let btnStart = document.querySelector('#btnTestar');
let numSecreto =Math.floor(Math.random() * (10 - 0 + 1) + 0);
let feedback = document.querySelector('.container__box__jogo');
let cont = 2;



//btnStart.onclick = start;

btnStart.onclick = start
function start() {    
    for (let i =0; i<=2;i++){
        let tentativa = prompt(`Digite a sua ${i+1}ª tentativa`);
        if(tentativa == numSecreto){
            feedback.innerHTML += '<div>' + `Você acertou, o número é ${numSecreto}` + '</div>';

            break;
        }else if (i == 2) {
            feedback.innerHTML += '<div>' + `Você infelizmente não conseguiu dessa vez.` + '</div>';

        }else if (tentativa != numSecreto){
            alert(`Você errou, tente mais ${cont--}`);


        }
    }
}




const soma = (a,b) => a+b;
const subtracao = (a,b) => a-b;
const multi = (a,b) => a*b;
const divisao = (a,b) => a/b;

let entrada;
let num1;
let num2;

while (entrada != 0){
    entrada = prompt(`Qual operação deseja fazer?
   Digite o número da respectiva operação
   soma | 1
   subtração | 2
   multiplicação | 3
   divisão | 4
   sair | 0
   `)
   if(entrada == 0){
    break;
   } else if(entrada == 1) {
    recebeValor();
    alert(`O resultado da operação é ${soma(num1, num2)}`)
   }else if (entrada == 2){
    recebeValor()
    alert(`O resultado da operação é ${subtracao(num1, num2)}`)
   }else if (entrada == 3){
    recebeValor()
    alert(`O resultado da operação é ${multi(num1, num2)}`)
   }else if(entrada == 4){
    recebeValor()
    alert(`O resultado da operação é ${divisao(num1, num2)}`)
   }
}


function recebeValor () {
    num1 = prompt("Digite o primeiro número: ")
    num2 = prompt("Digite o segundo número: ")
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
}
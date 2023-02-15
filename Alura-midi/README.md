# Alura Midi

É um instrumento musical para navegador, com 9 teclas reproduzem audio de cada uma.

![](C:\Users\55199\AppData\Roaming\marktext\images\2023-02-14-16-48-31-image.png)

## Técnicas utilizadas

O Javascript é a linguagem que utilizamos para dar dinamismo para nosso instrumento online.

Inicialmente criamos uma função que recebe um argumento `elementoAudio`, dentro desta declaramos uma variável do tipo `const` e atribuimos a ela, através do `querySelector`, passando para ela o argumento da função principal, este elemento será o `Id` das tags `<audio>`.

Também iremos implementar um tratamento para caso a função seja utilizada chamando outros tipos de elementos ou seletores:

```javascript
function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } 
    else {
        console.log("elemento não encontrado ou selector inválido!")
    }
}
```

Agora para que possamos encontrar todas as teclas, utilizamos o `querySelectorAll`, que vai buscar todos os elementos de um tipo descrito no argumento, exemplo: 

Sendo assim, utilizaremos para buscar a seguinte descrição `querySelectorAll('.tecla')` ----> assim como no `CSS`, para definir que estamos buscando o tipo classe, precisamos colocar o ponto antes do nome dela;

<img src="file:///C:/Users/55199/AppData/Roaming/marktext/images/2023-02-14-17-20-35-image.png" title="" alt="" width="353">

 vamos atribuir para uma variável do tipo `const` este seletor, resultando nesta linha:

`const listaDeTeclas = document.querySelectorAll('.tecla')`

isso fará com que seja criado uma lista, a qual demos o nome de "listaDeTeclas".

No console para melhor entendimento, basta digitar o nome da constante e será exibido a lista abaixo:

<img src="file:///C:/Users/55199/AppData/Roaming/marktext/images/2023-02-14-17-21-30-image.png" title="" alt="" width="578">

`length`: método disponível em listas para verificar o tamanho desta, lembrando que a contagem sempre começa no zero em listas; podemos utiliza-lá como uma lista comum, desta forma, passando no console do navegador no DevTools (atalho: F12), que irá retornar o elemento do respectivo index:

![](C:\Users\55199\AppData\Roaming\marktext\images\2023-02-14-17-39-01-image.png)

Agora precisamos percorrer esta lista para que possamos acessar cada item dela, para isto precisaremos utilizar uma estrutura de repetição e neste caso usaremos o `for` , e cada iteração ele será incrementado:

```javascript
for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    //a cada iteração irá retornar cada elemento
}
```

Vamos adicionar cada tecla, mas antes iremos voltar ao console; quando criamos uma lista temos algumas propriedades que podem ser usadas, neste caso utilizaremos o `classList` que exibe todas as classes de um elemento, e como podemos observar abaixo, a index 1, no caso do nosso código, sempre irá conter o tipo de tecla

![](C:\Users\55199\AppData\Roaming\marktext\images\2023-02-14-17-48-17-image.png)

Dentro do `classList`, vamos acessar o item, que nos retornará o tipo de tecla;

![](C:\Users\55199\AppData\Roaming\marktext\images\2023-02-14-17-51-20-image.png)

Precisamos unir estes dois conceitos

```js
for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    //a cada iteração vai retornar cada elemento

    const instrumento = listaDeTeclas[cont].classList[1]
    //a cada iteração vai retornar cada tipo de tecla do elemento
}
```

também é necessário que o valor do `id` seja recuperado para podermos utiliza-lo e tornar o código sem repetições; então precisamos de uma variável que armazene este valor a cada iteração, neste caso usaremos o que chamamos template string (uma variável com texto dinâmico), observe abaixo:



```javascript
for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    //a cada iteração vai retornar cada elemento

    const instrumento = listaDeTeclas[cont].classList[1]
    //a cada iteração vai retornar cada tipo de tecla do elemento

    const idAudio = `#som${instrumento}`
    /*a cada iteração vai retornar o id do aúdio com a respectiva tecla
    exemplo: 
        listaDeTeclas[0].classList[1] == tecla_pom
        desta forma, 
        idAudio == `#som_tecla_pom`
    */
}
```



### Implementação dos eventos do mouse e do teclado

agora vamos implementar um algoritmo para a cada click do  mouse ou tecla 'enter' ou 'space' pressionado toque o respectivo som; no javascript temos uma funcionalidade espefícica para este tipo de evento, chamado de `onclick` para o mouse e `onkeyup` ou `onkeydown`.



Para esta implementação utilizaremos o que no javascript é chamado de função anônima. (Lembrando que só podemos utilizar as funções anônimas em eventos)

```javascript
for(let cont = 0; cont < listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = listaDeTeclas[cont].classList[1];
    const idAudio = `#som${instrumento}`;
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } 
    else {
        console.log("elemento não encontrado ou selector inválido!");
    }
}
```



Para utilizarmos o teclado físico precisamos utilizar o mesmo tipo de evento atribuindo uma função anônima, porém desta vez, precisaremos passar como argumento desta função uma variável event; exemplo abaixo onde verificamos como um objeto o evento acionado a partir do teclado, também podemos observar que o `code: "Space"`, exibe a tecla que utilzaremos para evitar tipos de erros

![](C:\Users\55199\AppData\Roaming\marktext\images\2023-02-14-23-10-17-image.png)



Agora que já sabemos qual o código utilizaremos para limitar as teclas que podem ser acionadas no teclado;

`code: "Space"`

`code: "Enter"`



precisamos modificar o `HTML` e o `CSS`, tornando-os dinâmicos, para isso iremos trabalhar diretamento com as classes, especificando o que estavamos fazendo antes



```javascript
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
            tecla.classList.add('ativa'); /*adiciona a classe 'ativa', ao 
         tecla pressionada */
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')/*remove a classe 'ativa', ao 
         tecla pressionada */
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


```

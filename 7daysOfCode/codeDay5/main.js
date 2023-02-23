let lista = document.querySelector('#lista')

//Listas
let frutas = [];
let congelados = [];
let laticinios = [];
let doces = [];

let cont = 0;

//let categoria = select.options[select.selectedIndex].value;
let produto = prompt("Deseja adicionar itens a sua lista de compras? Digite SIM ou NAO.");
let categoria;
if (produto == 'SIM') {

    do {
        produto = prompt("Deseja adicionar mais itens? digite o nome do produto ou NAO para finalizar a lista.");
        if(produto == 'NAO'){
            exibeLista();
            break;
        }
        categoria = prompt(`Qual a categoria do item: 
            frutas,
            congelados,
            laticínios ou doces
        `);
        if (categoria == 'frutas'){
            frutas.push(produto);
        } else if (categoria == 'congelados') {
            congelados.push(produto);
        }else if (categoria == 'laticinios') {
            laticinios.push(produto);
        }else if (categoria == 'doces'){
            doces.push(produto);
        }
    }
    while (produto != 'NAO')
    console.log(frutas)
    console.log(congelados)
    console.log(laticinios)
    console.log(doces)
    
} else {
    alert('Aguardamos sua próxima lista.')
};

function exibeLista() {
    lista.innerHTML += '<p>' + "Frutas: "  + '</p>';
    lista.innerHTML += '<li>' + `${frutas}`  + '</li>';

    lista.innerHTML += '<p>' + "Congelados: "  + '</p>';
    lista.innerHTML += '<li>' + `${congelados}`  + '</li>';

    lista.innerHTML += '<p>' + "Laticínios: "  + '</p>';
    lista.innerHTML += '<li>' + `${laticinios}`  + '</li>';

    lista.innerHTML += '<p>' + "Doces: "  + '</p>';
    lista.innerHTML += '<li>' + `${doces}`  + '</li>';
}

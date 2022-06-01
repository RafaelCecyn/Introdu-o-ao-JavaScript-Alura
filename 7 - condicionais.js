console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1); // removendo item

// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarcando: \n\n");
if(idadeComprador>= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador>18);
// console.log(idadeComprador>=18);
// console.log(idadeComprador<18);
// console.log(idadeComprador<=18);
// console.log(idadeComprador==18);

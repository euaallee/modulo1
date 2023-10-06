const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maior = 0;
let impa = [];

// 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log() .
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("----------------------------------------------------");
// 2. Some todos os valores contidos no array e imprima o resultado.
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
}
console.log(`Soma é: ${sum}`);
console.log("----------------------------------------------------");
// 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os
// elementos dividido pelo número total de elementos
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i]; 
}
let media = sum/numbers.length;
console.log(`Média aritimetica é: ${media}`);
console.log("----------------------------------------------------");
// 4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior
// que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a
// mensagem “O valor da média aritmética é menor ou igual a 20”.
if(media > 20){
     console.log("O valor da média aritmética é maior que 20");
} else {
     console.log("O valor da média aritmética é menor ou igual a 20");
}
console.log("----------------------------------------------------");
// 5. Utilizando for , descubra o maior valor contido no array e imprima-o.
for (var i = 0; i < numbers.length; i++) {
   if ( numbers[i] > maior ) {
      maior = numbers[i];
   }
}
console.log(maior);
console.log("----------------------------------------------------");
// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem:
// “Nenhum valor ímpar encontrado”.
for(let i of numbers){
    if ((i%2) !== 0){
        impa.push(i);
    } else {
        console.log("Nenhum valor ímpar encontrado");
    }
}
console.log(impa);
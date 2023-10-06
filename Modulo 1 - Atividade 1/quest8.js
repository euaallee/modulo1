function somaNumPrev(num) {
    let soma = 0;

    for (let i = 0; i <= num; i++){
        soma += num-i;
    }

    return soma;
}

console.log(somaNumPrev(10));
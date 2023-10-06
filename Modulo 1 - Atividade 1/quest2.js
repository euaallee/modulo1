function seqFibonacci(num){
    let penultimo = 0, ultimo = 1;
    let numero;
    
    if(num <= 2){
        numero = num-1;
    } else {
        for(let i = 2; i <= num; i++){
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
        };
    }

    if(numero == 0){
        numero = 1;
    }
    
    return numero;
};

const result = seqFibonacci(5);
console.log(result);

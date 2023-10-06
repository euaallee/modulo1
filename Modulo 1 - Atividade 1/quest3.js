function somarSoNumeros(arrayQualquer){
    let soma = 0;

    for(let index = 0; index < arrayQualquer.length; index++){
        if(typeof arrayQualquer[index] !== 'number'){
            return `todos os elementos do array tem que ser números!`;
        }

        soma += arrayQualquer[index];
    }

    return soma;
}

const meuArray1 = [1, 2, 3, '123', 4, 5];
const result1 = somarSoNumeros(meuArray1);
console.log(result1);

const meuArray2 = [1, 2, 3, 4, 5];
const result2 = somarSoNumeros(meuArray2);
console.log(result2);

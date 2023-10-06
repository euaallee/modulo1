function vogais(aeiou) {
    let vogaisCount = 0;
    aeiou.toLowerCase();

    for (let i = 0; i < aeiou.length; i++) {
        if(aeiou[i] == "a" || aeiou[i] == "e" || aeiou[i] == "i" || aeiou[i] == "o" || aeiou[i] == "u"){
            vogaisCount++;
        };

    }
    return vogaisCount;
}

const texto = "Crie uma função que encontra a maior palavra em uma frase";
const result = vogais(texto);
console.log(result); // 23
function maiorWordFrase(frase) {
    let words = frase.split(" ");
    let maiorWord = "";

    for( let i = 0; i < words.length; i++){
        if (words[i].length > maiorWord.length){
            maiorWord = words[i].replace(/[;:.,!?]/g, '');
        }
    };

    return maiorWord;
}

const frases = "Três regras: não prometa nada quando estiver feliz; não responda nada quando estiver irritado; não decida nada quando estiver triste.";
const results = maiorWordFrase(frases);
console.log(results);
function count(vowel, string) {
    let vowelCount = 0;
    let upCase = string.toUpperCase();

    for (let i = 0; i < string.length; i++) {
        if(upCase[i] == vowel.toUpperCase()){
            vowelCount++;
        };

    }
    return vowelCount;
}

const vowel = "a";
const string = "Alexander Joshua Lima Pereira";
const result = count(vowel, string);
console.log(result); // 23
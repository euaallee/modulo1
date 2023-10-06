let numFatoral = 9;

if (numFatoral === 0 || numFatoral === 1){
    return 1;
}
for (var i = numFatoral - 1; i >= 1; i--) {
    numFatoral *= i;
}
console.log(numFatoral);
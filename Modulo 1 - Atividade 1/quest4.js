function maiorNumArray(array) {
    let maiorArray = Math.max.apply(null, array);
    
    return maiorArray;   
}

const myArray = [1, 2, 23, 10000, 3, 43, 4, 100,];
const result = maiorNumArray(myArray);
console.log(result);
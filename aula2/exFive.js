const listNum = []

const numOne = Math.floor(Math.random() * (10 - 1 + 1)) + 1
const numTwo = Math.floor(Math.random() * (10 - 1 + 1)) + 1
const numThree = Math.floor(Math.random() * (10 - 1 + 1)) + 1

listNum.push(numOne)
listNum.push(numTwo)
listNum.push(numThree)

const maiorNum = Math.max(...listNum)

console.log(listNum)
console.log(maiorNum)
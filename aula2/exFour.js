var note1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var note2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
var media = (note1 + note2)/2

console.log(`Nota 1: ${note1} | Nota 2: ${note2}`)
console.log(`O aluno tem ${media} de media`)

if(media >= 7){
    console.log("Aprovado")
}if(media < 7){
    console.log("Reprovado")
}if(media == 10){
    console.log("Aprovado com Distinção")
}
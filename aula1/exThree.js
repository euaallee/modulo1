var media = Math.floor(Math.random() * (100 - 1 + 1)) + 1

console.log(`O candidato ou candidata tirou ${media}`)

if(media >= 80){
    const message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!'
    console.log(message)
}if(media < 80 && media >= 60){
    const message = 'Você está na nossa lista de espera'
    console.log(message)
}if(media < 60){
    const message = 'Infelizmente, você reprovou.'
    console.log(message)
}
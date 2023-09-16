const salarioFuncionario = Math.floor(Math.random() * (10000 - 1 + 1)) + 1

if(salarioFuncionario <= 280){
    console.log(`Valor Inicial R$${salarioFuncionario.toLocaleString()}`)
    const salarioReajustado = salarioFuncionario + (salarioFuncionario * 0.2)
    const porcentagemSalario = (salarioReajustado * 100)/salarioFuncionario

    console.log(`Percentual de aumento: ${porcentagemSalario.toLocaleString()}%`)
    
    console.log(`Valor do aumento: R$${(salarioReajustado - salarioFuncionario).toLocaleString()}`)

    console.log(`valor do novo salario: R$${(salarioFuncionario + (salarioReajustado - salarioFuncionario)).toLocaleString()}`)
}if(salarioFuncionario >= 281 && salarioFuncionario <= 700){
    console.log(`Valor Inicial R$${salarioFuncionario.toLocaleString()}`)
    const salarioReajustado = salarioFuncionario + (salarioFuncionario * 0.2)
    const porcentagemSalario = (salarioReajustado * 100)/salarioFuncionario

    console.log(`Percentual de aumento: ${porcentagemSalario.toLocaleString()}%`)
    
    console.log(`Valor do aumento: R$${(salarioReajustado - salarioFuncionario).toLocaleString()}`)

    console.log(`valor do novo salario: R$${(salarioFuncionario + (salarioReajustado - salarioFuncionario)).toLocaleString()}`)
}if(salarioFuncionario >= 701 && salarioFuncionario <= 1500){
    console.log(`Valor Inicial R$${salarioFuncionario.toLocaleString()}`)
    const salarioReajustado = salarioFuncionario + (salarioFuncionario * 0.2)
    const porcentagemSalario = (salarioReajustado * 100)/salarioFuncionario

    console.log(`Percentual de aumento: ${porcentagemSalario.toLocaleString()}%`)
    
    console.log(`Valor do aumento: R$${(salarioReajustado - salarioFuncionario).toLocaleString()}`)

    console.log(`valor do novo salario: R$${(salarioFuncionario + (salarioReajustado - salarioFuncionario)).toLocaleString()}`)
}if(salarioFuncionario >= 1501){
    console.log(`Valor Inicial R$${salarioFuncionario.toLocaleString()}`)
    const salarioReajustado = salarioFuncionario + (salarioFuncionario * 0.2)
    const porcentagemSalario = (salarioReajustado * 100)/salarioFuncionario

    console.log(`Percentual de aumento: ${porcentagemSalario.toLocaleString()}%`)
    
    console.log(`Valor do aumento: R$${(salarioReajustado - salarioFuncionario).toLocaleString()}`)

    console.log(`valor do novo salario: R$${(salarioFuncionario + (salarioReajustado - salarioFuncionario)).toLocaleString()}`)
}
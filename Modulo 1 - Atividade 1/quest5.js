function raizes(a, b, c) {
    const deltaResults = (b**2)+(-4*a*c);

    if(deltaResults <= 0){
        return deltaResults;
    };

    const xRaiz = Math.sqrt(deltaResults);
    const xUmResults = (-b + xRaiz)/ (2*a);
    const xDoisResults = (-b - xRaiz)/ (2*a);
    
    const resultRaiz1 = ((a*xUmResults)**2) + (b*xUmResults) + c;
    const resultRaiz2 = (((a*xDoisResults)**2) + (b*xDoisResults) + c);
    const raizesDaEquacao = `${xUmResults}, ${xDoisResults}`;

    const result = {
        raizesR: `${raizesDaEquacao}`,
        xUmaLinha : `${resultRaiz1}`,
        xDuasLinha: `${resultRaiz2}`,
    }

    return result;
}

console.log(raizes(-3, 0, 75));
function mediaAri(notas) {
    let media = 0;

    for (let i = 0; i < notas.length; i++){
        media += notas[i];
    }

    const results = media/notas.length;

    return results;
}

const note = [7, 4, 4, 6, 7, 8, 9, 10];
console.log(mediaAri(note));
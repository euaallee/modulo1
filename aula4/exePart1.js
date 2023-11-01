const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
        {
            title: 'O Senhor dos Anéis - a Sociedade do Anel',
            author: 'J. R. R. Tolkien',
            publisher: 'Martins Fontes',
        },
    ],
};

const books = reader.favoriteBooks[0].title;

//  Acesse as chaves name , lastName e title e exiba informações em um console.log() no seguinte formato
// “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”
console.log(`“O livro favorito de ${reader.name} ${reader.lastName} se chama ‘${books}’.”.`)

// Adicione um novo livro favorito na chave favoriteBooks , que é um array de objetos. Atribua a essa chave
// um objeto que contenha as seguintes informações:

reader.favoriteBooks[1] = {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
}

console.log(reader);

//  Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

let livros = 0;

for (let i = 0; i < reader.favoriteBooks.length; i++) {
    livros++;
}

if (livros != 1) {
    console.log(`“Julia tem ${livros} livros favoritos.”`);
} else {
    console.log(`“Julia tem 1 livro favorito.”`);
}
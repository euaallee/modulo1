const school = {
    lessons: [
        {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
        },
        {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
        },
        {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
        },
        {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
        },
    ]
};
// 1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve
// possuir dois parâmetros: o objeto e a posição no array.
function positionArr() {
    for (let i = 0; i < school.lessons.length; i++){
        console.log(school.lessons[i], "<= Posição do array:", i);
    }
}
positionArr();
// 2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
function somaStudants() {
    let somadestudants = 0;
    for (let i = 0; i < school.lessons.length; i++){
        somadestudants += school.lessons[i].students;
    }
    console.log(`O número total de estudantes é ${somadestudants} em todos os cursos!`);
}
somaStudants();
// 3. Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons .
// O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o
// nome da chave.
function SearchKey(obj, key) {
    let toSearchKey = key;
    for (let i = 0; i < obj.lessons.length; i++){
        let key = Object.keys(obj.lessons[i]);
        const index = key.findIndex((k) => k == toSearchKey);
        if (key[index] == toSearchKey) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
SearchKey(school, "professor");
// 4. Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros:
// a base de dados a ser modificada, o nome do curso e o novo valor da chave.
function NewTurno(db, course, newkey) {
    let toSearchCouse = course;
    for (let i = 0; i < db.lessons.length; i++){
        let values = Object.values(db.lessons[i]);
        const index = values.findIndex((k) => k == toSearchCouse);
        if (values[index] == toSearchCouse) {
            db.lessons[i].shift = newkey;
            console.log(db)
        }
    }
}
NewTurno(school, "Python", "Noite");
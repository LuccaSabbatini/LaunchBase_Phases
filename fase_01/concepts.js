// Functions
function averageGrade(grades) { // Calcula média de notas.
    let gradeSum = 0;
    
    for (grade in grades) {
        gradeSum += grades[grade];
    }

    return gradeSum / grades.length;
}

// // Variables.
// const name = 'Lucca';
// const age = 20;
// const isAlive = true;
// const object = { // JavaScript Object Example.
//     name: "Lucca",
//     age: 20
// }
// const array = [ // JavaScript Array of Objects Example.
//     {
//         name: "Lucca",
//         age: 20
//     },
//     {
//         name: "Rebeca",
//         age: 20
//     },
//     {
//         name: "Murillo",
//         age: 20
//     }
// ]
students = ['Lucca', 'Rebeca', 'Murillo'];
grades = [3, -10, 2];

// // Variables types.
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isAlive);

// Comunicação do resultado com o console.
average = averageGrade(grades).toFixed(2);
console.log(`Média: ${average}`);

if (6 <= average && average <= 10) {
    console.log('Turma Aprovada!');
} else if (0 <= average && average < 6) {
    console.log('Turma Reprovada.');
} else {
    console.log('ERRO: Valores de notas inválidos.');
}
const students = [
    {id: 20, name: 'Rahul'},
    {id: 22, name: 'Roy'},
    {id: 24, name: 'Ratul'}
];

const names = students.map( s => s.name);
const allId = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20);
const firstBigger = students.find(s => s.id > 22);

console.log(names);
console.log(allId);
console.log(bigger);
console.log(firstBigger);


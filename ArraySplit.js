const numbers = [1, 2, 3, 4, 7, 11, 14, 16];
const part = numbers.slice(2, 7);
const remove = numbers.splice(1, 3);
const together = numbers.join(" ,");

console.log(together);
console.log(part);
//console.log(numbers);
console.log(remove);

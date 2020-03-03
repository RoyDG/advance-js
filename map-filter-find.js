//working with map
const number = [ 3, 6, 8];

number.map(function (element, index, Array) {
    console.log(element, index, Array);
})

// square multiplication of every element
const result = number.map(function (element) {
    return element * element;
})
console.log(result);

/*
//similar math easy path1
function square (element){
    return element * element;
}
//similar math easy path2
const square = element => element * element;
//similar math easy path3
const square = x => x * x;  */


//short-cut way of doing square math
const result1 = number.map(x => x * x);
console.log(result1);

//filter shows if condition fulfil
const bigger = number.filter( x => x > 5);
console.log(bigger);

//find shows only the first value
const biggerFind = number.find(x => x > 5);
console.log(biggerFind);
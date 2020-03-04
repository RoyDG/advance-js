/* hoisting is if we declare anything with var under any scope we can access it from anywhere. it's called hoisting. but if we declare anything with let or const under scope it cant be accessed out side of scope, means it can not be hoist.*/

// accessing variable 
let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    //return result;
        if(result > 9){
            var mood = "soo";
            var mood2 = "Happy";
            const mood3 = 100 ;
            console.log(mood3);
        }
    console.log(mood);
    console.log(mood2);
    return result;
}
const output = sum (3, 7);
console.log(output);
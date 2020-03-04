/*A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. */

/* This is called a JavaScript closure. It makes it possible for a function to have "private" variables. The counter is protected by the scope of the anonymous function, and can only be changed using the add function. A closure is a function having access to the parent scope, even after the parent function has closed. */

/* Use of Closures :
Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to). */
function stopWatch (){
    let count = 0;
    return function (){
        count++
        return count

    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());
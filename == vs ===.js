//it will return false cause not equal
const first = 2;
const second = 3;
if(first == second){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}

//it will return true cause equal
const first1 = 2;
const second1 = 2;
if (first1 == second1) {
    console.log("condition is true")
}
else {
    console.log("condition is false")
}

/* but it return true although other value 
is string. which is not good. thats why we
use === to check the type of that value.*/
const first2 = 2;
const second2 = "2";
if (first2 == second2) {
    console.log("condition is true")
}
else {
    console.log("condition is false")
}

// use of ===
const first3 = 2;
const second3 = "2";
if (first3 === second3) {
    console.log("condition is true")
}
else {
    console.log("condition is false")
}

// use of ===
const first4 = 1;
const second4 = true;
if (first4 === second4) {
    console.log("condition is true")
}
else {
    console.log("condition is false")
}

// but if we use ==
const first5 = 1;
const second5 = true;
if (first5 == second5) {
    console.log("condition is true")
}
else {
    console.log("condition is false")
}

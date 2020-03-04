//break use to stop loop if condition is true
const num = [1, 2, 3, 4, 7];
for(let i = 0; i < num.length; i++){
    if(num[i] > 3){
        break;
    }
    console.log(num[i]);
}

//continue use to ignore
const num2 = [1, -2, 3, -4, 7, 14, -15];
for (let i = 0; i < num2.length; i++) {
    if (num2[i] < 0) {
        continue;
    }
    console.log(num2[i]);
}
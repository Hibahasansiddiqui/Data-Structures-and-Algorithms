/*Consider the array: [2, 2, 1, 0, 9, 39, 20] . Can you find out how many times 2 occurs in this array and return the count of it?*/

let Arr = [2, 2, 1, 0, 9, 39, 20];
let count = 0;

//For Loop
console.log("Using For loop");

for (let i=0; i < Arr.length; i++){

    if (Arr[i] == 2){
        count++;
    }
    
}

console.log("repeatation of 2 is: ", count);

//While Loop

let j=0;
let repeat = 0;
console.log("\nUsing While loop");

while (j < Arr.length){
    
    if (Arr[j] == 2){
        repeat++;
    }
    j++;
    
}
console.log("repeatation of 2 is: ", repeat)
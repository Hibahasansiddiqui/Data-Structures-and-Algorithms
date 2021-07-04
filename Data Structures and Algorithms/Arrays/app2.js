/*Suppose you are given an array: [9, 7, 75, 32, 3234, 5, 3] . 
Find whether 3 is present in the given array. 
If it’s there return true otherwise return false*/

let Arr = [9, 7, 75, 32, 3234, 5, 3];

//For Loop
console.log("Using For loop");

for (let i=0; i < Arr.length; i++){

    if (Arr[i] == 3){
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}


//While Loop
let j=0;
console.log("\nUsing While loop");

while (j < Arr.length){

    
    if (Arr[j] == 3){
        console.log("true");
        // return;
    }
    else {
        console.log("false");
        // return false;
    }
    j++;
}

// let answer;
// if (answer = true){

//     console.log("true, 3 is in the array");
// }

// else {
//     console.log("false"); 
// }
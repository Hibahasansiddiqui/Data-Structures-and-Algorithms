/*Traverse an array [4, -20, 50, 1, 0, -5, 6, 7, 10] and print all of its elements and indices.*/

let array = [4, -20, 50, 1, 0, -5, 6, 7, 10]

//For Loop

for (let i = 0; i < array.length; i++) {
    console.log("index: " +i, "Element: " + array[i]);
}


//While Loop
let j=0;
console.log("\nUsing While loop");

while (j < array.length){

    console.log("index: "+j, "Element: " + array[j]);
    j++;
}
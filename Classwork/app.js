var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}


var cars = ["honda", "toyota", "suzuki"];
cars.forEach(myFunction);

function myFunction(item, index) {
console.log(item, index)
}

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
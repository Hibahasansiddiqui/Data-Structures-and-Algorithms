var numbers = [20, 2, 100, 4, 13];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

//output checked [2, 4, 13, 20, 100]

var numbers = [20, 2, 100, 4, 13];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);

//output checked [100, 20, 13, 4, 2]



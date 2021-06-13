/*Suppose you are given a number and you need to
check whether it’s even or odd. How'd you do that?*/

 let number = 5;
 //Using switch case to find even and odd number.
 switch (number % 2) {
     case 0:
         console.log("Even number");
         break;
     case 1:
         console.log("Odd number");
 }
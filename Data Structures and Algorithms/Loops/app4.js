/*Consider you are given an array [2,0,1,6,45,89]. 
You need to find the largest element in the array. How’d you do that?
 */

 let numbers = [2,0,1,6,45,89];
 let largest= numbers[0];
 
 for (i=0; i< numbers.length;i++){
     if (largest < numbers[i] ) {
         largest = numbers[i];
     }
 }
     console.log("Largest number is " ,largest);
 
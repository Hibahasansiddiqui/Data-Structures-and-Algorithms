/*Consider the above array again and find the smallest element 
in the array.*/

 let numbers = [2,0,1,6,45,89];
 let smallest= numbers[0];
 
 for (i=0; i< numbers.length;i++){
     if (smallest > numbers[i] ) {
         smallest = numbers[i];
     }
 }
     console.log("Smalest number is " ,smallest);
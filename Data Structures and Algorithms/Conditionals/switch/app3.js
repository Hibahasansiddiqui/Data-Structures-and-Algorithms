/*Suppose a situation in which you are expected to
 show ‘less than 10’ if a number is less than 10. 
 However, if it’s greater than 10, print ‘greater 
 than 10’. Also, deal with the case in which it’s 
 equal to 10 with an appropriate message. */

 let number = 9;
 //switch statement to check numbers
 switch (number) {
     case 1:
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
         console.log("less than 10");
         break;
     case 10:
         console.log("Equal to 10");
         break;
     case 15:
         console.log("Greater than 10");
         break;
     default:
         console.log("Unknown Value");
         break;
 }
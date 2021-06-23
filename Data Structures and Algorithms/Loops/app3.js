/* Work on the problem dynamically, print the name of each animal and
prepand it with "this is" conditionally. Print "Something else" if the 
name doesn’t equal any of the names in the list.
*/

let animals= ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
var i = 0 ;

do {
     
    console.log("this is ", animals[i]);
    i++ 
    
} while(animals[i] != undefined);
if(i>4) {
console.log("this is something else");
}
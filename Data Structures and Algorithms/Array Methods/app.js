/*You are given an object of user’s details as:

 let userObject = {
	userName: ‘Philip’,
	fatherName: ‘Norman’,
	className: ‘four’,
};
*/

let userObject = {
	userName: "Philip",
	fatherName: "Norman",
	className: "four",
}

/*Your task is to traverse the object and print its properties 
(both names and values).*/

//let travserse = "";
//for (let key in userObject) {
   // console.log(traverse + userObject[key] + " ")
        
 //   }

/*Now, using the same object, change the userName to your name, 
fatherName to your father’s name, and className to your class.*/

//updating
userObject.userName = "Hiba"
userObject.fatherName = "Nazir"
userObject.className = "Graduate"
console.log(userObject)

/*Suppose you have an array of objects:

	let books = [
{
			name: ‘The Lean Startup’,
			topics: [‘entrepreneurship’,’startups’],
		},
		{
			name: ‘War and Peace’,
			topics: [‘peace’, ‘politics’],
		}];
*/

let books = [
    {
                name: "The Lean Startup",
                topics: ["entrepreneurship’,’startups"],
            },
            {
                name: "War and Peace",
                topics: ["peace", "politics"],
            }]

            
/*Now you need to print the name and topics separately, 
how would you do that?  */

for (let i = 0; i < books.length; i++) {
	console.log(books[i].name);
	console.log(books[i].topics)
}

/*Take the above array of objects 
and add a book of your choice to it with the same properties.*/

//End

//books.length = books.length +1;
//books[books.length-1] = {
//	name: 'Last Sumarai', topics: ['Ninja', 'Discipline']
//}
//console.log(books);

books.name = "Last Sumarai"
books.topics = "Ninja, Discipline"

console.log(books)


//start

function LetsUnshift() {
	books.length = books.length + 1
    for (i = books.length-1; i > 0; i++) {
        books[i+1] = books[i];
    }
    books[0] = {
		name: 'Last Sumarai', topics: ['Ninja', 'Discipline']
	};
	books[1] = {
		name: 'Alchemist', topics: ['Inspiration', 'Life Journey']
	}

};
LetsUnshift(books[0]);
console.log(i, books[i])



//delete an item from end
//books.length = books.length-1
//console.log(books)

//delete item from start
//for (let i = 0; i < books.length; i++) {
//	books[i] = books[i+1];
	
//}
//books.length = books.length-1
//console.log(books)
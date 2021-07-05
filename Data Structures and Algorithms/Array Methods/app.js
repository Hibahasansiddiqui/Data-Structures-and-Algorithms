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

//let books = [
  //  {
      //          name: "The Lean Startup",
    //            topics: ["entrepreneurship’,’startups"],
          //  },
        //    {
            //    name: "War and Peace",
              //  topics: ["peace", "politics"],
            //}]

            
/*Now you need to print the name and topics separately, 
how would you do that?  */

//for (let i = 0; i < books.length; i++) {
	//console.log(books[i].name);
	//console.log(books[i].topics)
//}

/*Take the above array of objects 
and add a book of your choice to it with the same properties.*/

//End

//books.length = books.length +1;
//books[books.length-1] = {
//	name: 'Last Sumarai', topics: ['Ninja', 'Discipline']
//}
//console.log(books);

//books.name = "Last Sumarai"
//books.topics = "Ninja, Discipline"

//console.log(books)


//Add name and topic at the start of the array

/*function LetsUnshift() {
    for (i = books.length-1; i >=0; i--) {
        books[i] = books[i-1];
    }
    books[books.length - books.length] = {
		name: 'Alchemist', topics: ['Inspiration', 'Life Journey']
	};

};
LetsUnshift();
console.log(books)*/



//delete an item from end
//books.length = books.length-1
//console.log(books)

//delete item from start

let books = [
    {
    name: "The Lean Startup",
    topics: ["entrepreneurship","startups"],
    },
    {
    name: "War and Peace",
    topics: ["peace", "politics"],
    },
    {
        name: "Alchemist",
        topics: ["Inspiring", "Journey"],
    },
    {
        name: "Last Sumarai",
        topics: ["Ninja", "Discipline"],
    }
];
function deleteFromStart(){
    for (let i = 0; i<books.length-1; i++){
       books[i] = books[i+1];
       console.log(i, books[i]);
    }
       
}
deleteFromStart();
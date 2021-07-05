/*Take the above array of objects 
and add a book of your choice to it with the same properties.*/

let books = [
    {
               name: "The Lean Startup",
              topics: ["entrepreneurship’,’startups"],
             },
             {
               name: "War and Peace",
               topics: ["peace", "politics"],
  }]
  

//End

books.length = books.length +1;
books[books.length-1] = {
	name: 'Last Sumarai', topics: ['Ninja', 'Discipline']
}
console.log(books);

books.name = "Last Sumarai"
books.topics = "Ninja, Discipline"

console.log(books)


//Add name and topic at the start of the array

function LetsUnshift() {
    for (i = books.length-1; i >=0; i--) {
        books[i] = books[i-1];
    }
    books[books.length - books.length] = {
		name: 'Alchemist', topics: ['Inspiration', 'Life Journey']
	};

};
LetsUnshift();
console.log(books)
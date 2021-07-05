/*Again consider the above array of objects, 
and delete one of the objects that represent a book.*/



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

//delete an item from end
//books.length = books.length-1
//console.log(books)

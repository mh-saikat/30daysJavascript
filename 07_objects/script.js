//Activity 1
//Task 1

const book = {
    title:'Javascript',
    author:'Saikat',
    year: 2004
}
console.log(book);
//Task 2
console.log(`Book title is ${book.title}`);
console.log(`Book author is ${book.author}`);

//Activity 2
//Task 3

book.returnStr = function(){
    return `Book title is ${this.title} and author is ${this.author}`
}
console.log(book.returnStr());
//Task 4
book.updateYear = function(year){
    return `${this.year = year}`
}
book.updateYear(2010)
console.log(book);

//Activity 3
//Task 5

const libraryOfBooks = {
    name: "National Library of Bangladesh",
    books:[
        {
            title:'Industrial Management',
            author:'MD.Amirul Hock'
        },
        {
            title:'Database Management',
            author:'MD.Khorshed Alom'
        }
    ]
}
console.log(libraryOfBooks);
//Task 6
let nameOfLibrary = `Name of library is: ${libraryOfBooks.name}`
console.log(nameOfLibrary);
libraryOfBooks.books.forEach( (book) => console.log(book.title) )

//Activity 4
//Task 7
book.booksInfo = function(){
    return `The book title is ${this.title} and published on ${this.year}`
}
console.log(book.booksInfo());
//Activity 5
//Task 8

for (const key  in book) {
    console.log(`(Propertie)${key} (value) ${book[key]}`);
}
//Task 9
console.log(Object.keys(book));
console.log(Object.values(book));
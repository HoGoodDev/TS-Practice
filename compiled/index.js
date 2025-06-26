"use strict";
// function greet(user: string): string{
//     return "Hello," + user
// }
const library = [];
function addBook(book) {
    library.push(book);
}
addBook({
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    ongoing: false
});
function listBooks() {
    for (const book of library) {
        console.log(`"${book.title}" by ${book.author}, ${book.pages} pages, ongoing: ${book.ongoing}`);
    }
}
//Test
listBooks();
function findBook(title) {
    return library.find(book => book.title === title);
}
const result = findBook("The Alchemist");
if (result) {
    console.log(`Found: "${result.title}" by ${result.author}`);
}
else {
    console.log("Book not found.");
}
//test

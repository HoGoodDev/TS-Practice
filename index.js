// function greet(user: string): string{
//     return "Hello," + user
// }
var library = [];
function addBook(book) {
    library.push(book);
}
addBook({
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    ongoing: false
});
console.log(library);

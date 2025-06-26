// function greet(user: string): string{
//     return "Hello," + user
// }

// const user = "Bob"

// ************************************************************
// ************************************************************

// interface Book{
//     title: string;
//     pages: number;
//     available: boolean;
// }

// const book: Book ={
//     title: "The Alchemist",
//     pages: 208,
//     available: true,
// }

// function printBookDetails(book: Book){
//     console.log(`${book.title} has ${book.pages} pages.`);
// }

// printBookDetails(book);

// ************************************************************
// ************************************************************

// interface Car{
//     brand: string;
//     model: string;
//     year: number;
//     color: string | null;
// }


// const car: Car={
  
//         brand: "Tesla",
//         model: "Model S",
//         year: 2020,
//         color: null
// }


// function printCar(car: Car){
//     console.log(`${car.brand} ${car.model} ${car.year}, ${car.color}`)
// }

// printCar(car)

// ************************************************************
// ************************************************************

interface Book{

    title: string;
    author: string;
    pages: number;
    ongoing: boolean;

}

const library: Book[] = [];

function addBook(book: Book): void{

    library.push(book)

}
addBook({
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    ongoing: false
  });
  


  function listBooks(){

for (const book of library){

    console.log(
      `"${book.title}" by ${book.author}, ${book.pages} pages, ongoing: ${book.ongoing}`)
}

  }
//Test

listBooks();

function findBook(title: string): Book | undefined {
    return library.find(book => book.title === title);
  }
  
  const result = findBook("The Alchemist");

if (result) {
  console.log(`Found: "${result.title}" by ${result.author}`);
} else {
  console.log("Book not found.");
}


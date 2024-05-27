/*
//! Please Remove 👆 ****************************************************************

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//** Destructuring Objects and Arrays
const books = getBooks();
// books;

const book = getBook(1);
book;

// ---------------------------------------------------------------------------

// const title = book.title;
// const author = book.author;

// ! Problem is, let suppose moreee objects or you will get like title, author etc, so you can one line of code every call property?

// Object Destructuring
//todo: Make sure title and author are available in your object

//* It is a good practice to shows a single line
const { title, author, genres, publicationDate, pages, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// Array Destructuring

// const primaryGenres = genres[0];
// const secondaryGenres = genres[1];

//* It is a good practice to shows a single line
// const [primaryGenres, secondaryGenres] = genres;
// console.log(primaryGenres, secondaryGenres);

//** Rest and Spread Operators

//* Rest op:

// Rest op must be in last in destructuring order otherwise it shows a error
//! const [primaryGenres, ...otherGenres, secondaryGenres] = genres;

const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
console.log(primaryGenres, secondaryGenres, otherGenres);

//* Spread Op:
// Let suppose adding new element to the existing array

// const newGenres = [genres, "epic solution"]
// newGenres; // see it is array and create new array to show those elements

// but I want to in single array
const newGenres = ["epic solution", ...genres];
newGenres;

// Now when i work object
const updateBook = {
  ...book,
  // Adding new property
  moviePublicationDate: "2024-05-24",

  // Overwriting an existing property
  pages: 1210, // If this property up in means before ...book so it is not update/ overwritten
};

updateBook;

//** Template Literal
// Any Js variable inside string use backticks ``

// const summery = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate
//   .split("-")
//   .join(" ")} The book has ${
//   hasMovieAdaptation ? "" : "not"
// } been adopted as a movie`;

// summery;

//** Ternaries Instead of if/else statements
// if else statements not return a value rather in it is function
const pagesRange = pages > 1000 ? "over a thousand" : "less then 1000";
console.log(`The book has ${pagesRange} pages`);

// ** Arrow Functions

// Traditional Function

// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow Function
const getYear = (str) => str.split("-").join(" ");

// Now jo above me summery ki thi.
const summery = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)} The book has ${hasMovieAdaptation ? "" : "not"} been adopted as a movie`;

console.log(summery);

//** Short-Circuiting and Logical Operators: &&, ||, ??

//* (&&) AND
// Just like if, when value is true so the after && value show
console.log(true && "Some String");
console.log(undefined && "Some String");
console.log(null && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', undefined, null
console.log("Taimoor" && "Some String"); //truthy
console.log(0 && "Some String");

//* (||) OR
// to set default value if not true

console.log(book.translations.spanish);

// if book.translations.spanish -> undefined so shows NOT TRANSLATED if true so show book.translations.spanish
const spanishTranslations = book.translations.spanish || "NOT TRANSLATED";
spanishTranslations;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data found";
countWrong;

//*  Nullish Coalescing Operator (??)
// In above (||) is wrong so solve problem
// But very similar run to the same as (||) operator

// Nullish Coalescing Operator always shows, when except this -> (undefined, null) so shows second value after ??, falsy value and when 0, true, false comes so shows 0, true, false
console.log(0 ?? "Some String value");
console.log(undefined ?? "Some String value");
console.log(null ?? "Some String value");
console.log(false ?? "Some String value");

const count = book.reviews.librarything.reviewsCount ?? "Some thing String";
count;

//** Optional Chaining Operator (?)
// bhaly value undefined hi q na ho so usy haam undefined se rok skhty hai through optional chaining
// So atleast not show error message

// function getTotalReviewCount(book) {
//   const goodReads = book.reviews.goodReads.reviewsCount;
//   const librarything = book.reviews.librarything.reviewsCount;

//   return goodReads + librarything;
// }

// console.log(getTotalReviewCount(book));

//! In Above Shows Undefined 👆

//* Solution 👇We use Optional Chaining (?) also a good practice use (??) taky value ajaye

function getTotalReviewsCount(book) {
  const goodReads = book.reviews.goodReads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;

  return goodReads + librarything;
}

console.log(getTotalReviewsCount(book));

//**  Array methods (map, filter, & reduce)*
//* This method don't mutate the original array but new array based on the original one

//* Array Map Method 
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book),
}));
essentialData;

//* Array Filter Method 
// So agr value true ho so true wali value ek new array mai ajaye gi baically called as filtered value and if is false so out in an array

// Filter work hi true false pr kerta hai

const longBooks = books.filter((book) => book.pages > 658);
longBooks;

const longBooksWithMovie = books
  .filter((books) => books.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//* Array Reduce Method 
// Most powerful of all array methods in JavaScript
// Any mathematical operations in numbers

// Read to kr liaye book kai pages but how many pages in all books
// .reduce(callback (accumulator, book), starterValue/Initial Value (accumulator))

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//**  Array methods (sort)
// Original Array ko bhi change ker deta hai
// .slice use ker kai phly copy ker lai original array ko

// Ace Order (a - b)
const arr = [3, 7, 1, 9, 6];
// const sorted = arr.sort((a, b) => a - b);

// I want not change original array
const sortedAce = arr.slice().sort((a, b) => a - b);

sortedAce;
arr;

// Dec Order (b - a)
const sortedDec = arr.slice().sort((a, b) => b - a);
arr;
sortedDec;

const sortedPages = books.sort((a, b) => a.pages - b.pages);
sortedPages;

//** Working With Immutable Arrays 
// do not manipulate the underlying data structure, so how to add, delete & update elements in arrays, without changing to original array.

//* 1) How to add, without change to original array
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//* 2) How to delete without change to original array
// using filter
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//* 3) How to update without change to original array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12, author: "taimoor" } : book
);
booksAfterUpdate;

//! Please Remove 👇 ****************************************************************

*/

//** Asynchronous Javascript: Promises
// Load data from an external web api

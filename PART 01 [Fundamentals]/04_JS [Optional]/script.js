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
    hasMovieAdaptation: true,
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

// Now jo above me sumery ki thi.
const summery = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)} The book has ${hasMovieAdaptation ? "" : "not"} been adopted as a movie`;

console.log(summery);

//** Short-Circuiting and Logical Operators: &&, ||, ??

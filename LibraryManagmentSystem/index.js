import createMember from "./src/createMember.js";
import createBook from "./src/createBook.js";
import borrowBooks from "./src/borrowBooks.js";
import displaySummary from "./src/displaySummary.js";

console.log(createMember(1, "Archit", "Gold"));
console.log(createMember(2, "Naman", "Normal"));
console.log(createBook(101, "JavaScript Basics", "Krish Doe", 500));
console.log(createBook(102, "Node.js Guide", "Ryan Dahl", 700));

borrowBooks(1, [
  { bookId: 101, title: "JavaScript Basics", author: "John Doe", price: 500 },
  { bookId: 102, title: "Node.js Guide", author: "Ryan Dahl", price: 700 }
]);

displaySummary(1, 200);
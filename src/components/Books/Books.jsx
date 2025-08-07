import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-20 items-stretch">
      <h2 className="text-3xl text-center text-black mb-4">
        Books:{books.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   justify-between gap-6 items-stretch">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

// data load korte ki ki lagbe?
// ** 1. a state to store the book.
// 2. useEffect for fetching/loading the data.
// 3. set the data to the state.

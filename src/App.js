import React, { useState } from "react";
import "./styles.css";

const bookListDB = {
  Javascript: [
    { name: "Eloquent Javascript", author: "Marijn Haverbeke" },
    { name: "You Don't Know JS", author: "Kyle Simpson" },
    { name: "Javascript The Definitive Guide", author: "David Flanagan" },
    { name: "Head First JavaScript Programming", author: "Eric T Morrison " },
    { name: "JavaScript The Good Parts", author: "Douglas Crockford" }
  ],
  Investing: [
    { name: "Learn to earn", author: "Peter Lynch" },
    { name: "Flirting with Stocks", author: "Anil Lamba" },
    { name: "Coffee Can Investing", author: "Saurabh Mukherjea" },
    { name: "The Simple Path to Wealth", author: "J.L.collins" },

    {
      name: "Poor Charlie's Almanack",
      author: " Charles T. Munger, Peter E. Kaufman"
    }
  ],

  Fiction: [
    { name: "1984", author: "George Orwell" },
    { name: "The Alchemist", author: "Paulo Coelho" },
    { name: "Mahanayak", author: "Vishwas Patil" },
    { name: "Kosala", author: " Bhalchandra Nemade" },
    { name: "Mrityunjaya", author: "Shivaji Sawant" }
  ],
  NonFiction: [
    { name: "Range", author: "David Epstein" },
    { name: "AntiFragile", author: "Nassim N. Taleb" },
    {
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari"
    },
    { name: "Imagining India", author: "Nandan Nilekani" },
    { name: "Arthat", author: "Achyut Godbole" }
  ]
};
var bookList = Object.keys(bookListDB);
// ["Javascript","Philosohy","Fiction"]

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");

  function clickHandler(genre) {
    console.log(genre);
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Books List 📚</h1>
      <p>
        <strong>Below is my list of favorite books</strong>
      </p>
      <div className="genres">
        {bookList.map((genre, index) => {
          return (
            <button key={index} onClick={() => clickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div className="list">
        <ul>
          {bookListDB[selectedGenre].map((book, index) => {
            return (
              <li key={index}>
                {" "}
                <p>{book.name}</p>
                <p>{book.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

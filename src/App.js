import React, { useState } from "react";
import "./styles.css";

const bookListDB = {
  {
    "books": {
      "fantasy": [
        {
          "name": "She who became the sun",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1625048838l/48727813._SY475_.jpg",
          "rating": "4.5"
        },
        {
          "name": "Any Way the Wind Blows",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610744543l/52190991.jpg",
          "rating": "3.5"
        },
        {
          "name": "Six Crimson Cranes",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603387427l/53457092._SY475_.jpg",
          "rating": "4.5"
        }
      ],
      "music": [
        {
          "name": "The Mixtape",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603213764l/55747432._SY475_.jpg",
          "rating": "4.23"
        },
        {
          "name": "Rise to the Sun",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602746717l/50999975._SY475_.jpg",
          "rating": "3.23"
        },
        {
          "name": "XOXO",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602086642l/54618808._SY475_.jpg",
          "rating": "4.23"
        }
      ],
      "psychology": [
        {
          "name": "For Your Own Good",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603912707l/52379865.jpg",
          "rating": "4.23"
        },
        {
          "name": "Not a Happy Family",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608637770l/56366617.jpg",
          "rating": "3.95"
        },
        {
          "name": "The Comfort Book",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608484192l/55825273.jpg",
          "rating": "4.23"
        }
      ],
      "science": [
        {
          "name": "This Is Your Mind on Plants",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606111590l/56015023._SY475_.jpg",
          "rating": "4.23"
        },
        {
          "name": "Fox & I",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611152260l/56764127.jpg",
          "rating": "4.23"
        },
        {
          "name": "Seek You: A Journey Through American Loneliness",
          "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604997087l/55648627.jpg",
          "rating": "4.23"
        }
      ]
    }
  }
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

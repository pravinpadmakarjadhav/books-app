import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  fiction: [
    { name: "1984",
    author:"george orwell",
      rating: "4/5",
      description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's live" },
    { name: "Man's Search For Meaning",
    author:"viktor frankl",
      rating: "5/5",
      description: "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome" },
    { name:"kosala",
    author:"bhalchandra nemade",
      rating: "4/5",
      description: "Kosala uses the first-person narrative technique to recount the first twenty-five years in the life of Pandurang Sangavikar, a young man of rural upbringing who moves to Pune for his higher education. He feels isolated in his new social setting, and this persistent feeling of estrangement leads him to return home." }
  ],

  Investing: [
    { name: "Think and Grow Rich",
    author:"nepoleon hill",
          rating: "5/5",
      description: "It is the combined wisdom from more than 500 of America's most successful individuals." },
    { name: "The Little Book of Common Sense Investing",
    author:"john c bogle",
      rating: "3/5",
      description: "The books core message is buy low cost index funds and hold them forever." },
    { name: "The Psychology of Money",
    author:"morgan housel",
      rating: "3.5/5",
      description: "It is a book about investing, personal finance and business decisions." }
  ],
  NonFiction: [
    { name:"AntiFragile",
     author: "Nassim Taleb",
      rating: "4/5",
      description: " Antifragile is a standalone book in Nassim Nicholas Taleb’s landmark Incerto series, an investigation of opacity, luck, uncertainty, probability, human error, risk, and decision-making in a world we don’t understand." },
    { name: "Sapiens: A Brief History of Humankind",
    author:"Yual noah Harari",
      rating: "3/5",
      description: "Sapiens, the book, takes us on a breath-taking ride through our entire human history, from its evolutionary roots to the age of capitalism and genetic engineering, to uncover why we are the way we are." },
    { name: "Imagining India",
    author:"nandan nilkani",
      rating: "3.5/5",
      description: "Imagining India created ripples with its perspective on India’s recent history and the core issues plaguing the country’s development. Cogently argued and packed with Nilekani’s own experiences and interactions with hundreds of opinion leaders, it offers a comprehensive blueprint for India in the twenty-first century" }
  ]
};

export default function App() {
  const [chosenGenre, setGenre] = useState("Discovering_Yourself");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App 📚</h1>
      <h3>Hello! checkout my favourite books</h3>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ width: "50%", margin: "auto" }}>
        <ul>
          {bookDB[chosenGenre].map((book) => (
            <li key={book.name}>
              <div style={{fontSize: "larger", fontWeight:"bold"}}> Title: {book.name} </div>
              <div> Rating: {book.rating} </div>
              <div> Description: {book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

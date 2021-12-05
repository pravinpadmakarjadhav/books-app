import React, { useState } from "react";
import "./styles.css";

//database
const Allbooks = {
Investing: [
    {
      Title:"Poor Charlie's Almanack",
      Description:
        "Poor Charlie's Almanack is a collection of Charlie Munger's best advice given over 30 years, in the form of 11 speeches given as commencement addresses and roundtable talks. He covers a wide range of topics, including rationality and decision making, investing, and how to live a good life.",
      Image:
    "https://images-na.ssl-images-amazon.com/images/I/81CtZOmZDfL.jpg",
      Rating: `8.9/10`
    },
    {
      Title: "The Most Important Thing Illuminated",
      Description:
        "Informed by a lifetime of experience and study, The Most Important Thing explains the keys to successful investment and the pitfalls that can destroy capital or ruin a career. ... Marks expounds on such concepts as second-level thinking, the price/value relationship, patient opportunism, and defensive investing.",
      Image:"https://jamesclear.com/wp-content/uploads/2018/08/THE-MOST-IMPORTANT-THING-ILLUMINATED-by-HOWARD-MARKS.jpg",
      Rating: `8.1/10`
    },
    {
      Title: "Learn to earn",
      Description:
        "In Learn to Earn, Lynch and Rothchild explain in a style accessible to anyone who is high-school age or older how to read a stock table in the daily newspaper, how to understand a company annual report, and why everyone should pay attention to the stock market.",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/81PlEu2bn7L.jpg",
      Rating: `7.4/10`
    }
  ],
  Fiction: [
    {
      Title: "Kosla",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/71jXznOztZL.jpg",
      Description:
        "Kosala uses the first-person narrative technique to recount the first twenty-five years in the life of Pandurang Sangavikar, a young man of rural upbringing who moves to Pune for his higher education. He feels isolated in his new social setting, and this persistent feeling of estrangement leads him to return home",
      Rating: `9/10`
    },

    {
      Title: "1984",
      Description:
        "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's live",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL.jpg",
      Rating: `8.7/10`
    },

    {
      Title: " Man's Search For Meaning",
      Description:
        "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/814rCOycUIL.jpg",
      Rating: `8.6/10`
    }
  ],

  NonFiction: [
    {
      Title: "Imagining India",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51pp5e3sr7L.jpg",
      Description:
        "Imagining India traces the efforts of the country's past and present leaders as they work to develop new frameworks that suit India's specific characteristics and challenges",
      Rating: `9.5/10`
    },
    {
      Title: "Antifragile",
      Description:
        " Antifragile reveals how some systems thrive from shocks, volatility and uncertainty, instead of breaking from them, and how you can adapt more antifragile traits yourself to thrive in an uncertain and chaotic world",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/612-pygu-NL.jpg",
      Rating: `8.7/10`
    },
    {
      Title: "sapiens ",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
      Description:
        "In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions.",
      Rating: `8.4/10`
    }
  ]
};

const genreNames = Object.keys(Allbooks);

export default function App() {
  const [seriesList, setSeriesList] = useState(Allbooks.NonFiction);

  function genreClickHandler(genre) {
    const series = Allbooks[genre];
    setSeriesList(series);
  }

  function getSeriesPost(series) {
    const title = series.Title;
    const imageUrl = series.Image;
    const desc = series.Description;
    const rating = series.Rating;
    const htmlOfList = (
      <li>
        <img alt="poster" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
        📚
        </span>{" "}
        Best Books to Read 
      </h1>
      <p>"Read books, avoid news." - 
      @naval</p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      {/* <div>
        <button className="btn" onClick={() => genreClickHandler("comedy")}>
          Comedy
        </button>
        <button className="btn" onClick={() => genreClickHandler("romance")}>
          Romance
        </button>
        <button className="btn" onClick={() => genreClickHandler("crime")}>
          Crime
        </button>
      </div> */}
      <hr />
      <ul>
        {seriesList.map((series) => {
          return getSeriesPost(series);
        })}
      </ul>
    </div>
  );
}
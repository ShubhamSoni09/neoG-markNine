import "./styles.css";
import { useState } from "react";

var dictionaryofFood = {
  Starter: [
    ["Aloo  Chat", "North India", "3.5/5"],
    ["Samosa", "North India", "4/5"],
    ["Pani Puri", "North India", "4.5/5"]
  ],
  MainCourse: [
    ["Biryani", "Persia", "4.5/5"],
    ["Chole Bhatuere", "North India", "4/5"],
    ["Undhiyu", "Gujarat", "5/5"]
  ],
  Desserts: [
    ["Brownie", "US", "5/5"],
    ["Pancakes", "Greece", "4.5/5"],
    ["Chocolate Cheesecake", "Greece", "4/5"]
  ]
};

var ListofFood = Object.keys(DictionaryofFood);


export default function App() {
    var subList = dictionaryofFood["Starter"];
  
    var [output, setOutput] = useState(subList);
  
    function foodClickHandler(food) {
      subList = dictionaryofFood[food];
      setOutput(subList);
    }
  
    return (
      <div className="App">
        <header>
          <h1>
            <span role="img" aria-label="noodles">
              🍜
            </span>{" "}
            Hey there Foodie!
          </h1>
          <p className="github">
            <a
              href="https://github.com/ShubhamSoni09/neoG-markNine"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub Repo
            </a>
          </p>
        </header>
        <main>
          <p className="about">
            See a list of various food items, their origin and rating. Choose a
            type to get started.
          </p>
  
          <div className="genreLists">
            {ListofFood.map((food) => {
              return <span onClick={() => foodClickHandler(food)}>{food}</span>;
            })}
          </div>
  
          <hr />
  
          <div className="showFoodItems">
            <ul>
              {Array.from(output).map((item) => {
                return (
                  <li>
                    {item[0]}
                    <br />
                    <span className="origin">Origin: {item[1]}</span>
                    <br />
                    <span className="rating">Rating: {item[2]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
  
        <footer>
          <a
            href="https://shubham-soni-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            Shubham Soni
          </a>
        </footer>
      </div>
    );
  }
  
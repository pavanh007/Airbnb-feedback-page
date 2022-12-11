import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.json";

console.log(data)

function App() {
  const cards = data.map(item => {
  <Card 
        coverImg={item.coverImg}
        ratings={item.stats.ratings }
        reviewCount={ item.stats.reviewCount}
        location={ item.location }
        title={ item.title}
        price={item.price}
      />
  })
  return (
    <div>
      <Navbar/>
      <Hero />
      { cards}
      
    </div>
    )
}

export default App;



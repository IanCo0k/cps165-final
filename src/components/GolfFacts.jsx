import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component

const golfFacts = [
  {
    title: "Origin of Golf",
    description: "Golf originated in Scotland in the 15th century. The oldest golf course in the world is the Old Course at St Andrews, established in 1552.",
  },
  {
    title: "Number of Golf Balls Lost Annually",
    description: "It's estimated that over 300 million golf balls are lost in the United States each year.",
  },
  {
    title: "The Longest Golf Drive",
    description: "The longest recorded drive in professional golf is 515 yards by Mike Austin in 1974.",
  },
  {
    title: "The Most Holes Played in One Day",
    description: "The record for the most holes played in one day is 851, set by Richard Lewis in 1972.",
  },
];

function GolfFacts() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Fun Facts About Golf</h1>
        <div className="space-y-8">
          {golfFacts.map((fact, index) => (
            <div key={index} className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl font-semibold mb-4">{fact.title}</h2>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GolfFacts;

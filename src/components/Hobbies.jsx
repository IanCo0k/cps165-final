import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import { Link } from "react-router-dom";

const schools = [
  {
    name: "Golf",
    image: "https://www.northkentgolf.com/wp-content/uploads/2016/03/nktee.jpg",
    description: "In my free time, I love to golf with my friends. Pictured is our home course in Rockford, Michigan, North Kent Golf Course.",
  },
  {
    name: "Basketball",
    image: "https://cdn.nba.com/manage/2023/12/GettyImages-1841166811-1.jpg",
    description: "I also love basketball in all forms. I play pickup with my friends, watch the NBA, and play NBA 2k with my friends whenever I have any free time!",
  },
];

function Hobbies() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Hobbies</h1>
        <Link to="/golf-facts" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-8">
          Golf Fun Facts
        </Link>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl underline font-semibold mb-4">{school.name}</h2>
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-auto mb-4"
              />
              <p>{school.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hobbies;

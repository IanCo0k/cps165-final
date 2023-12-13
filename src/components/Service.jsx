import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar"; // Import your Navbar component

const schools = [
  {
    name: "His House Christian Fellowship",
    image: "https://i0.wp.com/hhcf.org/wp-content/uploads/2018/01/Group-panorama-1024x616.jpg?resize=640%2C385",
    description: "I previously led a bible study for 8-10 guys and volunteered on the worship team. Now I intern at the church and lead the worship team!",
  },
  {
    name: "For The Nations Refugee Outreach",
    image: "https://ftnro.org/wp-content/uploads/2021/05/image000000-scaled.jpg",
    description: "In the spring of 2023, I went on a mission trip to Dallas, Texas, where we spent time with refugee families. We taught ESL, played with kids, and helped them adjust to the move to America.",
    website: "/for-the-nations", // Add the For The Nations website URL
  },
];

function Service() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schools.map((school, index) => (
            <div key={index} className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl underline font-semibold mb-4">{school.name}</h2>
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-auto mb-4"
              />
              <p>{school.description}</p>
              {school.website && (
                <Link to={school.website} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4 inline-block">
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

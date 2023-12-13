import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar"; // Import your Navbar component
import cfb from '../assets/cfb.png';

const schools = [
  {
    name: "Central Michigan University",
    image: "https://www.cmich.edu/images/default-source/general/campus-scenic/600-x-400/2019-460-d-003-campus-shots_600x400beeca0cb-66f6-4d26-b9c6-dd78beb52c05.jpg?sfvrsn=9a8420a0_6",
    description: "Worked as a full stack software engineer from November 2020 to December 2021. Managed web applications and databases university-wide.",
  },
  {
    name: "CFB Grids",
    image: cfb,
    description: "Founded a daily trivia site for college football fans. Built the site from the ground up using React and Google Firebase. Was lucky enough to have some users donate to support! I am presently involved in this application.",
  },
];

function WorkExperience() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Work Experience</h1>
        {/* Use Link component to navigate */}
        <a href="https://cfbgrids.com" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-8 transition duration-300">
          View CFB Grids
        </a>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-2 gap-8">
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

export default WorkExperience;

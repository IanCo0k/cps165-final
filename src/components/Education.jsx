import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar"; // Import your Navbar component

const schools = [
  {
    name: "Valley View Elementary",
    image: "https://www.rockfordschools.org/wp-content/uploads/2015/12/20160919_130838-506x366.jpg",
    description: "Attended K-5th grade. Finished top 25 in the 5th grade spelling bee and was a recess football legend.",
  },
  {
    name: "North Rockford Middle School",
    image: "https://www.rockfordschools.org/wp-content/uploads/2015/12/RPS-North-Middle-0057-506x366.jpg",
    description: "Attended 6th-8th grade. Won the 6th grade XC meet and went 20-4 in 2 years on the basketball team.",
  },
  {
    name: "Rockford High School",
    image: "https://www.rockfordschools.org/wp-content/uploads/2015/12/RPS-High-School-0025-506x366.jpg",
    description: "Attended 9th-12th grade. Ran XC and track all 4 years, lettering 8 times.",
  },
  {
    name: "Central Michigan University",
    image: "https://www.cmich.edu/images/default-source/presidents-division/university-communications/home-page/webp/freshman_arch_tabbed-callout-slider_1200x900.webp?sfvrsn=694a644f_2",
    description: "Attended 2020-present. Hoping to graduate in May with a Computer Science degree!",
  },
];

function Education() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Education</h1>
        <Link to="/courses" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-8">
          View My Courses
        </Link>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
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

export default Education;

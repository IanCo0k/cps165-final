import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar"; // Import your Navbar component

const courses = [
  {
    title: "ITC 320 Web Development",
    description: "This course covers advanced topics in web development, including front-end and back-end technologies like HTML, CSS, JS.",
  },
  {
    title: "CPS 165 Modern Website Design",
    description: "In this course, I have learned about modern website design principles using mainly HTML, CSS, Wordpress, and some JS.",
    link: "/modern-website-design", // Add the link to the new page
  },
  {
    title: "CPS 410 Senior Design",
    description: "Senior Design is a capstone course where I have worked on real-world projects and applied my skills to solve practical problems.",
  },
  {
    title: "CPS 190 Intro to Python",
    description: "This introductory course covers the fundamentals of Python programming, including data types, control structures, and basic algorithms.",
  },
];

function Courses() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Courses</h1>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl md:text-3xl font-semibold mb-4">{course.title}</h2>
              <p>{course.description}</p>
              {course.link && (
                <Link to={course.link} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4 inline-block">
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

export default Courses;

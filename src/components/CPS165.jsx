import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar"; // Import your Navbar component

function ModernWebsiteDesign() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">CPS 165 Modern Website Design</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Course Information</h2>
            <p><strong>Fall 2023:</strong> CPS 165 Modern Website Design – 3 cr. (Sec. # 22439377)</p>
            <p><strong>Class Times:</strong> MWF: 12:00 - 12:50 pm</p>
            <p><strong>Class Location:</strong> Pearce 124 / Pearce 402</p>
          </div>
          <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Instructor Information</h2>
            <p><strong>Instructor:</strong> Dr. Michael Johnson</p>
            <p><strong>Office:</strong> Pearce 403B</p>
            <p><strong>Email:</strong> <a href="mailto:johns88m@cmich.edu">johns88m@cmich.edu</a></p>
            <p><strong>Phone:</strong> (989) 774-3693</p>
            <p><strong>Office Hours:</strong> Monday (1pm-3pm) and Wednesday (1pm-3pm)</p>
          </div>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Bulletin Description</h2>
          <p>
            Design and development of dynamic and interactive user-friendly websites.
            Maintain a web portfolio. Learn about web publishing best practices with consideration of social media.
          </p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Prerequisites, Pre/Co-requisites, Co-requisites, Recommended</h2>
          <p>None</p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Rationale for Course Level</h2>
          <p>
            This course is an introduction to the design and development of interactive user-friendly websites.
            First year students (typically freshman) enroll in this class and are not expected to
            have much background information about the technologies discussed and used in this course.
            Students will be expected to design and develop basic websites, and will also be introduced to web publishing best practices.
          </p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Additionally pages</h2>
          <div className="space-y-4">
            {/* Link to TechUsed page */}
            <Link to="/modern-website-design/tech-used" className="bg-blue-500 mr-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Tech Used
            </Link>
            {/* Link to CourseComments page */}
            <Link to="/modern-website-design/course-comments" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Course Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernWebsiteDesign;

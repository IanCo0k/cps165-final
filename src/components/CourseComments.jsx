import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component

const courseComments = [
  {
    username: "In Class Activities",
    date: "5/5",
    comment: "One of the things I enjoyed the most about this course was the in-class activities. They were a great way to apply what I learned and get hands-on experience."
  },
  {
    username: "Exams",
    date: "5/5",
    comment: "I thought the exams were appropriately challenging and a good way to test my knowledge. I also appreciate how you allowed us to use resources, which made the study process less stressful."
  },
  {
    username: "Organization",
    date: "3.5/5",
    comment: "My only slight complaint is that the course was a bit disorganized at times. I think it would be helpful to have a more structured schedule and to be more on time with getting grades in. But overall I really enjoyed this course and thought you did a great job!"
  },
  // Add more comments as needed
];

function CourseComments() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Course Comments</h1>
        <div className="space-y-6">
          {courseComments.map((comment, index) => (
            <div key={index} className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
              <div className="text-lg font-semibold mb-2">
                {comment.username}
              </div>
              <div className="text-sm text-gray-400 mb-2">
                {comment.date}
              </div>
              <p>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseComments;

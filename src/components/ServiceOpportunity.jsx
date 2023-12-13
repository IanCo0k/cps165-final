import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component

function ServiceOpportunity() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Service Opportunity at ForTheNations Outreach</h1>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-3xl underline font-semibold mb-4">Overview</h2>
          <p>
            During my time at ForTheNations Outreach, I had the opportunity to make a positive impact in the community by helping adults learn English as a Second Language (ESL). Additionally, I provided assistance to refugee students in improving their math and English skills.
          </p>
        </div>
        <div className="mt-8 bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-3xl underline font-semibold mb-4">Role and Responsibilities</h2>
          <p>
            As part of my service, I played a key role in facilitating ESL classes, tailoring the curriculum to the needs of adult learners. I also worked closely with refugee students, providing tutoring and support to help them excel in their math and English studies.
          </p>
        </div>
        <div className="mt-8 bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-3xl underline font-semibold mb-4">Impact</h2>
          <p>
            My time at ForTheNations Outreach allowed me to witness the transformation and growth of individuals as they improved their language skills and gained confidence. It was a fulfilling experience to contribute to the betterment of the community and support those in need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceOpportunity;

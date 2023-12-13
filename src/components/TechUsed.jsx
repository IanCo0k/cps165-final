import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component

function TechUsed() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar /> {/* Include your Navbar component at the top */}
      <div className="container mx-auto mt-12 p-8">
        <h1 className="text-3xl md:text-5xl text-gray-200 font-bold mb-8">Tech Used</h1>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">WordPress</h2>
          <p>
            I used WordPress as the content management system (CMS) for my website. WordPress allowed me to easily manage and update the website's content, namely the media gallery where I uploaded images.
          </p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Tailwind CSS</h2>
          <p>
            Tailwind CSS was instrumental in styling the website. I leveraged the power of Tailwind CSS classes to create a consistent and responsive design. Its utility-first approach made it easy to customize the appearance of components like the Navbar.
          </p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Custom HTML</h2>
          <p>
            For more control over the structure and layout of my website, I utilized custom HTML. I mainly used this to create the grid system that you see on each page.
          </p>
        </div>
        <div className="bg-gray-700 text-gray-200 border-2 border-blue-200 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">JavaScript Animations</h2>
          <p>
            To enhance user experience and engagement, I implemented JavaScript animations. These animations added interactive elements to the website, making it more visually appealing and user-friendly. The animation I am most proud of can be viewed on mobile, where if you click the menu icon, the menu is revealed with a smooth sliding animation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechUsed;

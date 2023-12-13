import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen'>
      <Navbar />
      <div className='min-h-screen flex flex-col justify-center items-center text-white'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>Hi, I'm Ian Cook</h1>
          <p className='text-lg mb-8'>
            Welcome to my portfolio website. Explore my work experience and education below.
          </p>
          <div className='space-x-4'>
            <a
              href='#work-experience'
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
            >
              View Work Experience
            </a>
            <a
              href='#education'
              className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
            >
              View Education
            </a>
          </div>
        </div>
        <div className='mt-10'>
          <img
            src='https://media.licdn.com/dms/image/D5603AQGoG0oPOOzUNQ/profile-displayphoto-shrink_800_800/0/1673552040979?e=2147483647&v=beta&t=r9oXKngbGbRsZbVYAOigVQ1wsjgohGZ0k6QZzpDiP9Y' // Replace with your image URL
            alt='Ian Cook'
            className='w-64 h-64 rounded-full border-4 border-white'
          />
        </div>
      </div>
    </div>
  );
}

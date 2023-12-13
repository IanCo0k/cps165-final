import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Education from './components/Education.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Service from './components/Service.jsx';
import Hobbies from './components/Hobbies.jsx';
import Courses from './components/Courses.jsx';
import GolfFacts from './components/GolfFacts.jsx';
import ServiceOpportunity from './components/ServiceOpportunity.jsx';
import TechUsed from './components/TechUsed.jsx';
import CPS165 from './components/CPS165.jsx';
import CourseComments from './components/CourseComments.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/education" element={<Education />} />
      <Route path="/work-experience" element={<WorkExperience />} />
      <Route path="/service" element={<Service />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/golf-facts" element={<GolfFacts />} />
      <Route path="/for-the-nations" element={<ServiceOpportunity />} />
      <Route path="/modern-website-design" element={<CPS165 />} />
      <Route path="/modern-website-design/tech-used" element={<TechUsed />} />
      <Route path="/modern-website-design/course-comments" element={<CourseComments />} />
    </Routes>
  </React.StrictMode>,
  </Router>
)

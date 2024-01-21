// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  // Dummy data for recommended projects
  const recommendedProjects = [
    { id: 1, title: 'Project One', description: 'Description of Project One' },
    { id: 2, title: 'Project Two', description: 'Description of Project Two' },
    { id: 3, title: 'Project Three', description: 'Description of Project Three' },
    { id: 4, title: 'Project Four', description: 'Description of Project Four' },
    { id: 5, title: 'Project Five', description: 'Description of Project Five' },
  ];

  return (
    <div className="text-center">
      {/* College Image */}
      <img
        src="/path/to/college-image.jpg" // Replace with the actual path to your college image
        alt="College"
        className="w-full h-auto mb-8"
      />

      {/* College Name */}
      <h1 className="text-3xl font-bold mb-4">Your College Name</h1>

      {/* Recommended Projects Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Recommended Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedProjects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Link to All Projects Page */}
      <Link to="/all-projects" className="text-blue-500 hover:underline mt-4 block">
        View All Projects
      </Link>

      
    </div>
  );
};

export default HomePage;

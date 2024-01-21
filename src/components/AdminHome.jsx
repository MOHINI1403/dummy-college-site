// AdminHome.js
import React from 'react';

const AdminHome = () => {
  // Dummy data for the admin's personal details and projects
  const adminDetails = {
    name: 'John Doe',
    phone: '123-456-7890',
    adminID: 'A123',
    department: 'Computer Science',
  };

  const projects = [
    { id: 1, department: 'Computer Science', title: 'Project One', description: 'Description of Project One', link: '/projects/1' },
    { id: 2, department: 'Electrical Engineering', title: 'Project Two', description: 'Description of Project Two', link: '/projects/2' },
    // Add more project data as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Profile Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Admin Profile</h2>
        <div className="flex items-center mb-4">
          <img src="/path/to/profile-image.jpg" alt="Profile" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <p className="text-lg font-semibold">{adminDetails.name}</p>
            <p className="text-gray-600">{adminDetails.adminID}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Phone: {adminDetails.phone}</p>
          <p className="text-gray-600">Department: {adminDetails.department}</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">Department: {project.department}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-red-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;

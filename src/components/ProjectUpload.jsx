// ProjectUpload.js
import React, { useState } from 'react';

const ProjectUpload = () => {
  // State to store project details from the form
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    name: '',
    category: '',
    description: '',
    skills: '',
    file: null,
  });

  // State to store a list of projects
  const [projectList, setProjectList] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic or API calls for project submission
    // For demonstration, adding the project to the list
    setProjectList((prevList) => [...prevList, projectDetails]);

    // Clear form fields after submission
    setProjectDetails({
      title: '',
      name: '',
      category: '',
      description: '',
      skills: '',
      file: null,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-screen">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-md shadow-md h-full">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Project</h2>
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={projectDetails.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={projectDetails.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-lg font-medium text-gray-700">
            Skills Used
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={projectDetails.skills}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-700" 
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contributions" className="block text-lg font-medium text-gray-700">
            Contributions
          </label>
          <input
            type="text"
            id="contributions"
            name="contributions"
            value={projectDetails.contributions}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
            required
          />
        </div>


          {/* Add other form fields similar to the example provided earlier */}

          {/* File Upload Section */}
          <div className="mb-4">
            <label htmlFor="file" className="block text-lg font-medium text-gray-800">
              Project File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          {/* Dynamic Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-md transition duration-300 hover:from-red-600 hover:to-red-700 hover:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Project
          </button>
        </form>
      </div>

      {/* Project List Section */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        <ul>
          {projectList.slice(0, 3).map((project, index) => (
            <li key={index} className="mb-2">
              <strong>{project.title}</strong> - {project.name} ({project.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectUpload;

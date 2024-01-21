// Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminSection = () => {
    const navigate = useNavigate();

  // State to store admin details from the form
  const [adminDetails, setAdminDetails] = useState({
    username: '',
    email: '',
    password: '',
    adminId: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if details are verified (you can add your own verification logic)
    const isVerified = verifyAdminDetails(adminDetails);

    if (isVerified) {
      // Redirect to the admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Handle verification failure, show an error message or take appropriate action
      console.log('Admin details verification failed');
    }
  };

  // Function to verify admin details (you can customize this)
  const verifyAdminDetails = (details) => {
    // Example verification logic (you may implement your own verification)
    return details.username !== '' && details.email !== '' && details.password !== '' && details.adminId !== '';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-screen">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-md shadow-md h-full">
        <h2 className="text-2xl font-semibold mb-4">Admin Details</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
          {/* Form fields */}
          <div className="mb-4 px-4 py-6">
            <label htmlFor="username" className="block text-md font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Enter the username'
              value={adminDetails.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          <div className="mb-4 px-4 py-6">
            <label htmlFor="email" className="block text-md font-medium text-gray-700">
              Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={adminDetails.email}
              onChange={handleChange}
              placeholder='Enter the email'
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          <div className="mb-4 px-4 py-6">
            <label htmlFor="password" className="block text-md font-medium text-gray-700">
              Username
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={adminDetails.password}
              placeholder='Enter the password'
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>

          <div className="mb-4 px-4 py-6">
            <label htmlFor="adminID" className="block text-md font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="adminID"
              name="adminID"
              value={adminDetails.adminId}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
              required
            />
          </div>
          {/* Add other form fields similar to the example provided earlier */}

          {/* Dynamic Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-md transition duration-300 hover:from-red-600 hover:to-red-700 hover:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Admin Details
          </button>
        </form>
      </div>

      {/* Decorative Section */}
      <div className="flex items-center justify-center h-full">
        {/* Add decorative elements, images, or any content here */}
        <p className="text-gray-600 text-lg">Decorative Content Goes Here</p>
      </div>
    </div>
  );
};

export default AdminSection;

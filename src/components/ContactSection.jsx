import React, { useState } from 'react';

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-screen">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-md shadow-md h-full">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 px-4 py-6">
                <label htmlFor="name" className="block text-md font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
                  required
                />
              </div>
    
              <div className="mb-4 px-4 py-6">
                <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
                  required
                />
              </div>
    
              <div className="mb-4 px-4 py-6">
                <label htmlFor="email" className="block text-md font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
                  required
                />
              </div>
    
              <div className="mb-4 px-4 py-6">
                <label htmlFor="description" className="block text-md font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-100 text-gray-800"
                  required
                ></textarea>
              </div>
    
              <div className="mb-4 px-4 py-6">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" required />
                  <span className="ml-2 text-sm text-gray-700">I accept the terms and conditions</span>
                </label>
              </div>
    
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-md transition duration-300 hover:from-red-600 hover:to-red-700 hover:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
    
          {/* Decorative Section */}
          <div className="flex items-center justify-center">
            {/* Add decorative elements, images, or any content here */}
            <p className="text-gray-600 text-lg">
              Decorative Content Goes Here
            </p>
          </div>
        </div>
      );
};
    

export default ContactSection
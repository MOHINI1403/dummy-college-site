// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bottom-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Slogan */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/path/to/logo.png" // Replace with the actual path to your logo
            alt="Logo"
            className="w-12 h-12 mr-2"
          />
          <div>
            <h2 className="text-xl font-bold">Your Logo Name</h2>
            <p className="text-gray-400">Your Slogan Here</p>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-wrap gap-8">
          {/* Support Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="list-none">
              <li>Help</li>
              <li>Refund Policy</li>
              <li>Status</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Help</h3>
            <ul className="list-none">
              <li>FAQ</li>
              <li>Terms of Service</li>
              {/* Add more help links as needed */}
            </ul>
          </div>

          {/* Refund Policy Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Refund Policy</h3>
            <p>Your refund policy details here.</p>
          </div>

          {/* Status Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Status</h3>
            <p>Check the status of our services.</p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Your contact information here.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

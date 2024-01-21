// AdminStudent.js
import React from 'react';

const AdminStudent = () => {
  // Dummy data for the admin
  const admin = {
    name: 'Dr. John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    department: 'Computer Science',
    adminID: 'CS-001',
    photo: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  // Dummy data for students
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      phone: '987-654-3210',
      projects: ['Project A', 'Project B'],
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '555-123-4567',
      projects: ['Project C', 'Project D'],
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Admin Details Section */}
      <div>
        <div className="flex items-center mb-4">
          <img src={admin.photo} alt={`${admin.name}'s Photo`} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-2xl font-bold">{admin.name}</h2>
            <p className="text-gray-500">{`Email: ${admin.email}`}</p>
            <p className="text-gray-500">{`Phone: ${admin.phone}`}</p>
            <p className="text-gray-500">{`Department: ${admin.department}`}</p>
            <p className="text-gray-500">{`Admin ID: ${admin.adminID}`}</p>
          </div>
        </div>
      </div>

      {/* List of Students Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Students Who Worked with {admin.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-semibold mb-2">{student.name}</h4>
              <p className="text-gray-600 mb-2">{`Email: ${student.email}`}</p>
              <p className="text-gray-600 mb-2">{`Phone: ${student.phone}`}</p>
              <p className="text-gray-600">{`Projects: ${student.projects.join(', ')}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminStudent;

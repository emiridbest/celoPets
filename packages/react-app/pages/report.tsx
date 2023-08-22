import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  petDescription: string;
}

function Report() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    petDescription: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formState);
    // You can add API calls or further actions here
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Report a Stray Pet</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact Number:</label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="contactNumber"
              value={formState.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="address"
              value={formState.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pet Description:</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="petDescription"
              value={formState.petDescription}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Report;

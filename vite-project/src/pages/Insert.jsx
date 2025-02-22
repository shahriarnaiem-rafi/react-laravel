import axios from 'axios';
import { useState } from 'react';
// import React, { useState } from 'react';

const Insert = () => {
    const [userField, setUserField] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    
    const changeUserFieldHandler = (e) => {
      setUserField({
        ...userField,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmitChange = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await axios.post("http://127.0.0.1:8000/api/posted", userField);
        fetchUser();
        setUserField({ name: "", email: "", phone: "" });
      } catch (err) {
        console.log("Something went wrong");
      }
      setLoading(false);
    };
  
   
    return (
        <>
           <div className="bg-white shadow-lg rounded-xl p-6 w-1/3">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          User Registration
        </h2>
        <form onSubmit={onSubmitChange} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={userField.name}
              onChange={changeUserFieldHandler}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userField.email}
              onChange={changeUserFieldHandler}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={userField.phone}
              onChange={changeUserFieldHandler}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>  
        </>
    );
};

export default Insert;
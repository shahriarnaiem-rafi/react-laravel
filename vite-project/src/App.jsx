import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link, Route, Routes } from "react-router-dom";
// import Edit from "./pages/edit";

function App() {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

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
      console.log("Something went wrong", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/view");
      setUser(result.data.results);
    } catch (err) {
      console.log("Error fetching users", err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
      const newUserData = user.filter((item) => item.id !== id);
      setUser(newUserData);
    } catch (err) {
      console.log("Error deleting user", err);
    }
  };

  // Edit

  return (
    <div className="min-h-screen bg-gray-100 flex py-10">
      {/* Left Side - Form Section */}
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
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
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

      {/* Right Side - Table Section */}
      <div className="w-2/3 ml-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          User List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3">ID</th>
                <th className="border border-gray-300 px-4 py-3">Full Name</th>
                <th className="border border-gray-300 px-4 py-3">Email</th>
                <th className="border border-gray-300 px-4 py-3">Phone</th>
                <th className="border border-gray-300 px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((user, i) => (
                  <tr
                    key={i}
                    className="text-center odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition"
                  >
                    <td className="border border-gray-300 px-4 py-3">
                      {i + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {user.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {user.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {user.phone}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-red-500 px-3 py-1 rounded-lg font-medium hover:bg-red-300 transition"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <Link
                        to={`/edit/${user.id}`}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-yellow-600 transition"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-6">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Routes>
        <Route path="/edit" element={<Edit />} />
      </Routes> */}
    </div>
  );
}

export default App;

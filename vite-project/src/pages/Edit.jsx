
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [userField, setUserField] = useState({
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/api/view/${id}`);
            setUserField(result.data.data[0]);
        } catch (err) {
            console.log("Something went wrong");
        }
    };

    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/edit/${id}`, userField);
           
            navigate('/');
        } catch (err) {
            console.log("Something went wrong");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Edit User</h1>
            <form onSubmit={onSubmitChange}>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">ID:</label>
                    <input 
                        type="text" 
                        className="w-full mt-1 p-2 border rounded-md bg-gray-100" 
                        value={id} 
                        disabled 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Full Name:</label>
                    <input 
                        type="text" 
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        name="name" 
                        value={userField.name} 
                        onChange={changeUserFieldHandler} 
                        placeholder="Enter Your Full Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Email:</label>
                    <input 
                        type="email" 
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        name="email" 
                        value={userField.email} 
                        onChange={changeUserFieldHandler} 
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium">Contact:</label>
                    <input 
                        type="text" 
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        name="phone" 
                        value={userField.phone} 
                        onChange={changeUserFieldHandler} 
                        placeholder="Enter contact"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full  bg-violet-800 hover:bg-purple-800 text-white py-2 rounded-md  transition duration-300"
                >
                    Update
                </button>
            </form>
            <div className="mt-4 text-center">
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default EditCustomer;
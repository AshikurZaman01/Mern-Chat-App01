import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../../apiCall/Auth/auth";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa"

const SignUp = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await signUpUser(user);
            if (response.success) {
                toast.success(response.message);
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                })
                navigate('/login');
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }

    }



    return (
        <div className="w-full h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Account</h2>
                <form className="space-y-6" onSubmit={handleOnSubmit}>

                    <div className="flex justify-between items-center gap-3">
                        {/* firstName Input */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">FirstName</label>
                            <input
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your firstName"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* lastName Input */}
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">LastName</label>
                            <input
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your lastName"
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            {
                                loading ? <FaSpinner className="animate-spin mx-auto" /> : " Sign Up"
                            }
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Already have an account?
                        <Link to="/login" className="text-indigo-600 font-medium hover:underline"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

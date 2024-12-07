import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../apiCall/Auth/auth";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await loginUser(user);

            localStorage.setItem('token', response.token);

            if (response.success) {
                toast.success(response.message);

                setUser({
                    email: "",
                    password: "",
                })
                navigate('/')
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="w-full h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login to Your Account</h2>
                <form className="space-y-6" onSubmit={handleOnSubmit}>
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                            placeholder="Enter your password"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full p-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            {
                                loading ? <FaSpinner className="animate-spin mx-auto" /> : " Sign Up"
                            }
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Don't have an account?
                        <Link to="/signup" className="text-teal-600 font-medium hover:underline"> Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

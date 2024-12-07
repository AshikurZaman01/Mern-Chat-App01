import { useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            navigate("/login")
        } else {
            setLoading(false);
        }

    }, [navigate])

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin mx-auto" color="green" size={30}></FaSpinner>
        </div>;
    }

    return children;
}

export default ProtectedRoutes
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../../apiCall/usersApi/userApi";

const ProtectedRoutes = ({ children }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const getLogingUser = async () => {
        try {
            const response = await getLoggedUser();

            if (response.success) {
                console.log(response.data);
                setUser(response.data);
                setLoading(false);
            } else {
                navigate("/login");
            }
        } catch (error) {
            navigate("/login");
            console.error(error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            getLogingUser();
        }

    }, [navigate]);

    if (loading) {
        return <div className="flex justify-center items-center mt-44">
            <FaSpinner className="animate-spin mx-auto" color="green" size={40}></FaSpinner>
        </div>;
    }

    return children;
};

export default ProtectedRoutes;

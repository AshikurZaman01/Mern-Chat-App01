import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllUsers, getLoggedUser } from "../../apiCall/usersApi/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers, setUser } from "../../redux/features/userSlice";

const ProtectedRoutes = ({ children }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);


    const getLogingUser = async () => {
        try {
            const response = await getLoggedUser();

            if (response.success) {
                dispatch(setUser(response.data));
                setLoading(false);
            } else {
                navigate("/login");
            }
        } catch (error) {
            navigate("/login");
            console.error(error);
        }
    };

    const allUsers = async () => {
        try {
            const response = await getAllUsers();

            if (response.success) {

                dispatch(setAllUsers(response.allUsers));
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            getLogingUser();
            allUsers();
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

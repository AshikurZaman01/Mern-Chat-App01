import { axiosInstances } from "..";

export const getLoggedUser = async () => {
    try {

        const response = await axiosInstances.get('http://localhost:3000/api/users/getLoggedUser');
        return response.data;

    } catch (error) {
        console.error("Error fetching logged user:", error);
        throw error;
    }

}
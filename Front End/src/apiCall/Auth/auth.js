import { axiosInstances } from "..";

export const signUpUser = async (user) => {
    try {
        const response = await axiosInstances.post("http://localhost:3000/api/users/signIn", user);
        return response.data;
    } catch (error) {
        console.error("Error signing up user:", error);
        throw error;
    }
}

export const loginUser = async (user) => {
    try {
        const response = await axiosInstances.post("http://localhost:3000/api/users/login", user);
        return response.data;
    } catch (error) {
        console.error("Error signing up user:", error);
        throw error;
    }
}
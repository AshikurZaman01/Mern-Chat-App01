import axios from "axios";

export const axiosInstances = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },

    baseURL: "http://localhost:3000/api",
})
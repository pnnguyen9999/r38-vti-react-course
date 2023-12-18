import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://6553722e5449cfda0f2eb53b.mockapi.io/employees",
    timeout: 5000
});
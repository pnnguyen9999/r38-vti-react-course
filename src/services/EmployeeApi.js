import { axiosClient } from "./axiosServices";

const getEmployee = () => {
    return axiosClient.get("/");
};

const createEmployee = (data) => {
    return axiosClient
        .post("/", data);
};

const updateEmployee = (id, data) => {
    return axiosClient
        .put(`/${id}`, data);
};

const deleteEmployee = (id) => {
    return axiosClient
        .delete(`/${id}`);
};

const EmployeeApi = {
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
};

export default EmployeeApi;
import axios from "axios";
import { authHeader } from "./";
import { config } from "../config";

const { API_URL, endpoints: { auth, userPath } } = config;

// VISITOR ENDPOINTS

export const register = async (payload) => {
    const response = await axios.post(`${API_URL + auth.register}`, payload);
    return response.data;
};

export const login = async (payload) => {
    const response = await axios.post(`${API_URL + auth.login}`, payload);
    return response.data;
};

// USER ENDPOINTS

export const getUser = async () => {
    const response = await axios.get(`${API_URL + userPath}`, {
        headers: authHeader()
    });
    return response.data;
};

export const updateUser = async (userInfo) => {
    const response = await axios.put(`${API_URL + userPath}`, userInfo, {
        headers: authHeader()
    });
    return response.data;
};

export const updatePassword = async (passwords) => {
    const response = await axios.put(`${API_URL + userPath}/auth`, passwords, {
        headers: authHeader()
    })
    return response.data;
};

// ADMIN ENDPOINTS

export const getUsersByPage = async (
    page = 0,
    size = 20,
    sort = "id",
    direction = "DESC"
) => {
    const response = await axios.get(`${API_URL + userPath}/auth/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`, {
        headers: authHeader()
    });
    return response.data;
};

// export const downloadUsersReport = async () => {
//     const response = await axios.get(`${API_URL + reports.users}`, {
//         headers: {
//             ...authHeader(),
//             "Content-Type":
//                 "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         },
//         responseType: "blob"
//     });
//     return response.data;
// };

export const getUserAdmin = async (id) => {
    const response = await axios.get(`${API_URL + userPath}/${id}/auth`, {
        headers: authHeader()
    });
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL + userPath}/${id}/auth`, {
        headers: authHeader()
    });
    return response.data;
};

export const updateUserAdmin = async (id, userInfo) => {
    const response = await axios.put(`${API_URL + userPath}/${id}/auth`, userInfo, {
        headers: authHeader()
    });
    return response.data;
};

// export const getUserHabits = async () => {
//     const response = await axios.get()
// }
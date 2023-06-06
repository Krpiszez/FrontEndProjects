import axios from "axios";
import { authHeader } from "./";
import { config } from "../config";

const { API_URL, endpoints: { habits: { track }, userPath, authPath } } = config;

export const trackHabit = async (habitId, completed) => {
    const response = await axios.post(`${API_URL + track}?habitId=${habitId}&completed=${completed}`, 
    null, {
        headers: authHeader()
    });
    return response.data;
};
export const deleteHabit = async (habitId) => {
    const response = await axios.delete(`${API_URL + track}?habitId=${habitId}`, {
        headers: authHeader()
    });
    return response.data;
}

export const deleteYesterdaysHabit = async (habitId) => {
    const response = await axios.delete(`${API_URL + track}/yesterday?habitId=${habitId}`, {
        headers: authHeader()
    });
    return response.data;
}

export const getTrackHabit = async () => {
    const response = await axios.get(`${API_URL + track}`, {
        headers: authHeader()
    });
    return response.data;
};

export const getRecord = async () => {
    const response = await axios.get(`${API_URL + track + userPath}`, {
        headers: authHeader()
    });
    return response.data;
};

export const getYesterdaysRecord = async () => {
    const response = await axios.get(`${API_URL + track + authPath + userPath}`, {
        headers: authHeader()
    });
    return response.data;
};

export const getAllRecords = async () => {
    const response = await axios.get(`${API_URL + track}`, {
        headers: authHeader()
    });
    return response.data;
};


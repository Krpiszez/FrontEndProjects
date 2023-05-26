import axios from "axios";
import { authHeader } from "./";
import { config } from "../config";

const { API_URL, endpoints: { habits: { track } } } = config;

// VISITOR ENDPOINTS

export const trackHabit = async (habitId, completed) => {
    const response = await axios.post(`${API_URL + track}?habitId=${habitId}&completed=${completed}`, {
        headers: authHeader()
    });
    return response.data;
};


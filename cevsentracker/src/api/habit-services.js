import axios from "axios";
import { authHeader } from "./";
import { config } from "../config";

const { API_URL, endpoints: {  habits } } = config;

// VISITOR ENDPOINTS

export const getAllHabits = async (payload) => {
    const response = await axios.get(`${API_URL + habits.get}`);
    return response.data;
};

export const getHabitById = async (habitId) => {
    const response = await axios.get(`${API_URL + habits.get}/${habitId}`, 
    {headers: authHeader()});
    return response.data;
};
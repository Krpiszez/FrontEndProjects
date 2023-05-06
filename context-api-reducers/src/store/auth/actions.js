import { settings } from "../../constants";

const {types: { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } } = settings;

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
})

export const loginFailure = (payload) =>({
    type: LOGIN_FAILURE,
    payload: payload
})

export const logout = () =>({
    type: LOGOUT
})
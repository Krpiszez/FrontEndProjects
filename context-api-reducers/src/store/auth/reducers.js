import { settings } from "../../constants";
import { authInitialState } from "./initialState";

const {types: { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } } = settings;

const authReducer = (state, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case LOGIN_FAILURE:
            return{
                ...state,
                error: action.payload
            };    
        case LOGOUT:
            return{
                authInitialState,
            }
        default:
            return state;
    }
}
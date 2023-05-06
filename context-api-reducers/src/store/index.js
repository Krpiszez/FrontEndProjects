import { createContext, useContext, useReducer } from "react";
import authReducer from "./auth/reducers";
import { authInitialState } from "./auth/initialState";
import countReducer from "./count/reducers";
import { countInitialState } from "./count/initialState";


const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);


export const StoreProvider = ({ children }) => {
    //        getter   setter   
    // const [state, dispatch] = useReducer(reducer, initialState);

    const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);
    const [countState, dispatchCount] = useReducer(countReducer, countInitialState);


    return (
        <StoreContext.Provider value={{ authState, dispatchAuth, countState, dispatchCount }}>
            {children}
        </StoreContext.Provider>
    )
};
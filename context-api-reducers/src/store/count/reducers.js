import { settings } from "../../constants";
import { countInitialState } from "./initialState";

const {types: {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET}} = settings;

const countReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return{
                ...state,
                count: state.count +1
            }
        case COUNTER_DECREMENT:
            return{
                ...state,
                count: state.count -1
            }
        case COUNTER_RESET:
            return{
                ...state,
                count: 0
            }
            
           
    
        default:
            break;
    }
} 
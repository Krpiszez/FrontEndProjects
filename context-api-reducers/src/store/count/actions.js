import { settings } from "../../constants";

const {types: {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET}} = settings;

export const counterIncrement = () => ({
    type: COUNTER_INCREMENT
})

export const counterDecrement = () => ({
    type: COUNTER_DECREMENT
})

export const counterReset = () => ({
    type: COUNTER_RESET
})
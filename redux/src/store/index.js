import { configureStore } from "@reduxjs/toolkit";
import localizationReducer from './localization/slice'

const store = configureStore({
    reducer: {
        localization: localizationReducer,
        theme: ""
    }
})

export default store;
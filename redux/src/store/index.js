import { configureStore } from "@reduxjs/toolkit";
import localizationReducer from './localization/slice'
import themeReducer from './theme/slice'
const store = configureStore({
    reducer: {
        localization: localizationReducer,
        theme: themeReducer
    }
})

export default store;
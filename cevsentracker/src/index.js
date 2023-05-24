import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import "./assets/styles/scss/styles.scss";

const root = createRoot(document.getElementById("root"));

root.render(
        <React.StrictMode>
                <StoreProvider store={store}>
                        <App />
                </StoreProvider>
        </React.StrictMode>
    );
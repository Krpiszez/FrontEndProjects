import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ExchangePage } from '../pages';
// import Home from '../pages/home';
// import ExchangePage from '../pages/exchange-page';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="exchange" element={<ExchangePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
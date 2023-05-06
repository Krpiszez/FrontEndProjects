import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {settings} from "../constants"
import { Login, Home } from "../pages";

const AppRouter = () => {
    // const routes = settings.routes;
    // const home = routes.home;
    // const login = routes.login;
    const { routes: { home, login } } = settings;


  return (
    <Router>
        <Routes>
            <Route path={home} element={<Home/>}/>
            <Route path={login} element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
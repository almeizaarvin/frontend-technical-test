import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfileDetail from "./Pages/Profile/ProfileDetail";
import ProfileContextProvider from "./API/Provider/Provider";
import CreateProfile from "./Pages/Profile/CreateProfile";

function App() {
    return (
        <ProfileContextProvider>
            <Router>
                <Routes>
                    <Route exact element={<Home />} path="/" />
                    <Route
                        exact
                        element={<ProfileDetail />}
                        path="/profiledetail/:full_name"
                    />
                    <Route exact element={<CreateProfile />} path="/create" />
                </Routes>
            </Router>
        </ProfileContextProvider>
    );
}

export default App;

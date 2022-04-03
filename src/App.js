import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfileDetail from "./Pages/ProfileDetail/ProfileDetail";
import ProfileContextProvider from "./API/Provider/Provider";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    element={
                        <ProfileContextProvider>
                            <Home />
                        </ProfileContextProvider>
                    }
                    path="/"
                />
                <Route
                    exact
                    element={<ProfileDetail />}
                    path="/profiledetail/:full_name"
                />
            </Routes>
        </Router>
    );
}

export default App;

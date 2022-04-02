import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProfileDetail from "./Pages/ProfileDetail/ProfileDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact element={<Home />} path="/" />
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

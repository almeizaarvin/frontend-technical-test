import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProfileContextProvider from "./API/Provider/Provider";

ReactDOM.render(
    <React.StrictMode>
        <ProfileContextProvider>
            <App />
        </ProfileContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

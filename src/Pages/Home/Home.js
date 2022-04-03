import "./Home.css";
import React, { createContext, useEffect, useState } from "react";
import CadetBlueCard from "../../Components/CadetBlueCard/CadetBlueCard";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../API/Provider/Provider";

export function Home() {
    const { persons } = useContext(ProfileContext);

    console.log(persons);

    return (
        <div>
            <div className="row">
                {persons.map((el) => (
                    <div className="col">
                        <CadetBlueCard person={el} />
                    </div>
                ))}
                {persons.length % 2 === 0 ? <></> : <div className="col"></div>}
            </div>
            <Link
                exact="true"
                style={{ color: "White", textDecoration: "none" }}
                to={{
                    pathname: `create`,
                }}
            >
                <div class="float-button">+</div>
            </Link>
        </div>
    );
}

export default Home;

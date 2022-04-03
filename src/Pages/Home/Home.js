import "./Home.css";
import React, { createContext, useEffect, useState } from "react";
import CadetBlueCard from "../../Components/CadetBlueCard/CadetBlueCard";
import { useContext } from "react";
import { ProfileContext } from "../../API/Provider/Provider";

export function Home() {
    const { persons, addPerson } = useContext(ProfileContext);

    console.log(persons);

    return (
        <div className="row">
            {persons.map((el) => (
                <div className="col">
                    <CadetBlueCard person={el} />
                </div>
            ))}
        </div>
    );
}

export default Home;

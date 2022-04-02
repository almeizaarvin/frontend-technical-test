import "./CadetBlueCard.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function CadetBlueCard(props) {
    const person = props.person;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="box">
            <div className="card-content">
                <NavLink
                    exact="true"
                    style={{ color: "White", textDecoration: "none" }}
                    to={`profiledetail/${person.full_name}`}
                >
                    <h2>{person.full_name}</h2>
                </NavLink>
                <p>Expert Skills: </p>
                {person.expert_skills.map((s, idx) =>
                    idx === person.expert_skills.length - 1 ? (
                        <span>{capitalizeFirstLetter(s)}</span>
                    ) : (
                        <span>{capitalizeFirstLetter(s)}, </span>
                    )
                )}
            </div>
        </div>
    );
}

export default CadetBlueCard;

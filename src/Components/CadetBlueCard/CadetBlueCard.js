import "./CadetBlueCard.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileDetail from "../../Pages/ProfileDetail/ProfileDetail";

function CadetBlueCard(props) {
    const person = props.person;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="box">
            <div className="card-content">
                <Link
                    exact="true"
                    style={{ color: "White", textDecoration: "none" }}
                    to={{
                        pathname: `profiledetail/${person.full_name}`,
                    }}
                    state={{ person: person }}
                >
                    <h2>{person.full_name}</h2>
                </Link>
                <p>Expert Skills: </p>
                {person.expert_skills.map((s, idx) =>
                    idx === person.expert_skills.length - 1 ? (
                        <span>{capitalizeFirstLetter(s)}</span>
                    ) : (
                        <span>{capitalizeFirstLetter(s)}, </span>
                    )
                )}
                {person.expert_skills.length === 0 ? <span>-</span> : <></>}
            </div>
        </div>
    );
}

export default CadetBlueCard;

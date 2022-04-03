import "./Profile.css";
import React from "react";
import { useLocation } from "react-router-dom";

function ProfileDetail() {
    const person = useLocation().state.person;
    const path = process.env.PUBLIC_URL;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="cream-card">
            <div>
                <div className="profile-img">
                    <div className="badge">C</div>
                    <img src={path + "/Images/user.png"} alt="" />
                </div>
            </div>

            <div className="cream-card">
                <h2>{person.full_name}</h2>
                <br></br>
                {person.expert_skills.length !== 0 ? (
                    <p>Expert skills</p>
                ) : (
                    <></>
                )}
                <div>
                    <ul>
                        {person.expert_skills.map((s) => (
                            <li>{capitalizeFirstLetter(s)}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default ProfileDetail;

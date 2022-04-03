import "./Profile.css";
import React, { useContext, useEffect, useState, setContext } from "react";
import { useLocation } from "react-router-dom";
import { ProfileContext } from "../../API/Provider/Provider";

function CreateProfile() {
    const { persons, addPerson } = useContext(ProfileContext);

    function validateForm() {
        function setPersonSkills() {
            var skillsList = [];
            var skills = document.querySelectorAll(".checkbox-input");
            skills.forEach((s) => {
                if (s.checked === true) {
                    skillsList.push(s.name);
                }
            });
            return skillsList;
        }

        var warning = document.querySelector(".warning");
        var name = document.forms["newProfile"]["name"].value;

        if (name === "") {
            warning.innerHTML = "Please fill in name above";
        } else {
            warning.innerHTML = "";
            addPerson({
                id: (persons.length + 1).toString(),
                full_name: name,
                expert_skills: setPersonSkills(),
            });
            console.log(persons);
            window.history.back();
        }
    }

    return (
        <div className="cream-card">
            <h2>Create Person</h2>

            <div className="">
                <br></br>
                <h3>Name</h3>
                <form name="newProfile">
                    <input type="text" name="name" class="text-input" />
                    <p class="warning"></p>
                    <div>
                        <h3>Expert Skills</h3>
                        <input
                            type="checkbox"
                            id="topping"
                            name="javascript"
                            value="javascript"
                            class="checkbox-input"
                        />
                        Javascript
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping"
                            name="python"
                            value="python"
                            class="checkbox-input"
                        />
                        Python
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping"
                            name="golang"
                            value="golang"
                            class="checkbox-input"
                        />
                        Golang
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="topping"
                            name="php"
                            value="php"
                            class="checkbox-input"
                        />
                        PHP
                    </div>
                    <div className="center">
                        <input
                            type="button"
                            value="Submit"
                            class="submit-button"
                            onClick={validateForm}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProfile;

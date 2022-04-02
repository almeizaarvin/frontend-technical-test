import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [persons, setPersons] = useState([]);

    const response = {
        message: "Success to get data",
        data: [
            {
                id: "1",
                first_name: "John",
                last_name: "Doe",
                skills: {
                    javascript: "advanced",
                    python: "basic",
                    golang: "expert",
                    php: "expert",
                },
            },
            {
                id: "2",
                first_name: "Will",
                last_name: "Smith",
                skills: {
                    javascript: "expert",
                    python: "basic",
                    golang: "advanced",
                    php: "advanced",
                },
            },
            {
                id: "3",
                first_name: "Jaden",
                last_name: "Smith",
                skills: {
                    javascript: "expert",
                    python: "expert",
                    golang: "expert",
                    php: "expert",
                },
            },
            {
                id: "4",
                first_name: "El",
                last_name: "Professor",
                skills: {
                    javascript: "advanced",
                    python: "basic",
                    golang: "intermediate",
                    php: "intermediate",
                },
            },
        ],
    };

    function personSkills(skills) {
        var personSkills = [];
        for (let j in skills) {
            if (skills[j] === "expert") {
                personSkills.push(j);
            }
        }
        return personSkills;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        setPersons(personsData);
    }, []);

    var personsData = [];
    for (let i in response.data) {
        var p = {
            id: response.data[i].id,
            full_name:
                response.data[i].first_name + " " + response.data[i].last_name,
            expert_skills: personSkills(response.data[i].skills),
        };
        personsData.push(p);
    }

    return (
        <div className="row">
            {persons.map((el) => (
                <div className="col">
                    <div className="box">
                        <div className="card-content">
                            <h2>{el.full_name}</h2>
                            <p>Expert Skills: </p>
                            {el.expert_skills.map((s, idx) =>
                                idx === el.expert_skills.length - 1 ? (
                                    <span>{capitalizeFirstLetter(s)}</span>
                                ) : (
                                    <span>{capitalizeFirstLetter(s)}, </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;

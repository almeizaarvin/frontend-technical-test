import "./ProfileDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileDetail() {
    // const person = props.person;
    const { full_name } = useParams();

    return <p>This is {full_name}'s page</p>;
}

export default ProfileDetail;

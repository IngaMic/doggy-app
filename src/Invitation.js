import React, { useEffect } from "react";
//import { useSelector } from "react-redux";

export default function Invitation({ cd, closeInvitation }) {
    useEffect(() => {}, []);

    if (!cd) {
        return null;
    }
    return (
        <div id="invitation">
            <button onClick={closeInvitation}>x</button>
            <p>Invite your friend to register with this code:</p>
            <h2>{cd}</h2>
        </div>
    );
}

import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";

export default function OtherUsers({ otherUsers }) {
    //const dispatch = useDispatch();
    // useEffect(() => {
    // }, []);

    if (!otherUsers) {
        return null;
    } else {
        console.log("otherUsers from OtherUsers.js", otherUsers);
    }
    return (
        <div className="other-users">
            {!otherUsers.length && <h5>No other users!</h5>}
            {!!otherUsers.length && (
                <div id="other-users-container">
                    {otherUsers.map((otherUser, i) => (
                        <div className="other-user" key={i}>
                            <img
                                className="other-users-img"
                                src={
                                    otherUser.imageurl ||
                                    "https://image.flaticon.com/icons/svg/1338/1338020.svg"
                                }
                            />
                            <p>{otherUser.first}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

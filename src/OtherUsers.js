import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//useDispatch, concider
export default function OtherUsers({ otherUsers }) {
    const onlineUsers = useSelector((state) => state && state.onlineUsers);
    //const dispatch = useDispatch();
    useEffect(() => {}, [onlineUsers]);

    if (!otherUsers) {
        return null;
    } else {
        //console.log("otherUsers from OtherUsers.js", otherUsers);
        //console.log("onlineUsers from OtherUsers.js", onlineUsers);
        if (!onlineUsers) {
            return null;
        }
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
                            {!onlineUsers.length && <p></p>}
                            {!!onlineUsers.length && (
                                <div>
                                    {onlineUsers.map((onlineUser, i) => (
                                        <div key={i}>
                                            {otherUser.id == onlineUser.id && (
                                                <p className="online-user-p"></p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <p className="other-user-name">{otherUser.first}</p>
                            <div></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

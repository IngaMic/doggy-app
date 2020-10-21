import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveTrick } from "./actions";

export default function Trick(props) {
    const dispatch = useDispatch();
    const trick = useSelector((state) => state.trick);

    useEffect(() => {
        //console.log("this.props.match.params.id", match.params.id);
        dispatch(receiveTrick(props.match.params.id));
        // console.log("props.match.params.id", props.match.params.id);
    }, []);

    if (!trick) {
        return null;
    } else {
        console.log("trick from Trick.js", trick);
    }
    return (
        <div className="trick-page">
            {!trick && <h5>We are working on this trick! Coming soon!</h5>}
            {!!trick && (
                <div className="oneTrick">
                    <h2>{trick.tname}</h2>
                    <p>{trick.descr}</p>
                    <img src={trick.imagebub}></img>
                </div>
            )}
        </div>
    );
}

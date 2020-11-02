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
                    <img src={trick.imagebub}></img>
                    <h2>{trick.tname}</h2>
                    <h6>{trick.descr}</h6>

                    <div className="trick-steps">
                        <div className="trick-step one">
                            <h3>Step 1:</h3>
                            <p>{trick.stepone}</p>
                            <img src={trick.imageone}></img>
                        </div>
                        <div className="trick-step two">
                            <h3>Step 2:</h3>
                            <p>{trick.steptwo}</p>
                            <img src={trick.imagetwo}></img>
                        </div>
                        <div className="trick-step three">
                            <h3>Step 3:</h3>
                            <p>{trick.stepthree}</p>
                            <img src={trick.imagethree}></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

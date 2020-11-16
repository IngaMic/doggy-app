import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveTrick, updateTrickNumber } from "./actions";

export default function Trick(props) {
    const dispatch = useDispatch();
    const trick = useSelector((state) => state.trick);
    const trickNumber = useSelector((state) => state.trickNumber);
    var trickN = 0;

    useEffect(() => {
        //console.log("this.props.match.params.id", match.params.id);
        dispatch(receiveTrick(props.match.params.id));

        // console.log("props.match.params.id", props.match.params.id);
    }, [trickN, trick]);

    function changeTrickNumber(e) {
        e.preventDefault();
        //console.log("e.currentTarget.value", e.currentTarget.value);
        trickN = e.currentTarget.value;
        var gif;
        var text;
        if (trickN == "one") {
            gif = trick.imageone;
            text = trick.stepone;
            dispatch(updateTrickNumber(gif, text));
            return trickN;
        } else if (trickN == "two") {
            gif = trick.imagetwo;
            text = trick.steptwo;
            dispatch(updateTrickNumber(gif, text));
            return trickN;
        } else if (trickN == "three") {
            gif = trick.imagethree;
            text = trick.stepthree;
            dispatch(updateTrickNumber(gif, text));
            return trickN;
        }
    }

    if (!trick) {
        return null;
    } else {
        return (
            <div className="trick-page">
                {!trick && <h5>We are working on this trick! Coming soon!</h5>}
                {!!trick && (
                    <div className="oneTrick">
                        {!trickNumber && (
                            <div className="trick-step">
                                <img src={trick.imageon}></img>

                                <p>{trick.descr}</p>
                            </div>
                        )}
                        {!!trickNumber && (
                            <div className="trick-step">
                                <img src={trickNumber.gif}></img>

                                <p>{trickNumber.text}</p>
                            </div>
                        )}
                        <div id="trick-step-number">
                            <button
                                onClick={(e) => changeTrickNumber(e)}
                                value="one"
                            >
                                1
                            </button>
                            <button
                                onClick={(e) => changeTrickNumber(e)}
                                value="two"
                            >
                                2
                            </button>
                            <button
                                onClick={(e) => changeTrickNumber(e)}
                                value="three"
                            >
                                3
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

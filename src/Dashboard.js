import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openTrick, receiveTricks, receiveQuotes } from "./actions";

export default function Tricks() {
    const dispatch = useDispatch();
    const tricks = useSelector(
        (state) => state.tricks
        //  && state.tricks.filter(
        //     trick => trick.done == null
        // )
    );
    const qts = useSelector(
        (state) => state.quotes
        //  && state.tricks.filter(
        //     trick => trick.done == null
        // )
    );
    //console.log("state.quotes from Dashb", qts);
    useEffect(() => {
        dispatch(receiveTricks());
        dispatch(receiveQuotes());
    }, [tricksdone, theQuote]);

    if (!qts) {
        return "not logging quotes";
    } else {
        // console.log("quotes", qts);
        var random = Math.floor(Math.random() * 10 + 1);
        for (var i = 0; qts.length > i; i++) {
            if (qts[i].id == random) {
                var theQuote = qts[i];
            }
            //console.log("theQuote", theQuote);
        }
    }
    if (!tricks) {
        return "we haven't done any tricks yet";
    } else {
        var tricksdone = tricks.filter(function (trick) {
            return trick.done == true;
        });
        // console.log("done tricks from trickss", tricksdone);
        var trickstodo = tricks.filter(function (trick) {
            return trick.done == false;
        });
        //console.log("todo tricks from tricks", trickstodo);
    }
    var alltricks = (
        <div id="alltricks-list">
            {tricks.map((trick, i) => (
                <div className="trick" key={i}>
                    <div className={trick.tname}>
                        <Link to={`/trick/${trick.id}`}>
                            <img
                                className="alltrick-img"
                                src={
                                    trick.imagebub ||
                                    "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
                                }
                            />
                        </Link>
                        <p>{trick.tname}</p>
                    </div>
                </div>
            ))}
        </div>
    );
    var quote = (
        <div>
            <p>{theQuote.quote}</p>
            <p>{theQuote.author}</p>
        </div>
    );

    // var allquotes = (
    //     <div>
    //         {qts.map((q, i) => (
    //             <div className="quote" key={i}>
    //                 <p>{q.quote}</p>
    //                 <p>{q.author}</p>
    //             </div>
    //         ))}
    //     </div>
    // );

    tricksdone = (
        <div id="tricksdone-list">
            <h3>Done:</h3>
            {tricksdone.map((trickdone, i) => (
                <div className="trickdone" key={i}>
                    <img
                        className="trickdone-img"
                        src={
                            trickdone.imageurl ||
                            "https://image.flaticon.com/icons/svg/1338/1338020.svg"
                        }
                    />
                    <button
                        onClick={() => {
                            dispatch(openTrick(trickdone.id));
                        }}
                    >
                        Open
                    </button>
                </div>
            ))}
        </div>
    );
    trickstodo = (
        <div id="trickstodo-list">
            <h3>To Do:</h3>
            {trickstodo.map((tricktodo, j) => (
                <div className="tricktodo" key={j}>
                    <img
                        className="tricktodo-img"
                        src={
                            tricktodo.imageurl ||
                            "https://image.flaticon.com/icons/svg/1338/1338020.svg"
                        }
                    />
                    <button
                        onClick={() => {
                            dispatch(openTrick(tricktodo.id));
                        }}
                    >
                        Open
                    </button>
                </div>
            ))}
        </div>
    );
    return (
        <div className="tricks-container">
            <div className="tricks-gradient"></div>
            <div className="header">
                <h1>THE BASICS</h1>
            </div>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
            {/* <img src="background.png" className="tricksbg"></img> */}
            {/* <div id="tricksdone">
                {!tricks.length && <h5>No tricks yet!</h5>}
                {!!tricks.length && tricksdone}
            </div>
            <div id="trickstodo">
                {!tricks.length && <h5>Tricks list is empty</h5>}
                {!!tricks.length && trickstodo}
            </div> */}
            <div>
                {!tricks.length && <h5>No tricks yet!</h5>}
                {!!tricks.length && alltricks}
            </div>
            <div className="quotedisplay">
                {!qts.length && <h5>No quotes yet!</h5>}
                {!!qts.length && quote}
            </div>
        </div>
    );
}

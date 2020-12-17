import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveTricks, receiveQuotes } from "./actions";
import Article1 from "/Article1";

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
    }, [theQuote]);

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
        // var tricksdone = tricks.filter(function (trick) {
        //     return trick.done == true;
        // });
        // // console.log("done tricks from trickss", tricksdone);
        // var trickstodo = tricks.filter(function (trick) {
        //     return trick.done == false;
        // });
        //console.log("todo tricks from tricks", trickstodo);
    }

    window.addEventListener("scroll", function () {
        const target = document.querySelectorAll("img, p");
        // const text = document.querySelectorAll("p")
        var index = 0,
            length = target.length;
        for (index; index < length; index++) {
            var pos = window.pageYOffset * target[index].dataset.rate;

            target[index].style.transform =
                "translate3d(0px, " + pos + "px, 9px)";
            console.log(target);
        }
    });
    var alltricks = (
        <div id="alltricks-list">
            {/* <h1 className="trickHeader">TRICKS</h1> */}
            {tricks.map((trick, i) => (
                <div className="trick" key={i}>
                    <div className={trick.tname}>
                        <Link to={`/trick/${trick.id}`}>
                            <img
                                className="alltrick-img"
                                data-rate="-0.35"
                                data-direction="vertical"
                                src={
                                    trick.imagebub ||
                                    "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
                                }
                            />
                        </Link>
                        <p data-rate="-0.34">{trick.tname}</p>
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

    // tricksdone = (
    //     <div id="tricksdone-list">
    //         <h3>Done:</h3>
    //         {tricksdone.map((trickdone, i) => (
    //             <div className="trickdone" key={i}>
    //                 <img
    //                     className="trickdone-img"
    //                     src={
    //                         trickdone.imageurl ||
    //                         "https://image.flaticon.com/icons/svg/1338/1338020.svg"
    //                     }
    //                 />
    //                 <button
    //                     onClick={() => {
    //                         dispatch(openTrick(trickdone.id));
    //                     }}
    //                 >
    //                     Open
    //                 </button>
    //             </div>
    //         ))}
    //     </div>
    // );
    // trickstodo = (
    //     <div id="trickstodo-list">
    //         <h3>To Do:</h3>
    //         {trickstodo.map((tricktodo, j) => (
    //             <div className="tricktodo" key={j}>
    //                 <img
    //                     className="tricktodo-img"
    //                     src={
    //                         tricktodo.imageurl ||
    //                         "https://image.flaticon.com/icons/svg/1338/1338020.svg"
    //                     }
    //                 />
    //                 <button
    //                     onClick={() => {
    //                         dispatch(openTrick(tricktodo.id));
    //                     }}
    //                 >
    //                     Open
    //                 </button>
    //             </div>
    //         ))}
    //     </div>
    // );
    return (
        <div className="tricks-container">
            <div className="tricks-gradient">
                <div className="background1">
                    <img
                        className="backOneOne"
                        data-rate="-0.6"
                        src="\1.svg"
                        opacity="2"
                    ></img>
                    <img
                        className="backOneTwo"
                        data-rate="-0.3"
                        src="\2.svg"
                    ></img>
                    <img
                        className="backOneThree"
                        data-rate="-0.2"
                        src="\3.svg"
                    ></img>
                    <img
                        className="backOneFour"
                        data-rate="-0.6"
                        src="\4.svg"
                    ></img>
                    <img
                        className="backOneFive"
                        data-rate="-0.7"
                        src="\5.svg"
                    ></img>
                </div>
                <div className="background2">
                    <img className="backTwoOne" data-rate="-0.6"></img>
                    <img
                        className="backTwoTwo"
                        data-rate="-0.1"
                        src="\a4.svg"
                    ></img>
                    <img
                        className="backTwoFour"
                        data-rate="-0.4"
                        src="\a1.svg"
                    ></img>
                    <img
                        className="backTwoFive"
                        data-rate="-1.1"
                        src="\a2.svg"
                    ></img>
                    <img
                        className="backTwoThree"
                        data-rate="-0.2"
                        src="\a3.svg"
                    ></img>
                </div>
                <div className="background2">
                    <img className="backThreeOne" data-rate="-0.1"></img>
                    <img
                        className="backThreeTwo"
                        data-rate="-0.35"
                        src="\b1.svg"
                    ></img>
                    <img
                        className="backThreeThree"
                        data-rate="-0.3"
                        src="\b2.svg"
                    ></img>
                    <div className="articles">
                        <div className="latestArticles">LATEST ARTICLES</div>
                        <Article1 />
                    </div>
                </div>
            </div>

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

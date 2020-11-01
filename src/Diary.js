//////////////////////Pattern Matching in psql = ILIKE for db.js
import React, { useState, useEffect } from "react";
import axios from "./axios";
//import { Link } from "react-router-dom";

const Diary = () => {
    const [userInput, setUserInput] = useState("");
    const [walks, setWalks] = useState([]);
    useEffect(() => {
        //console.log("useEffect is running!");//runs when the component mounts
        (async () => {
            try {
                console.log("userInput", userInput);
                const resp = await axios.get("/api/walks", {
                    params: { userInput: userInput },
                });
                console.log("resp.data :", resp.data.walks);
                setWalks(resp.data.walks);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
    }, [userInput]);

    console.log("walks : ", walks);
    function handleChange(e) {
        //console.log("e.target.value : ", e.target.value);
        setUserInput(e.target.value);
    }
    //must be (walks.length == 0)
    if (!walks) {
        return (
            <div>
                <h2>The walk log is empty for now</h2>
                {/* /////////////////////////////////////////////////////
            // All of the questionaire inputs go here + choices 
            
            
            
            */}
            </div>
        );
    } else {
        return (
            <div>
                <input
                    onChange={handleChange}
                    type="text"
                    name="userInput"
                    placeholder="How Long Have You Walked Today?"
                />
                {!userInput && <h2>Previous entries:</h2>}

                {walks.map((walk, i) => {
                    return (
                        <div className="dogwalk" key={i}>
                            <p>
                                {walk.mins} mins, by user :{walk.user_id}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default Diary;

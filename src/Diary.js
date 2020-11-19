//////////////////////Pattern Matching in psql = ILIKE for db.js
import React, { useState, useEffect } from "react";
import axios from "./axios";
//import { Link } from "react-router-dom";


const Diary = () => {
    // const [userInput, setUserInput] = useState("");
    const [walks, setWalks] = useState([]);
    var activity = "";
    var time = null;


    useEffect(() => {
        //console.log("useEffect is running!");//runs when the component mounts
        // (async () => {
        //     try {
        //         // console.log("userInput", userInput);
        //         const resp = await axios.get("/api/walks", {
        //             // params: { userInput: userInput },
        //         });
        //          console.log("resp.data :", resp.data.walks);
        //         setWalks(resp.data.walks);
        //     } catch (err) {
        //         console.log("err : ", err);
        //     }
        // })();
    }, []);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit reacts");
   
}
const changeActivity = (e) => {
    activity = e.target.value;    
    console.log("e.target.value in change", e.target.value);
      console.log("activity in change", activity);
}
const changeTime = (e) => {
    time = e.target.value;
     console.log("time in change", time);
    console.log("e.target.value in change", e.target.value);
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
            <div className="diaryContainer">

               <div className="activity-log">
                  <form  action="" className="diary-form" onSubmit={(e) => handleSubmit(e)}>
                       
                      <label htmlFor ="activity" id="activity-label">Activity :</label>
                        <select name="activity" id="activity" onChange={(e) => changeActivity(e)}>
                            <option value=""></option>
                            <option value="walk" id="walk">Walk</option>
                            <option value="sit">Sit</option>
                            <option value="stay">Stay</option>
                        </select>
                          <label htmlFor ="time" id="time-label">Time :</label>
                       <select name="time" id="time" onChange={(e) => changeTime(e)}>
                        <option value=""></option>
                        <option value="5">5 mins</option>
                        <option value="10">10 mins</option>
                        <option value="20">20 mins</option>
                        <option value="30">30 mins</option>
                    </select>
                       <button id="submit-diary">Submit</button>
                  </form>
                </div>





                {walks.map((walk, i) => {
                    return (
                        <div className="dogwalk-record" key={i}>
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

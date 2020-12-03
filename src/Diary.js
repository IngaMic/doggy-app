//////////////////////Pattern Matching in psql = ILIKE for db.js
import React, { useState, useEffect } from "react";
import axios from "./axios";
//import { Link } from "react-router-dom";
import HeatMap from "./Heatmap.js";

const Diary = ({logUserId, cd, otherUsers, first, imageUrl}) => {
    // const [userInput, setUserInput] = useState("");
    const [walks, setWalks] = useState([]);
    var activity = "";
    var time = null;


    useEffect(() => {
      //  console.log("useEffect is running!", logUserId, cd);
      //  console.log("otherUsers, first,", otherUsers, first,);
        if(cd) {
             (async () => {
            try {
                // console.log("userInput", userInput);
                const resp = await axios.get("/api/walks", {
                    params: { cd: cd, logUserId: logUserId},
                });
                 //console.log("resp.data :", resp.data);
                setWalks(resp.data.walks);
            } catch (err) {
                console.log("err : ", err);
            }
        })();
        }
       
    }, []);

const handleSubmit = (e) => {
    e.preventDefault();
    let log = {
        activity, 
        time, 
        logUserId,
        cd,
    }
    console.log("submit reacts");
    axios.post("/newlog", log).then((resp) => {
            // console.log(" resp : ", resp);

         let newWalk = resp.data.newWalk;
            walks.push(newWalk);
          // console.log(" walks ", walks);
           clearInput();
        });
   
}
const changeActivity = (e) => {
    activity = e.target.value;    
   // console.log("e.target.value in change", e.target.value);
     // console.log("activity in change", activity);
}
const changeTime = (e) => {
    time = e.target.value;
    // console.log("time in change", time);
   // console.log("e.target.value in change", e.target.value);
}
const clearInput = () => {
  document.querySelector("#activity").innerHTML = "";
  document.querySelector("#time").innerHTML = "";
   

}
//console.log("otherUsers", otherUsers)
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
        //console.log("otherUsers[0].imageurl first", otherUsers[0].imageurl, otherUsers[0].first)
        return (
            <div className="diaryContainer">

               <div className="activity-log">
                  <form  action="" className="diary-form" onSubmit={(e) => handleSubmit(e)}>
                       <div className="form-line1">
                      <label htmlFor ="activity" id="activity-label">Activity :</label>
                        <select name="activity" id="activity" onChange={(e) => changeActivity(e)}>
                            <option value=""></option>
                            <option value="walk" id="walk">Walk</option>
                            <option value="sit">Sit</option>
                            <option value="stay">Stay</option>
                            <option value="lay">Lay</option>
                            <option value="come">Come</option>
                            <option value="paw">Paw</option>
                            <option value="leash">Leash</option>
                            <option value="hi five">Hi Five</option>
                            <option value="paws up">Paws Up</option>
                          
                        </select>
                        </div>
                         <div className="form-line2">
                          <label htmlFor ="time" id="time-label">Time :</label>
                       <select name="time" id="time" onChange={(e) => changeTime(e)}>
                        <option value=""></option>
                        <option value="5">5 mins</option>
                        <option value="10">10 mins</option>
                        <option value="20">20 mins</option>
                        <option value="30">30 mins</option>
                        <option value="40">40 mins</option>
                        <option value="50">50 mins</option>
                        <option value="60">60 mins</option>
                    </select>
                    </div>
                       <button id="submit-diary"><img src="/plus.png"></img></button>
                  </form>
                </div>
            {!!walks && 
            <div className="git-container">
                <HeatMap logs={walks}
                    cd={cd}
                />
            </div>}
            



                <div className="logged">
                {walks.map((walk, i) => {
                     if (logUserId == walk.user_id) {
                             return (
                        <div className="dogwalk-record" key={i}>
                            <p id="record"> {walk.activity}  |   {walk.mins}mins  </p> 
                        <div className="activity-user">
                        <img className ="activity-img" src={imageUrl}></img>
                         <p> {first} </p>
                        </div>
                         </div>

                    ) 
                        } 
                    return (
                        <div className="dogwalk-record" key={i}>
                            <p id="record"> {walk.activity}  |   {walk.mins}mins   </p>                       
                           {!!otherUsers && (otherUsers.map((user, i) => {
                if (user.id == walk.user_id) {
                    return (
                       
                        <div className="activity-user" key={i}>
                        <img className ="activity-img" src={user.imageurl}></img>
                         <p>{user.first}</p>
                        </div>

                    ) }}))}                            
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
};

export default Diary;

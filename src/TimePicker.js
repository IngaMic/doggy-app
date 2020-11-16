import React, { useState, useEffect } from "react";
//import axios from "./axios";
//import { Link } from "react-router-dom";
//import Wheel from "./Wheel";

const TimePicker = () => {
    const [userInput, setUserInput] = useState("");
    let d = new Date();
    var h1;
    var m1;
    let hour = d.getHours();
    let minute = d.getMinutes();
    useEffect(() => {
        //console.log("useEffect is running!");//runs when the component mounts
        setTime();
        document.querySelector(".time-picker").dataset.time =
            formatTime(hour) + ":" + formatTime(minute);
        // console.log("let d hour min", d, hour, minute); //works
    }, [userInput]);
    function setTime() {
        // console.log("I'm here set time"); //works
        h1 = formatTime(hour);
        m1 = formatTime(minute);
        document.querySelector(".time-picker").dataset.time =
            formatTime(hour) + ":" + formatTime(minute);
    }

    function formatTime(time) {
        // console.log("format time is working"); //works
        if (time < 10) {
            time = "0" + time;
        }
        return time;
    }
    function hour_change(e) {
        //console.log("hour-change works"); //works
        if (e.target.value > 23) {
            e.target.value = 23;
        } else if (e.target.value < 0) {
            e.target.value = "00";
        }

        if (e.target.value == "") {
            e.target.value = formatTime(hour);
        }

        hour = e.target.value;
    }

    function minute_change(e) {
        // console.log("minute_change is working"); //works
        if (e.target.value > 59) {
            e.target.value = 59;
        } else if (e.target.value < 0) {
            e.target.value = "00";
        }

        if (e.target.value == "") {
            e.target.value = formatTime(minute);
        }

        minute = e.target.value;
    }

    function hour_up() {
        //  console.log("hour_up is working");
        hour++;
        if (hour > 23) {
            hour = 0;
        }
        setTime();
    }
    function hour_down() {
        //   console.log("hour_down is working");
        hour--;
        if (hour < 0) {
            hour = 23;
        }
        setTime();
    }

    function minute_up() {
        // console.log("minute_up is working");
        minute++;
        if (minute > 59) {
            minute = 0;
            hour++;
        }
        setTime();
    }
    function minute_down() {
        minute--;
        if (minute < 0) {
            minute = 59;
            hour--;
        }
        setTime();
    }

    return (
        <div>
            <h2 className="time-picker-h">How long have you walked today?</h2>
            <div className="time-picker" data-time="00:00">
                <div className="hour">
                    <div
                        className="hr-up"
                        style={{ backgroundColor: 548795 }}
                        onClick={hour_up}
                    ></div>
                    <input
                        type="number"
                        className="hr"
                        placeholder="hr"
                        value={h1}
                        onChange={hour_change}
                        // placeholder={h1}
                    ></input>
                    <div className="hr-down" onClick={hour_down}></div>
                </div>

                <div className="separator">:</div>

                <div className="minute">
                    <div className="min-up" onClick={minute_up}></div>
                    <input
                        type="number"
                        className="min"
                        placeholder="min"
                        value={m1}
                        onChange={minute_change}
                    ></input>
                    <div className="min-down" onClick={minute_down}></div>
                </div>
            </div>
        </div>
    );
};

export default TimePicker;

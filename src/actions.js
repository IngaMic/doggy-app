import axios from "./axios";
//ACTION IS JUST AN OBJECT!!

export async function receiveTricks() {
    const { data } = await axios.get("/api/tricks");
    //console.log("data.tricks from actions.js", data);
    return {
        type: "RECEIVE_TRICKS",
        tricks: data.tricks,
    };
}

export async function receiveQuotes() {
    const { data } = await axios.get("/api/quotes");
    //console.log("data.quotes from actions.js", data.quotes);
    return {
        type: "RECEIVE_QUOTES",
        quotes: data.quotes,
    };
}
export async function receiveTrick(id) {
    const { data } = await axios.get(`/trick/${id}.json`);
    //console.log(" resp after axios in Trick", data.trick);
    return {
        type: "RECEIVE_TRICK",
        trick: data.trick,
    };
}
export async function onlineUsers(onlineUsers) {
    console.log("onlineUsers from actions.js", onlineUsers);
    return {
        type: "ONLINE_USERS",
        onlineUsers,
    };
}
export async function userLeft(onlineUsers) {
    return {
        type: "USER_LEFT",
        onlineUsers,
    };
}

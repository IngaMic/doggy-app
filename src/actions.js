import axios from "./axios";
//ACTION IS JUST AN OBJECT!!

export async function receiveTricks() {
    const { data } = await axios.get("/api/tricks");
    console.log("data.tricks from actions.js", data);
    return {
        type: "RECEIVE_TRICKS",
        tricks: data.tricks,
    };
}

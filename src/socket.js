import * as io from "socket.io-client";
import { onlineUsers, userLeft } from "./actions";

export let socket;

export const init = (store) => {
    if (!socket) {
        socket = io.connect();

        socket.on("onlineusers", (usersOnline) =>
            store.dispatch(onlineUsers(usersOnline))
        );
        socket.on("userleft", (usersOnline) =>
            store.dispatch(userLeft(usersOnline))
        );
    }
};

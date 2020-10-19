export default function (state = {}, action) {
    console.log("Action :", action);
    // if (action.type == "SAY_YES") {
    //     state = {
    //         ...state,
    //         items: state.items.map((item) => {
    //             console.log("action.id", action.id);
    //             console.log("item.id", item.id);
    //             if (action.id == item.id) {
    //                 return {
    //                     ...item,
    //                     reviewone: true,
    //                 };
    //             } else {
    //                 return item;
    //             }
    //         }),
    //     };
    // }
    // if (action.type == "SAY_NO") {
    //     state = {
    //         ...state,
    //         items: state.items.map((item) => {
    //             console.log("no action.id", action.id);
    //             console.log("no item.id", item.id);
    //             if (action.id == item.id) {
    //                 return {
    //                     ...item,
    //                     reviewone: null,
    //                 };
    //             } else {
    //                 return item;
    //             }
    //         }),
    //     };
    // }
    return state;
}

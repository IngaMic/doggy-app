// import React, { useState, useCallback } from "react";
// import { TextInput, View, Text, ScrollView, StyleSheet } from "react-native";
// import { WheelPicker } from "react-native-simple-wheel-picker";

// const styles = StyleSheet.create({
//     input: {
//         margin: 20,
//         backgroundColor: "gray",
//         color: "#ECEFF0",
//         marginTop: 5,
//     },
// });

// const Wheel = () => {
//     const [index, setIndex] = useState(0);
//     const onChangeIndex = useCallback((index) => {
//         const result = parseInt(index);
//         if (isNaN(result)) {
//             setIndex(minimum);
//         } else {
//             setIndex(result);
//         }
//     });
//     const [countItem] = useState(12);
//     const items = [...Array(countItem).keys()].map(
//         (index) => `This is item ${index}`
//     );

//     return (
//         <View style={{ flex: 1, justifyContent: "flex-end" }}>
//             <ScrollView style={{ backgroundColor: "white" }}>
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         keyboardType={"numeric"}
//                         placeholder={"Selected index"}
//                         value={"" + index || ""}
//                         onChangeText={onChangeIndex}
//                     />
//                 </View>
//             </ScrollView>
//             <WheelPicker
//                 onSelected={onChangeIndex}
//                 selectedIndex={index}
//                 items={items}
//                 backgroundColor={"#ECEFF0"}
//             />
//         </View>
//     );
// };
// export default Wheel;

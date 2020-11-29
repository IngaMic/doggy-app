import React, { useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
 import ReactTooltip from 'react-tooltip';
 import axios from "./axios";


// const today = new Date();

var arr = [  { date: '2020-11-02', count: 1 },
           { date: '2020-11-05', count: 3 },
             { date: '2020-11-07', count: 3 },
              { date: '2020-11-10', count: 1 },
           { date: '2020-11-15', count: 3 },
             { date: '2020-11-17', count: 3 },]

export default function HeatMap({logs, cd}) {
   

    //Next on my plan: Pass the values as props or from redux
// let randomValues;
  //   const randomValues = getRange(200).map(index => {
  //          return {
  //     date: shiftDate(today, -index),
  //     count: getRandomInt(1, 3),
  //   }; });
 

  //  useEffect(() => {
  //        console.log("today", today);
      
  //         if(cd) {
  //            (async () => {
  //           try {
             
  //               const resp = await axios.get("/api/logs", {
  //                   params: { cd: cd},
  //               });
  //                console.log("resp.data :", resp.data);
              
  //           } catch (err) {
  //               console.log("err : ", err);
  //           }
  //       })();
  //       }
        //  if(logs)
//         let group = logs.reduce((r, a) => {
//       r[a.created_at.slice(0,10)] = [...r[a.created_at] || [], a];
//       return r;
//       }, {});
//       //console.log("group", group);
//       var newObj = {};
//       let newArr = [];
//       Object.keys(group).map(function(key, index) {
//     //    console.log("newObj", newObj)
//            //console.log("group[key] ", group[key] )
//      // console.log("key ", key )
//      //console.log("index ", index )
//       randomValues.push({date : key,  count : group[key].length});
// // });
// }); return randomValues;
//       }})();
    
    
    // }, []);

// function shiftDate(date, numDays) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + numDays);
//   return newDate;
// }

// function getRange(count) {
//   return Array.from({ length: count }, (_, i) => i);
// }
// ///////////////////////////////////////////////////
 if(logs) {
     console.log("logs", logs)
     let group = logs.reduce((r, a) => {
 r[a.created_at.slice(0,10)] = [...r[a.created_at.slice(0,10)] || [], a];
 return r;
}, {});
console.log("group", group);
var newObj = {};
let newArr = [];
Object.keys(group).map(function(key, index) {
   // console.log("newObj", newObj)
    console.log("group[key] ", group[key] )
      console.log("key ", key )
     //console.log("index ", index )

  newArr.push({date : key,  count : group[key].length});
});

console.log("newArr that must be shown in heatmap", newArr)
// return newArr;
           
         }
////////////////////////////////////////////////

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }




//  if (!newArr) {
//    return null;
//    }
//  else {
      return ( <div>
      <CalendarHeatmap
        startDate={new Date('2020-11-01')}
        endDate={new Date('2020-11-30')}
        values={arr}
      //   classForValue={value => {
      //     if (!value) {
      //       return 'color-empty';
      //     }
      //     return `color-gitlab-${value.count}`;
      //   }}
      //   tooltipDataAttrs={value => {
      //     return {
      //       'data-tip': `${value.date.toISOString().slice(0, 10)} logs: ${
      //         value.count
      //       }`,
      //     };
      //   }}
      //   showWeekdayLabels={true}
      //   onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
       {/* <ReactTooltip /> */}
    </div>
  );
//  }

}



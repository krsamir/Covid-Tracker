import React, { useState } from "react";
import { Collapser, Trigger, Panel } from "react-collapser";
import { Grid, Card, Typography } from "@material-ui/core";
import styles from "./Tabular_data.module.css";
import cx from "classnames";
import District from "./District";
export default function Tabular_data({ fullData, DistrictData }) {
  if (!fullData[0]) return <h1 className="tc red">LOADING</h1>;
  const disarray = Object.entries(DistrictData);
  //console.log(DistrictData.toString(fullData[5].state))
  // console.log(disarray[5][1].statecode);       //gives state code
  // console.log(disarray[5][1].districtData); //gives district object
  // console.log(disarray[5][1].districtData)                 // 5 - > i
  // Object.entries(DistrictData.Bihar.districtData).map(dis=>{
  //   console.log(dis[0])
  // console.log([fullData[19].state])  
  // })
  const arrays = [];
  // console.log((DistrictData[fullData[10].state]).districtData)
  for (let i = 1; i < 38; i++) {
    if (DistrictData[fullData[i].state] === undefined) {
      console.log("State Not in list : " + fullData[i].state)
      continue
    }
    arrays.push(Object.entries((DistrictData[fullData[i].state]).districtData))
  }
  //console.log(DistrictData["Maharashtra"])
  /*for(let i =0;i<38;i++){
    console.log(arrays[1])
  }*/
  //console.log(arrays[10])
  // console.log(arrays[0][0][0])

  //   return (
  //     <Grid>
  //       {/* <h4>{ Object.entries(DistrictData).map(District => {
  //   console.log(District[1])
  //   return 1
  // })}</h4> */}
  //       <h4 className="pa1 tc">State Wise Data</h4>
  //       <Grid className={styles.smallTable}>
  //         <table>
  //           <thead>
  //             <tr>
  //               <th className={styles.stateHeader}>State</th>
  //               <th className={styles.innerTable}>Confirmed</th>
  //               <th className={styles.innerTable}>Active</th>
  //               <th className={styles.innerTable}>Recovered</th>
  //               <th className={styles.innerTable}>Deaths</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {fullData.map((user, i) => (
  //               <tr key={i}>
  //                 <Collapser key={i}>
  //                   <Trigger>
  //                     <div style={{ overflowX: "auto" }}>
  //                       <td className={cx("tl", styles.stateHeader)}>
  //                         {fullData[i].state}
  //                       </td>
  //                     </div>
  //                   </Trigger>
  //                   <Panel>
  //                     <div style={{ overflowX: "auto" }}>
  //                     {/* {console.log(DistrictData.disarray[5][0])} */}
  //                       {/* <District dist={DistrictData.toString(fullData[i].state)}/> */}
  //                     </div>
  //                   </Panel>
  //                 </Collapser>
  //                 <td className={cx("tc", styles.innerTable)}>
  //                   {fullData[i].confirmed}
  //                 </td>
  //                 <td className={cx("tc", styles.innerTable)}>
  //                   {fullData[i].active}
  //                 </td>
  //                 <td className={cx("tc", styles.innerTable)}>
  //                   {fullData[i].recovered}
  //                 </td>
  //                 <td className={cx("tc", styles.innerTable)}>
  //                   {fullData[i].deaths}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </Grid>
  //             </Grid>
  //   );
  return (
    <Grid>

      {/* {console.log(arrays)} */}
      {/* arrays.map((value,index)=>(
          <h2>{arrays[index]}</h2>
        )) */}
      {/* <h2>{fullData[1].state}</h2>
      <h3>{console.log("Distric Name :-" + arrays[0][0][0])}</h3> */}
      <Card variant="outlined">
        <Typography>{fullData[11].state}</Typography>
          <Typography>
            Total Confirmed Cases : {fullData[11].confirmed}
          </Typography>
          <Typography>Total Active Cases : {fullData[11].active}</Typography>
          <Typography>Total Recovered Cases : {fullData[11].recovered}</Typography>
          <Typography>Total Death Cases : {fullData[11].deaths}</Typography>
        <Typography>
          {arrays[10].map((v,i)=>(
            <div key={i}>
              <h4 >{arrays[10][i][0]}</h4>
            <h3>Active Cases : {(arrays[10][i][1]).active}</h3>
            </div> 
          ))}
        </Typography>
            {console.log((arrays[10][6][1]).active)}
      </Card>

    </Grid>
  )
}
//ref :https://www.npmjs.com/package/react-collapser

/*
<Collapser key={i}>
<Trigger>
</Trigger>
<Panel>
<h1>Districts</h1>
</Panel>
</Collapser>
 */

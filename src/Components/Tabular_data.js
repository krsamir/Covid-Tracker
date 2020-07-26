import React from "react";
import { Collapser, Trigger, Panel } from "react-collapser";
import { Grid } from "@material-ui/core";
import styles from "./Tabular_data.module.css";
import cx from 'classnames';
export default function Tabular_data({ fullData }) {
  if (!fullData[0]) return <h1 className="tc red">LOADING</h1>;
  return (
    <Grid>
      <Grid className={styles.smallTable}>
        <table>
        <caption>StateWise Data</caption>
          <thead>
            <tr>
              <th className={styles.stateHeader}>State</th>
              <th className={styles.innerTable}>Confirmed</th>
              <th className={styles.innerTable}>Active</th>
              <th className={styles.innerTable}>Recovered</th>
              <th className={styles.innerTable}>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {fullData.map((user, i) => (

              <tr key={i}>
                <td className={cx("tl",styles.stateHeader)}>{fullData[i].state}</td>
                <td className={cx("tc",styles.innerTable)}>{fullData[i].confirmed}</td>
                <td className={cx("tc",styles.innerTable)}>{fullData[i].active}</td>
                <td className={cx("tc",styles.innerTable)}>{fullData[i].recovered}</td>
                <td className={cx("tc",styles.innerTable)}>{fullData[i].deaths}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
}
//ref :https://www.npmjs.com/package/react-collapser

{/* <Collapser key={i}>
                <Trigger>
                </Trigger>
                <Panel>
                <h1>Districts</h1>
                </Panel>
      </Collapser> */}
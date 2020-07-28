import React from "react";

// import styles from "./District.module.css";
// import cx from "classnames";
import { Grid } from "@material-ui/core";
export default function District({dist}) {
    return (
      <Grid>
      {console.log(dist.districtData)}
        <h4 className="pa1 tc bg-black">District Wise Data</h4>
        <Grid>
          <table>
            <thead>
              <tr>
                <th>District</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>state</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    );
  }

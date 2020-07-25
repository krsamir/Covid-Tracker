import React from "react";
import { Collapser, Trigger, Panel } from "react-collapser";
import { Grid} from "@material-ui/core";
import styles from "./Tabular_data.module.css";
export default function Tabular_data() {
  return (
    <Grid>
      <Grid className={styles.small_table}>
      
          <Collapser>
            <Trigger>
            <div className="tc dib br3 pa3  grow bw2 shadow-5 bg-light-green ">
            Maharashtra 
            </div>
            </Trigger>
            <Panel>
            <div className="bg-silver tc dib br3 pa3 ma2  bw2 shadow-5">
              Districts
            </div></Panel>
          </Collapser>
      </Grid>

      <Grid className={styles.small_table}>
      
          <Collapser>
            <Trigger>
            <div className="tc dib br3 pa3 grow bw2 shadow-5 bg-light-green">
            Bihar 
            </div>
            </Trigger>
            <Panel>
            <div className="bg-silver tc dib br3 pa3 ma2  bw2 shadow-5">
              Patna
            </div></Panel>
          </Collapser>
      </Grid>

    
    </Grid>
  );
}
//ref :https://www.npmjs.com/package/react-collapser
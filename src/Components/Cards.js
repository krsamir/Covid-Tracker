import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Grid } from "@material-ui/core";
import Cured_cases from "../images/Cured_cases.png";
import active_cases from "../images/active_cases.png";
import death_cases from "../images/death_cases.png";
import migrated_cases from "../images/migrated_cases.png";
import "tachyons";
export default function Cards({
  data_cases: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="flex justify-around" >
        <Grid className={styles.gridbox} style={{position:'relative'}} >
          <Card className={styles.classes}>
            <CardContent>
              <img src={migrated_cases} alt="Confirmed Cases" />
              <Typography
                className={styles.title}
                color="textSecondary"
                gutterBottom
              >
                Confirmed Cases
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.0}
                  separator=","
                />
              </Typography>
             {/* <Typography className={styles.pos} color="textSecondary">
                Last Updated Time
              </Typography>
               <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
            <CardContent>
              <img src={active_cases} alt="Active Cases" />
              <Typography
                className={styles.title}
                color="textSecondary"
                gutterBottom
              >
                Active Cases
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value - recovered.value-deaths.value}
                  duration={2.0}
                  separator=","
                />
              </Typography>
              {/* <Typography className={styles.pos} color="textSecondary">
                Last Updated Time
              </Typography> 
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>*/}
            </CardContent>
          </Card>
        </Grid>
        <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
            <CardContent>
              <img src={Cured_cases} alt="Recovered Cases" />
              <Typography
                className={styles.title}
                color="textSecondary"
                gutterBottom
              >
                Recovered Cases
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.0}
                  separator=","
                />
              </Typography>
             {/* <Typography className={styles.pos} color="textSecondary">
                Last Updated Time
              </Typography>
               <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>

        <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
            <CardContent>
              <img src={death_cases} alt="Death Cases" />
              <Typography
                className={styles.classes}
                color="textSecondary"
                gutterBottom
              >
                Death Cases
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.0}
                  separator=","
                />
              </Typography>
              {/* <Typography className={styles.pos} color="textSecondary">
                Last Updated Time
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
        {/* <label className={styles.date_time}>
        {new Date(lastUpdate).toDateString()}
      </label> */}
      </div>
      <div>
        <h5 className= "tr flex ">LastUpdate : <label className={styles.date_time}>
        {new Date(lastUpdate).toDateString()}
      </label> </h5>
      </div>
    </div>
  );
}

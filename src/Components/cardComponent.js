import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cured_cases from "../images/Cured_cases.png";
import active_cases from "../images/active_cases.png";
import death_cases from "../images/death_cases.png";
import migrated_cases from "../images/migrated_cases.png";
import frontcase from "../images/frontcase.PNG";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";
import date from "date-and-time";
import styles from "./cardComponent.module.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(4),
    },
  }));
  export default function SpacingGrid({fullData}){
    const classes = useStyles();
    if (!fullData[0]) {
      return <img className = {styles.bigImage}  src={frontcase} alt="front Cases" />;
    }
    return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1} className="pa4">
              <Grid key={1} item>
                <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
                  <Grid className="tc dark-red">
                    <img src={migrated_cases} alt="Confirmed Cases" />
                    <Typography color="textSecondary" gutterBottom>
                      Confirmed
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Cases
                    </Typography>
    
                    <Typography variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={parseInt(fullData[0].confirmed)}
                        duration={2.0}
                        separator=","
                      />
                    </Typography>
                  </Grid>
                </div>
              </Grid>
    
              <Grid key={2} item className="pa5">
                <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
                  <Grid className="tc dark-red">
                    <img src={active_cases} alt="Active Cases" />
                    <Typography color="textSecondary" gutterBottom>
                      Active
                    </Typography>
    
                    <Typography color="textSecondary" gutterBottom>
                      Cases
                    </Typography>
    
                    <Typography variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={parseInt(fullData[0].active)}
                        duration={2.0}
                        separator=","
                      />
                    </Typography>
                  </Grid>
                </div>
              </Grid>
    
              <Grid key={3} item className="pa5">
                <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
                  <Grid className="tc dark-red">
                    <img src={Cured_cases} alt="Recovered Cases" />
                    <Typography color="textSecondary" gutterBottom>
                      Recovered
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      Cases
                    </Typography>
    
                    <Typography variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={parseInt(fullData[0].recovered)}
                        duration={2.0}
                        separator=","
                      />
                    </Typography>
                  </Grid>
                </div>
              </Grid>
    
              <Grid key={4} item className="pa5">
                <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
                  <Grid className="tc dark-red">
                    <img src={death_cases} alt="Death Cases" />
                    <Typography color="textSecondary" gutterBottom>
                      Death
                    </Typography>
    
                    <Typography color="textSecondary" gutterBottom>
                      Cases
                    </Typography>
    
                    <Typography variant="h5" component="h2">
                      <CountUp
                        start={0}
                        end={parseInt(fullData[0].deaths)}
                        duration={2.0}
                        separator=","
                      />
                    </Typography>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <label className='red' style={{ display: "flex", justifyContent: "center" }}>
              {date.format(new Date(), "DD/MM/YYYY HH:mm:ss")}
            </label>
            <Grid></Grid>
          </Grid>
        </Grid>
      );
    
  }  
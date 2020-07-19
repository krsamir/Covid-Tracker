import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cured_cases from "../images/Cured_cases.png";
import active_cases from "../images/active_cases.png";
import death_cases from "../images/death_cases.png";
import migrated_cases from "../images/migrated_cases.png";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

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

export default function SpacingGrid({
  data_cases: { confirmed, recovered, deaths, lastUpdate },
}) {
  //   const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  if (!confirmed) {
    return <h1 className="tc red">Loading</h1>;
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3} className="pa4">
          <Grid key={1} item>
            <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
              <Grid className="tc">
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
                    end={confirmed.value}
                    duration={2.0}
                    separator=","
                  />
                </Typography>
              </Grid>
            </div>
          </Grid>

          <Grid key={2} item className="pa5">
            <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
              <Grid className="tc">
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
                    end={confirmed.value - recovered.value - deaths.value}
                    duration={2.0}
                    separator=","
                  />
                </Typography>
              </Grid>
            </div>
          </Grid>

          <Grid key={3} item className="pa5">
            <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
              <Grid className="tc">
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
                    end={recovered.value}
                    duration={2.0}
                    separator=","
                  />
                </Typography>
              </Grid>
            </div>
          </Grid>

          <Grid key={4} item className="pa5">
            <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
              <Grid className="tc">
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
                    end={deaths.value}
                    duration={2.0}
                    separator=","
                  />
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

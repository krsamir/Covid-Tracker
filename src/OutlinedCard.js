import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './OutlinedCard.module.css'
import { Grid } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';        //*********************** */

/*const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
     '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1),
      height: theme.spacing(25),
    },
  },
}));
*/
export default function OutlinedCard() {
  return (
    <div className={styles.container}>
      <Grid className={styles.gridbox} container spacing={3} justify="center">
        <Paper elevation={10}>
          <Card className={styles.classes} variant="outlined">
            <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
                Infected Cases
              </Typography>
              <Typography variant="h5" component="h2">
                Number of infected cases
              </Typography>
              <Typography className={styles.pos} color="textSecondary">
                Last Update Time
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid className={styles.gridbox} container spacing={3} justify="center">
        <Paper elevation={10}>
          <Card className={styles.classes} variant="outlined">
            <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
                Active Cases
              </Typography>
              <Typography variant="h5" component="h2">
                Number of active cases
              </Typography>
              <Typography className={styles.pos} color="textSecondary">
                Last Update Time
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>

      <Grid className={styles.gridbox} container spacing={3} justify="center">
        <Paper elevation={10}>
          <Card className={styles.classes} variant="outlined">
            <CardContent>
              <Typography className={styles.classes} color="textSecondary" gutterBottom>
                Death Cases
              </Typography>
              <Typography variant="h5" component="h2">
                Number of Death cases
              </Typography>
              <Typography className={styles.pos} color="textSecondary">
                Last Update Time
              </Typography>
            </CardContent>
          </Card>

        </Paper>
      </Grid>
    </div>
  );
}
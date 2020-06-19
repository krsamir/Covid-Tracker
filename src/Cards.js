import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css'
import { Grid } from '@material-ui/core';

export default function Cards() {
  return (
    <div className={styles.container}>
      <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
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
      </Grid>
      <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
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
      </Grid>

      <Grid className={styles.gridbox}>
          <Card className={styles.classes}>
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
      </Grid>
    </div>
  );
}
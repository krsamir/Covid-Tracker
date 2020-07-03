import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import { Grid } from '@material-ui/core';

export default function Cards({data1:{confirmed,recovered,deaths,lastUpdate}}) {
  return (
    <div className={styles.container}>
      <Grid className={styles.gridbox}>
        <Card className={styles.classes}>
          <CardContent>
            <Typography className={styles.title} color="textSecondary" gutterBottom>
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
            <Typography className={styles.pos} color="textSecondary">
              Last Updated Time
              </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
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
              <CountUp
                start={0}
                end={confirmed.value-recovered.value}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              Last Updated Time
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={styles.gridbox}>
        <Card className={styles.classes}>
          <CardContent>
            <Typography className={styles.title} color="textSecondary" gutterBottom>
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
            <Typography className={styles.pos} color="textSecondary">
              Last Updated Time
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
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
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.0}
                separator=","
              />
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              Last Updated Time
              </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
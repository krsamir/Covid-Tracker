import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,  //345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DistrictCard({ fullData, DistrictData }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  if (!fullData[0]) return <h1 className="tc red">Wait </h1>;

  const arrays = [];
  for (let i = 1; i < 38; i++) {
    if (DistrictData[fullData[i].state] === undefined) {
      console.log("State Not in list : " + fullData[i].state)
      continue
    }
    arrays.push(Object.entries((DistrictData[fullData[i].state]).districtData))
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid>
      {
        fullData.map((v, i) => (
          <div>
            <Card className={classes.root}>
              <CardHeader
                title={fullData[i].state}//state name
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Number of cases
        </Typography>
        <Typography>Total Confirmed Cases : {fullData[i].confirmed}</Typography>
          <Typography>Total Active Cases : {fullData[i].active}</Typography>
          <Typography>Total Recovered Cases : {fullData[i].recovered}</Typography>
          <Typography>Total Death Cases : {fullData[i].deaths}</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>District</Typography>
                  {/* 
                      {arrays[i].map((v,index)=>(
                      <div>
                          <Typography>
                            {arrays[index][5][0]}
                         </Typography>
                         
                          <Typography>Active : {(arrays[i][index][1]).active}</Typography>
                          <Typography>Confirmed : {(arrays[i][index][1]).confirmed}</Typography>
                          <Typography>Deaths : {(arrays[i][index][1]).deceased}</Typography>
                          <Typography>Recovered : {(arrays[i][index][1]).recovered}</Typography>
                          <Typography>------------------------------------------</Typography>
                          
                      </div>
                    ))}
                  */}
                </CardContent>
              </Collapse>
            </Card>

          </div>
        ))

      }

    </Grid>
  );
}

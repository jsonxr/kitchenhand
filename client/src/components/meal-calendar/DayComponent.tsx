import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import DateLabel from './DateLabel';
import useStyles from './DayComponent.styles';

interface DayComponentProps {
  date: Date;
}

const DayComponent: React.SFC<DayComponentProps> = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <DateLabel date={props.date} />
        </Grid>
        <Grid item xs={12} sm container direction="column">
          {props.children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DayComponent;

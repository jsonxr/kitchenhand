import React from 'react';
import { Typography } from '@material-ui/core';

interface DayComponentProps {
  date: Date;
}

const DateLabel: React.FunctionComponent<DayComponentProps> = props => {
  const weekday = props.date.toLocaleString(window.navigator.language, { weekday: 'short', timeZone: 'utc' });
  const day = props.date.toLocaleString(window.navigator.language, { day: '2-digit', timeZone: 'utc' });

  return (
    <React.Fragment>
      <Typography variant="h5">{weekday}</Typography>
      <Typography variant="h4">{day}</Typography>
    </React.Fragment>
  );
};

export default DateLabel;

import React from 'react';
import { Typography } from '@material-ui/core';

interface MealComponentProps {
  title: string;
  children: string;
}

const MealComponent: React.FunctionComponent<MealComponentProps> = props => {
  const { title } = props;
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      {props.children}
    </React.Fragment>
  );
};

export default MealComponent;

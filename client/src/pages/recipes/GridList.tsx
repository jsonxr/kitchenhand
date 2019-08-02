import React from 'react';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import useStyles from './GridList.styles';

type Props = {
  index: string;
  total: string;
  children?: any;
};

type PageCountProps = {
  start: number;
  stop: number;
  total: number;
  className: string;
};

const PageCount = (props: PageCountProps): any => {
  if (props.total > 0) {
    return (
      <div className={props.className}>
        <Typography variant="caption">
          {props.start}-{props.stop} of {props.total}
        </Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <div className={props.className}>
      <Typography variant="caption">0 results</Typography>
    </div>
  );
};

const GridList = (props: Props) => {
  const classes = useStyles();
  const index = parseInt(props.index, 10);
  const count = props.children ? props.children.length : 0;
  const total = props.total ? parseInt(props.total, 10) : 0;
  const start = index + 1;
  const stop = index + count;

  return (
    <>
      <Grid container spacing={3}>
        {React.Children.map(props.children, (child?: any) => {
          return (
            <Grid item key={child.key} lg={3} md={6} xs={12}>
              {child}
            </Grid>
          );
        })}
      </Grid>
      <PageCount start={start} stop={stop} total={total} className={classes.pagination} />
    </>
  );
};

export default GridList;

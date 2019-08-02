import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      //overflow: 'auto',
      //maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  })
);

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      <li className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>June 3 - 9</ListSubheader>
          <ListItem>Monday</ListItem>
          <ListItem>Tuesday</ListItem>
          <ListItem>Wednesday</ListItem>
          <ListItem>Thursday</ListItem>
          <ListItem>Friday</ListItem>
          <ListItem>Saturday</ListItem>
          <ListItem>Sunday</ListItem>
        </ul>
      </li>
      <li className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>June 10 - 16</ListSubheader>
          <ListItem>Monday</ListItem>
          <ListItem>Tuesday</ListItem>
          <ListItem>Wednesday</ListItem>
          <ListItem>Thursday</ListItem>
          <ListItem>Friday</ListItem>
          <ListItem>Saturday</ListItem>
          <ListItem>Sunday</ListItem>
        </ul>
      </li>
    </List>
  );
}

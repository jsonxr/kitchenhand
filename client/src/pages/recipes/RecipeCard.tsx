import React from 'react';
import { Card, CardContent, CardActions, Typography, Grid, Divider } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from './RecipeCard.styles';

type Props = {
  title: string;
  imageUrl: string;
  description: string;
  totalDownloads: number;
};

const RecipeCard = (props: Props) => {
  const { imageUrl, title, description, totalDownloads, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img alt="Product" className={classes.image} src={imageUrl} />
        </div>
        <Typography align="center" gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography align="center" variant="body1">
          {description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Updated 2hr ago!
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <GetAppIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              {totalDownloads} Downloads
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;

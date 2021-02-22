import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
});

const CardItem = ({id, imageUrl, imageTitle, userName, userRole}) => {
  const classes = useStyles();

  return (
    <Box m={2}>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={imageUrl}
            title={imageTitle}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {userName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {userRole}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Box>
  );
}

export default CardItem;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 300,
  },
  media: {
    height: 150,
  },
});

const CardItem = ({ id, imageUrl, imageTitle, userName, userRole }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.root}>
          <CardActionArea style={{backgroundColor: "red"}}>
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={imageTitle}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {userName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {userRole}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Grid>
  );
};

export default CardItem;

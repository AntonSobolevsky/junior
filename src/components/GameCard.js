import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core";

const CardItem = withStyles({
  root: {
    marginBottom: "20px"
  }
})(Card);

const useStyles = makeStyles({
  media: {
    height: "18vmax"
  }
});

const Title = withStyles({
  root: {
    padding: "10px",
    fontWeight: "bold",
    textDecoration: "none"
  }
})(Typography);

export default function GameCard({ game }) {
  const { name, screenshots, id } = game;
  let url = "/details.png";

  if (screenshots) {
    url = `http:${screenshots[0].url}`;
  }

  const classes = useStyles();

  return (
    <Link to={`/game/${id}`}>
      <CardItem>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Paella dish"
          />
          <CardContent>
            <Title>{name}</Title>
          </CardContent>
        </CardActionArea>
      </CardItem>
    </Link>
  );
}

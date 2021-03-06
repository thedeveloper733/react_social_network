import React, { Fragment } from "react";

import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import NoImg from "../images/no-img.png";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  ...theme,
  card: {
    display: "flex",
    marginBottom: 20
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: "cover"
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    width: 100,
    height: 14,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  fullLine: {
    width: "90%",
    height: 15,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  halfLine: {
    width: "50%",
    height: 15,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.4)"
  }
});

const ScreamSkeleton = props => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);

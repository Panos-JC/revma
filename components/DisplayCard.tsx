import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    textAlign: "center",
    minHeight: 400,
    [theme.breakpoints.down("md")]: {
      minHeight: 450,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 20px 0 20px",
    },
  },
  image: {
    maxWidth: "100%",
    width: 100,
  },
  imageTitle: {
    fontWeight: "bold",
    margin: "20px 0 20px 0",
  },
}));

interface DisplayCardProps {
  src: string;
  title: string;
  content: string;
}

export const DisplayCard: React.FC<DisplayCardProps> = ({
  src,
  title,
  content,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img src={src} className={classes.image} />
      <Typography variant="h5" className={classes.imageTitle}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
    </Card>
  );
};

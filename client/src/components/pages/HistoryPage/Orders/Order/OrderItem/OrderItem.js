import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const OrderItem = ({ item }) => {
  const classes = useStyles();

  const imageSrc = `./images/${item.image}`;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imageSrc}
        title={item.name}
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6" fontWeight="bold">
          {item.name}
        </Typography>
        <Typography variant="h6">{`Price: ${item.price}$`}</Typography>
        <Typography variant="h6">{`Quantity: ${item.quantity}`}</Typography>
      </div>
    </Card>
  );
};

export default OrderItem;

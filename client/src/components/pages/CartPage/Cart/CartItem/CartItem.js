import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../../../reducers/order";
import useStyles from "./styles";

const CartItem = ({ item }) => {
  const classes = useStyles();

  const imageSrc = `./images/${item.image}`;

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imageSrc}
        title={item.name}
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{`Price: ${item.price}$`}</Typography>
        <Typography variant="h6">{`Quantity: ${item.quantity}`}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(decrementQuantity(item))}
        >
          -
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(incrementQuantity(item))}
        >
          +
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;

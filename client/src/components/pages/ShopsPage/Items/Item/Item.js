import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setOrder } from "../../../../../reducers/order";
import useStyles from "./styles";

const Item = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const imageSrc = `./images/${item.image}`;

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
      </div>
      <div className={classes.overlay2}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(setOrder(item))}
        >
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default Item;

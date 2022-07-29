import {
  Alert,
  Button,
  Card,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../../actions/orders";
import { countTotalPrice } from "../../../../reducers/order";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const order = useSelector((state) => state.order);

  const dispatch = useDispatch();

  dispatch(countTotalPrice());

  const enableButton =
    Object.values(order.customer).every((item) => item) && order.order.length;

  return (
    <Card className={classes.card}>
      <Grid
        container
        alignItems="stretch"
        display="flex"
        justifyContent="center"
        spacing={3}
      >
        {!order ? (
          <CircularProgress></CircularProgress>
        ) : !order.order.length ? (
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Nothing in your cart yet !
            </Typography>
          </Grid>
        ) : (
          order.order.map((item) => (
            <Grid item key={item._id} xs={10} sm={6}>
              <CartItem item={item}></CartItem>
            </Grid>
          ))
        )}
        <Grid item xs={8}>
          <Typography
            variant="h6"
            align="center"
          >{`Total price: ${order.totalPrice}$`}</Typography>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Button
            disabled={!enableButton}
            size="large"
            variant="outlined"
            onClick={() => {
              createOrder(order);
              handleClick();
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Successfully ordered !
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default Cart;

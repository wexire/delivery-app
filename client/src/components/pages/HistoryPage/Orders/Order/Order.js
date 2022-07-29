import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import OrderItem from "./OrderItem/OrderItem";
import useStyles from "./styles";

const Order = ({ order }) => {
  const classes = useStyles();

  const date = new Date(order.createdAt);

  const viewDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  return (
    <Card className={classes.card}>
      <Grid
        container
        alignItems="stretch"
        display="flex"
        justifyContent="left"
        spacing={1}
        className={classes.itemsList}
      >
        {order.order.map((item) => (
          <Grid item xs={6} sm={4}>
            <OrderItem item={item}></OrderItem>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            align="center"
          >{`Total price: ${order.totalPrice}$`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            align="center"
          >{`Date: ${viewDate}`}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Order;

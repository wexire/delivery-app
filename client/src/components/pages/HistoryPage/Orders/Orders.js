import { Card, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Order from "./Order/Order";
import useStyles from "./styles";

const Orders = ({ searched }) => {
  const classes = useStyles();

  const history = useSelector((state) => state.history);

  const ordersHistory = history.data || [];

  return (
    <Card className={classes.card}>
      <Grid
        container
        alignItems="stretch"
        display="flex"
        justifyContent="center"
        spacing={3}
      >
        {!searched ? (
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              Enter your credentials to get your orders history
            </Typography>
          </Grid>
        ) : !history ? (
          <CircularProgress></CircularProgress>
        ) : ordersHistory.length ? (
          ordersHistory.map((order) => (
            <Grid item key={order._id} xs={12}>
              <Order order={order} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Nothing found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default Orders;

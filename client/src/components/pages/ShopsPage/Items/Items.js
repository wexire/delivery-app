import { Card, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Item from "./Item/Item";

const Items = ({ selectedShop, shops }) => {
  const classes = useStyles();

  const shopsList = shops.data || [];

  const shop = shopsList.find((shop) => shop._id === selectedShop);

  return (
    <Card className={classes.card}>
      <Grid container alignItems="stretch" spacing={3}>
        {!selectedShop ? (
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Select a shop
            </Typography>
          </Grid>
        ) : shop ? (
          shop.items.map((item) => (
            <Grid item key={item._id} xs={12} sm={4}>
              <Item item={item}></Item>
            </Grid>
          ))
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </Grid>
    </Card>
  );
};

export default Items;

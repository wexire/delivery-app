import { Container, Grid, Grow } from "@mui/material";
import React from "react";
import Cart from "./Cart/Cart";
import Form from "./Form/Form";

const CartPage = () => {
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Form />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default CartPage;

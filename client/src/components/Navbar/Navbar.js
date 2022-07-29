import React from "react";
import { AppBar, Typography, Grid } from "@mui/material";
import useStyles from "./styles";
import PageLink from "./PageLink/PageLink";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.heading} variant="h3" align="center">
            Delivery App
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} display="flex" justifyContent="center">
          <PageLink to="/" className={classes.button}>
            Shops
          </PageLink>
        </Grid>
        <Grid item xs={4} sm={2} display="flex" justifyContent="center">
          <PageLink to="/cart" className={classes.button}>
            Cart
          </PageLink>
        </Grid>
        <Grid item xs={4} sm={2} display="flex" justifyContent="center">
          <PageLink to="/history" className={classes.button}>
            History
          </PageLink>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;

import { Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../../../reducers/order";

const Form = () => {
  const classes = useStyles();

  const customerInfo = useSelector((state) => state.order.customer);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: customerInfo,
  });

  dispatch(setCustomer(formik.values));

  return (
    <Card className={classes.card}>
      <form autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Order Form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              fullWidth
            ></TextField>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default Form;

import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { getUserOrders } from "../../../../actions/orders";
import useStyles from "./styles";

const Form = ({ handleSearch }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      handleSearch(true);
      dispatch(getUserOrders(values));
    },
  });

  const enableButton = Object.values(formik.values).every(
    (field) => field.length
  );

  return (
    <Card className={classes.card}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Find your order
            </Typography>
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
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" disabled={!enableButton}>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default Form;

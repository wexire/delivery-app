import { Container, Grid, Grow } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form/Form";
import Orders from "./Orders/Orders";

const HistoryPage = () => {
  const [searched, setSearched] = useState(false);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={6}>
            <Form handleSearch={setSearched}></Form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Orders searched={searched}></Orders>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default HistoryPage;

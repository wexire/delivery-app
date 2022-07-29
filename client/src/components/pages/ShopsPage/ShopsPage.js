import React, { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@mui/material";
import ShopList from "./ShopList/ShopList";
import Items from "./Items/Items";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "../../../actions/shops";

const ShopsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  const shops = useSelector((state) => state.shops);

  const [selectedShop, selectShop] = useState(null);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <ShopList selectShop={selectShop} shops={shops}></ShopList>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Items selectedShop={selectedShop} shops={shops}></Items>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default ShopsPage;

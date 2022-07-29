import React from "react";
import Shop from "./Shop/Shop";
import { Card, MenuList, CircularProgress, Box } from "@mui/material";

const ShopList = ({ selectShop, shops }) => {
  const dataHandler = (data) => {
    selectShop(data);
  };

  const shopsList = shops.data || [];

  return (
    <Card>
      <MenuList>
        {shopsList.length ? (
          shopsList.map((shop) => (
            <Shop shop={shop} key={shop._id} func={dataHandler}></Shop>
          ))
        ) : (
          <Box justifyContent="center" display="flex">
            <CircularProgress />
          </Box>
        )}
      </MenuList>
    </Card>
  );
};

export default ShopList;

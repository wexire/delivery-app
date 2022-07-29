import React from "react";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";

const Shop = ({ shop, func }) => {
  const order = useSelector((state) => state.order);

  const enableShop = order.order.length
    ? order.order[0].shop === shop._id
    : true;

  return (
    <MenuItem onClick={() => func(shop._id)} disabled={!enableShop}>
      {shop.name}
    </MenuItem>
  );
};

export default Shop;

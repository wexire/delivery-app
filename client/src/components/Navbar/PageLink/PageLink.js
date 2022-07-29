import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const PageLink = ({ to, children, ...props }) => {
  const classes = useStyles();

  return (
    <Button variant="outlined" {...props} size="medium">
      <Link to={to} className={classes.link}>
        {children}
      </Link>
    </Button>
  );
};

export default PageLink;

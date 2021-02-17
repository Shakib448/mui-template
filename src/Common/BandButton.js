import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  default: {
    borderRadius: 0,
    textTransform: "none",
  },
  primary: {
    "&:hover": {
      background: "red",
      color: "yellow",
    },
  },
  secondary: {
    fontWeight: 700,
  },
});

const BandButton = ({ color, children }) => {
  const classes = useStyles();
  return (
    <Button
      classes={{
        root: classes.default,
        containedPrimary: classes.primary,
        containedSecondary: classes.secondary,
      }}
      variant="contained"
      color={color}
      disableElevation
    >
      {children}
    </Button>
  );
};

export default BandButton;

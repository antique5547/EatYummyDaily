import React from "react";
import classes from "./DrawerToggle.css";

const drawerToggle = props => {
  return (
    <div onClick={props.onClick} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default drawerToggle;

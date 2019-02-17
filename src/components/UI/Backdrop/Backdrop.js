import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Backdrop.css";

const backdrop = props =>
  props.show ? (
    <Aux>
      <div className={classes.Backdrop} onClick={props.cancelPurchase} />
    </Aux>
  ) : null;

export default backdrop;

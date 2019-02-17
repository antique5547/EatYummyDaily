import React from "react";
import classes from "./BuildControl.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removeIngredientHand}
      disabled={props.disableButton}
    >
      LESS
    </button>
    <button className={classes.More} onClick={props.addIngredientHand}>
      MORE
    </button>
  </div>
);

export default buildControl;

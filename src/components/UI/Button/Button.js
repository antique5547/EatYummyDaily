import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Button.css";

const button = props => (
  <Aux>
    <button
      className={[classes.Button, classes[props.btnType]].join("  ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  </Aux>
);

export default button;

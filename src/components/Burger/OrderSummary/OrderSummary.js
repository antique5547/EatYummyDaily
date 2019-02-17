import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span> :
        {props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h1>Order Summary</h1>
      <p>A deliceous burger with the following ingredients :</p>
      <ul>{ingredients}</ul>
      <p>
        <strong>Total Price : {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.continueHandler}>
        CONTINUE
      </Button>
      <Button btnType="Danger" clicked={props.cancelHandle}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;

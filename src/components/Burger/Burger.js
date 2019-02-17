import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

class Burger extends Component {
  render() {
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(ingKey => {
        return [...Array(this.props.ingredients[ingKey])].map((_, index) => {
          return <BurgerIngredient type={ingKey} key={ingKey + index} />;
        });
      })
      .reduce((arr, ele) => {
        return arr.concat(ele);
      });
    if (transformedIngredients.length == 0) {
      transformedIngredients = <div>Please start adding ingredients!</div>;
    }
    return (
      <Aux>
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
        </div>
      </Aux>
    );
  }
}

export default Burger;

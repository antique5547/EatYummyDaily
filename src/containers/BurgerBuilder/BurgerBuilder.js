import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      bacon: 3,
      salad: 2
    }
  };
  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>Burger Controller</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

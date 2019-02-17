import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICE_INGREDIENTS = {
  meat: 2,
  cheese: 1,
  bacon: 3,
  salad: 4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0
    },
    totalPrice: 4,
    purchaseable: false,
    isGoingToPurchase: false
  };

  updatePurchaseableState = updatedIng => {
    const ingredients = updatedIng;
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = type => {
    const count = this.state.ingredients[type] + 1;
    const updatedIng = {
      ...this.state.ingredients
    };
    updatedIng[type] = count;
    const updatedTotPrice = this.state.totalPrice + PRICE_INGREDIENTS[type];
    this.setState({ totalPrice: updatedTotPrice, ingredients: updatedIng });
    this.updatePurchaseableState(updatedIng);
  };

  removeIngredientHandler = type => {
    console.log("removeIngredientHandler", type);
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount == 0 ? 0 : oldCount - 1;
    const updatedIng = {
      ...this.state.ingredients
    };
    updatedIng[type] = newCount;
    const updatedTotPrice = this.state.totalPrice - PRICE_INGREDIENTS[type];
    console.log("updatedTotPrice", updatedTotPrice);
    this.setState({ totalPrice: updatedTotPrice, ingredients: updatedIng });
    this.updatePurchaseableState(updatedIng);
  };

  purchasingHandler = () => {
    this.setState({ isGoingToPurchase: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ isGoingToPurchase: false });
  };

  continuePurchaseHandler = () => {
    alert("Sure to checkout?");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <div>
          <Model
            show={this.state.isGoingToPurchase}
            isCancel={this.cancelPurchaseHandler}
          >
            <OrderSummary
              ingredients={this.state.ingredients}
              continueHandler={this.continuePurchaseHandler}
              cancelHandle={this.cancelPurchaseHandler}
              totalPrice={this.state.totalPrice}
            />
          </Model>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredientHand={this.addIngredientHandler}
            removeIngredientHand={this.removeIngredientHandler}
            disableButton={disabledInfo}
            price={this.state.totalPrice}
            isPurchable={this.state.purchaseable}
            order={this.purchasingHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

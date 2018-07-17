import React, { Component } from "react";

import Aux from "../../../hoc/Auxwtf";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render = () => {
    const ingeredientSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delitious burger with the following ingredients:</p>
        <ul>{ingeredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Contine to checkout</p>
        <Button btnType="Danger" clicked={this.props.purhcaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  };
}

export default OrderSummary;

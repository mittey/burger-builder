import React from "react";

import Aux from "../../../hoc/Auxwtf";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingeredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delitious burger with the following ingredients:</p>
      <ul>{ingeredientSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Contine to checkout</p>
      <Button btnType="Danger" clicked={props.purhcaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;

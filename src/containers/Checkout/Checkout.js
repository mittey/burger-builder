import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 2,
      meat: 2,
      bacon: 2,
      cheese: 2
    }
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search.slice(1));

    const ingredients = {};
    for (let param of query.entries()) {
      console.log(param);
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: ingredients });
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;

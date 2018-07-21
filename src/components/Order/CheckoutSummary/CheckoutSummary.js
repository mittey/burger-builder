import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./checkoutSummary.css";

const checkoutSummary = () => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;

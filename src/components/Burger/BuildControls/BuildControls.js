import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildContol/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchasable}
        className={classes.OrderButton}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;

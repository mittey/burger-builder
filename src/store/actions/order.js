import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (createdOrderId, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: createdOrderId,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => dispatch => {
  dispatch(purchaseBurgerStart());

  axios
    .post("/orders.json", orderData)
    .then(response => {
      dispatch(purchaseBurgerSuccess(response.data, orderData));
    })
    .catch(error => {
      dispatch(purchaseBurgerFail(error));
    });
};

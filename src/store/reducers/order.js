import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.PURCHASE_BURGER_START:
        draft.loading = true;
        draft.purchased = false;
        break;

      case actionTypes.PURCHASE_BURGER_SUCCESS:
        const newOrder = { ...action.orderData, id: action.orderId };

        draft.loading = false;
        draft.orders.push(newOrder);
        draft.purchased = true;
        break;

      case actionTypes.PURCHASE_BURGER_FAIL:
        draft.loading = false;
        break;

      case actionTypes.PURCHASE_INIT:
        draft.purchased = false;
        break;

      case actionTypes.FETCH_ORDERS_START:
        draft.loading = true;
        break;

      case actionTypes.FETCH_ORDERS_SUCCESS:
        draft.orders = action.orders;
        draft.loading = false;
        break;

      case actionTypes.FETCH_ORDERS_FAIL:
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default reducer;

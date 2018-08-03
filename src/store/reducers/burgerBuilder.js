import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.4,
  bacon: 0.7
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.ADD_INGREDIENTS:
        draft.ingredients[action.ingredientName] =
          state.ingredients[action.ingredientName] + 1;
        draft.totalPrice =
          state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
        draft.building = true;
        break;

      case actionTypes.REMOVE_INGREDIENTS:
        draft.ingredients[action.ingredientName] =
          state.ingredients[action.ingredientName] - 1;
        draft.totalPrice =
          state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
        draft.building = true;
        break;

      case actionTypes.SET_INGREDIENTS:
        draft.ingredients = {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        };
        draft.error = false;
        draft.totalPrice = 4;
        draft.building = false;
        break;

      case actionTypes.FETCH_INGREDIENTS_FAILED:
        draft.error = true;
        break;

      default:
        break;
    }
  });

export default reducer;

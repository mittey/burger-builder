import * as actionTypes from "./actionTypes";

export const addIngredient = ingredientName => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: ingredientName
  };
};

export const removeIngredient = ingredientName => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: ingredientName
  };
};

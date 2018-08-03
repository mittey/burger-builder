import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.AUTH_START:
        draft.error = null;
        draft.loading = true;
        break;

      case actionTypes.AUTH_SUCCESS:
        draft.token = action.idToken;

        draft.loading = false;
        draft.error = null;
        draft.userId = action.userId;
        break;

      case actionTypes.AUTH_FAIL:
        draft.error = action.error;
        draft.loading = false;
        break;

      case actionTypes.AUTH_LOGOUT:
        draft.token = null;
        draft.userId = null;
        break;

      case actionTypes.SET_AUTH_REDIRECT_PATH:
        draft.authRedirectPath = action.path;
        break;

      default:
        break;
    }
  });

export default reducer;

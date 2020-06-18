import { ARTWORK_DETAILS_FETCHED } from "./actions";
import { ARTWORK_UPDATED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTWORK_DETAILS_FETCHED:
      console.log(action);
      console.log(action.payload);
      return { ...state, ...action.payload };

    case ARTWORK_UPDATED:
      console.log("new state", state)
      return {...state, hearts: state.hearts + 1};

    default:
      return state;
  }
};

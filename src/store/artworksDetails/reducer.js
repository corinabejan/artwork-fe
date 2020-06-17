import { ARTWORK_DETAILS_FETCHED } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTWORK_DETAILS_FETCHED:
      console.log(action);
      console.log(action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

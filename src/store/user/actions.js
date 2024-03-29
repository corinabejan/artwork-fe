import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const ARTWORK_POST_SUCCESS = "ARTWORK_POST_SUCCESS";
export const BID_POST_SUCCESS = "BID_POST_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const artworkPostSuccess = (artwork) => ({
  type: ARTWORK_POST_SUCCESS,
  payload: artwork,
});

export const bidPostSuccess = (bid) => ({
  type: BID_POST_SUCCESS,
  payload: bid,
});

export const signUp = (name, email, password, isArtist) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        isArtist
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const postBids = (amount) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const artwork = getState();
    const art = artwork.artworksDetails;
    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/artworks/${art.id}/bids`,
      {
        email: user.email,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    // console.log("Yep!", response);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(bidPostSuccess(response.data.bids));
    dispatch(appDoneLoading());
  };
};

export const postArtwork = (title, imageUrl, minimumBid, hearts) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/artworks`,
      {
        title: title,
        imageUrl: imageUrl,
        minimumBid: minimumBid,
        hearts: hearts,
        userId: user.id
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    
    console.log("Yep!", response);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(artworkPostSuccess(response.data.artworks));
    dispatch(appDoneLoading());
  };
};

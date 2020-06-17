import axios from "axios";
import { apiUrl } from "../../config/constants";

export const ARTWORK_DETAILS_FETCHED = "ARTWORK_DETAILS_FETCHED";

export const artworkDetailsFetched = (artworks) => ({
  type: ARTWORK_DETAILS_FETCHED,
  payload: artworks,
});

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artworks/${id}`);
    console.log(response);
    dispatch(artworkDetailsFetched(response.data.artworks));
  };
};
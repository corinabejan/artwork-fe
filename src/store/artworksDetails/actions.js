import axios from "axios";
import { apiUrl } from "../../config/constants";

export const ARTWORK_DETAILS_FETCHED = "ARTWORK_DETAILS_FETCHED";
export const ARTWORK_UPDATED = "ARTWORK-UPDATED";

export const artworkDetailsFetched = (artworks) => ({
  type: ARTWORK_DETAILS_FETCHED,
  payload: artworks,
});

export const artworkUpdated = (hearts) => ({
  type: ARTWORK_UPDATED,
  payload: hearts,
});

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artworks/${id}`);
    console.log(response);
    dispatch(artworkDetailsFetched(response.data.artworks));
  };
};

export const updateMyArtwork = (id, hearts) => {
  return async (dispatch, getState) => {
    // const hearts = getState(hearts);
    const response = await axios.patch(`${apiUrl}/artworks/${id}`, `hearts=${hearts + 1}`);
    console.log("what is my response" , response.data.artworks.hearts)
    dispatch(artworkUpdated(response.data.artworks.hearts));
  };
};

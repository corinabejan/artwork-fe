import { apiUrl } from '../../config/constants';
import axios from 'axios';

export const FETCH_ARTWORKS_SUCCESS = "FETCH_ARTWORKS_SUCCESS";

export const fetchArtworksSuccess = artworks => ({
  type: FETCH_ARTWORKS_SUCCESS,
  payload: artworks
});

export const fetchArtworks = () => {
  return async(dispatch, getState) => {
    const artworksCount =  getState().artworks;
    const response = await axios.get(`${apiUrl}/artworks?limit=10&offset=${artworksCount}`);
    console.log(response);
    dispatch(fetchArtworksSuccess(response.data.artworks.rows));
  }
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtworkById } from "../../store/artworksDetails/actions";
import { selectArtworkDetails } from "../../store/artworksDetails/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function ArtworkDetails() {
  const { id } = useParams();
  const artworks = useSelector(selectArtworkDetails);
  console.log("DETAILS", artworks);
  const dispatch = useDispatch();

  const bidsJSX = !Array.isArray(artworks.bids)
    ? null
    : artworks.bids.map((bid, i) => (
        <p key={i}>
          {bid.email} {bid.amount}
        </p>
      ));

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  return (
    <>
      <Jumbotron>
        <h1>{artworks.title}</h1>
        <img src={artworks.imageUrl} alt="" />
        <p>{artworks.hearts}</p>
        <Button>Give hearts</Button>
        {bidsJSX}
      </Jumbotron>
    </>
  );
}

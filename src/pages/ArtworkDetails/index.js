import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtworkById } from "../../store/artworksDetails/actions";
import { updateMyArtwork } from "../../store/artworksDetails/actions";
import { selectArtworkDetails } from "../../store/artworksDetails/selectors";
import { selectToken } from "../../store/user/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
// import { postBids } from '../../store/user/actions';

export default function ArtworkDetails() {
  const { id } = useParams();
  const artworks = useSelector(selectArtworkDetails);
  console.log("DETAILS", artworks);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);


  const bidsJSX = !Array.isArray(artworks.bids)
    ? null
    : artworks.bids.map((bid, i) => (
        <p key={i}>
          {bid.email} {bid.amount}
        </p>
      ));

  function buttonHandler(e) {
    e.preventDefault();
    console.log('artworks:', artworks);
    dispatch(updateMyArtwork(id, artworks.hearts));
  }

  // function submitBid(e) {
  //   e.preventDefault();

  //   dispatch(postBid())
  // }

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  return (
    <>
      <Jumbotron>
        <h1>{artworks.title}</h1>
        <Image src={artworks.imageUrl} alt="" />
        <p>{artworks.hearts}</p>
        <Button onClick={buttonHandler}>Give hearts</Button>
     {token ? bidsJSX : null}
      </Jumbotron>
     
    </>
  );
}

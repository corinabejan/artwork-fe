import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtworkById } from "../../store/artworksDetails/actions";
import { updateMyArtwork } from "../../store/artworksDetails/actions";
import { selectArtworkDetails } from "../../store/artworksDetails/selectors";
import { selectToken } from "../../store/user/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
// import { postBids } from '../../store/user/actions';

export default function ArtworkDetails() {
  const { id } = useParams();
  const artworks = useSelector(selectArtworkDetails);
  console.log("DETAILS", artworks);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // const [email, setEmail] = useState('');
  // const [amount, setAmount] = useState('')

  // function submitForm(e) {
  //   e.preventDefault();
  //   console.log(email, amount);
  //   dispatch(postBids(email, amount));
  // }

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

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  return (
    <>
      <Jumbotron>
        <h1>{artworks.title}</h1>
        <img src={artworks.imageUrl} alt="" />
        <p>{artworks.hearts}</p>
        <Button onClick={buttonHandler}>Give hearts</Button>
      {bidsJSX}
      </Jumbotron>
      {/* <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="text"
      placeholder="email"
      />
      <input 
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      type="number"
      placeholder="amount"
      />
        <Button variant="primary" type="submit" onClick={submitForm}>
          BID
        </Button> */}
    </>
  );
}

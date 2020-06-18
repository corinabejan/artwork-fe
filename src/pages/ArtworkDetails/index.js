import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtworkById } from "../../store/artworksDetails/actions";
import { updateMyArtwork } from "../../store/artworksDetails/actions";
import { selectArtworkDetails } from "../../store/artworksDetails/selectors";
import { selectToken } from "../../store/user/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
import { postBids } from '../../store/user/actions';

export default function ArtworkDetails() {
  const { id } = useParams();
  const artworks = useSelector(selectArtworkDetails);
  console.log("DETAILS", artworks);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const[amount, setAmount] = useState(0);

  const bidsJSX = !Array.isArray(artworks.bids)
    ? null
    : artworks.bids.map((bid, i) => (
        <tr key={i}>
          <td>{bid.email}</td>
          <td>{bid.amount}</td>
        </tr>
      ));

  function buttonHandler(e) {
    e.preventDefault();
    
    dispatch(updateMyArtwork(id, artworks.hearts));
  }

  function submitBid(e) {
    e.preventDefault();
    console.log('TAG 1')
    dispatch(postBids(amount))
  }

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
        {token ? (
          <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email</th>
                <th>Bid Amount</th>
              </tr>
            </thead>
            <tbody>{bidsJSX}</tbody>
          </Table>
        
          <Form.Group controlId="formBasicName">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            placeholder="0"
            required
          />
        </Form.Group>
          <Button type='submit' onClick={submitBid}>Bid</Button>
          </div>
        ) : null}
      </Jumbotron>
    </>
  );
}

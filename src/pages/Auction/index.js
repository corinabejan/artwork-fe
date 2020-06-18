import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import { useDispatch } from 'react-redux';
import { postArtwork } from '../../store/user/actions'

export default function Auction() {
  const dispatch = useDispatch();
  const[title, setTitle] = useState('');
  const[minimumBid, setMinimumBid] = useState(0);
  const[hearts, setHearts] = useState(0)
  const[imageUrl, setImageUrl] = useState('https://source.unsplash.com/1600x900/?')

  function submitHandler(e) {
    e.preventDefault();

    dispatch(postArtwork(title, minimumBid, imageUrl, hearts));
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Post one of your artwork to start receiving offers</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Name of your art"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Minimum bid</Form.Label>
        <Form.Control
          value={minimumBid}
          onChange={event => setMinimumBid(event.target.value)}
          type="number"
          placeholder="0"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hearts</Form.Label>
        <Form.Control
          value={hearts}
          onChange={event => setHearts(event.target.value)}
          type="number"
          placeholder="0"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          type="text"
          placeholder="http://...."
        />
        {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Start Auction!
        </Button>
      </Form.Group>
    </Form>
  );
}
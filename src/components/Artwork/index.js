import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Artwork(props) {
  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <Image src={props.imageUrl} alt="" />
      <p>{props.hearts}</p>
      <p>{props.bids.length}</p>
      {props.showLink ? (
        <Link to={`/artworks/${props.id}`}>
          <Button>View details</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}

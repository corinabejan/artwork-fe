import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { fetchArtworks } from '../../store/artworks/actions';
import { selectArtworks } from '../../store/artworks/selectors';
import Artwork from '../../components/Artwork';


export default function Artworks() {
  const dispatch = useDispatch();
  const artworks = useSelector(selectArtworks);
  console.log("ARTWORKS", artworks);

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch]);

  return (
    <>
    <Jumbotron>
      <h1>Artworks</h1>
      <Container>
        {artworks.map(artwork => (
          <Artwork 
          key={artwork.id}
          id={artwork.id}
          title={artwork.title}
          hearts={artwork.hearts}
          minimumBid={artwork.minimumbid}
          bids={artwork.bids}
          imageUrl={artwork.imageUrl}
          />
        ))}
      </Container>
    </Jumbotron>
    </>
  )
}
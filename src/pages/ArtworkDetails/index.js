import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Artwork from "../../components/Artwork";
import { fetchArtworkById } from "../../store/artworksDetails/actions";
import { selectArtworkDetails } from "../../store/artworksDetails/selectors";

export default function ArtworkDetails() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  return (
    <>
      <Artwork
        id={artwork.id}
        title={artwork.title}
        imageUrl={artwork.imageUrl}
        hearts={artwork.hearts}
        minimumBid={artwork.minimumBid}
        bids={artwork.bids}
        showLink={false}
      />
    </>
  );
}

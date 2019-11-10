import React from "react";
import PropTypes from "prop-types";

function Album({album: {artists, images, name}}) {
  const items = artists.map(artist => (
    <div className="album-artista" key={artist.id}>
      <span>{artist.name}</span>
      <br />
    </div>
  ));

  return (
    <>
      <img src={images[Object.keys(images)[0]].url} alt="Albúm" />
      <strong>{name}</strong>
      <div className="album-artistas">{items}</div>
    </>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    artists: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    images: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Album;

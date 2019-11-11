import React from "react";
import PropTypes from "prop-types";

function Album({album: {artist, name, cover}}) {
  return (
    <>
      <img src={cover} alt="Albúm" />
      <strong>{name}</strong>
      <p className="album-artistas">{artist}</p>
    </>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Album;

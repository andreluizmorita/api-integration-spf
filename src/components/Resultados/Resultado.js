import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import {Content, UlAlbums} from "./styles";

function Resultado({tipo, busca, items}) {
  const titulo = tipo === "tracks" ? "Músicas" : "Álbums";
  const resultadoItems = items.map(resultado => {
    let url =
      tipo === "tracks"
        ? `/album/${resultado.album.id}/track/${resultado.id}`
        : `/album/${resultado.id}`;

    return (
      <li key={resultado.id}>
        <Link to={url}>
          <img
            src={
              tipo === "tracks"
                ? resultado.album.images[Object.keys(resultado.album.images)[0]].url
                : resultado.images[Object.keys(resultado.images)[0]].url
            }
            alt={`${titulo} - ${resultado.name}`}
          />
          <strong>{resultado.name}</strong>
          {resultado.artists.map(artist => (
            <p key={artist.id}>{artist.name}</p>
          ))}
        </Link>
      </li>
    );
  });

  return (
    <Content>
      <h2>
        {titulo} encontrados para "{busca}"
      </h2>
      <UlAlbums>{resultadoItems}</UlAlbums>
    </Content>
  );
}

Resultado.propTypes = {
  tipo: PropTypes.string.isRequired,
  busca: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Resultado;

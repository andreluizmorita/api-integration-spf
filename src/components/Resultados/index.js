import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Resultado from "../Resultados/Resultado";

import {Content, UlAlbums} from "./styles";

export default function Resultados({
  resultados: {
    busca,
    data: {albums, tracks},
  },
}) {
  return (
    <>
      {albums.items.length > 0 && (
        <Resultado tipo="albums" busca={busca} items={albums.items} />
      )}
      {tracks.items.length > 0 && (
        <Resultado tipo="tracks" busca={busca} items={tracks.items} />
      )}
    </>
  );
}

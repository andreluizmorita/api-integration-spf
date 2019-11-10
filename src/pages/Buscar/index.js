import React, {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import Container from "../../components/Container";
import Resultados from "../../components/Resultados";

import useDebounce from "../../utils/use-debouce";

import {Creators as BuscarActions} from "../../store/ducks/buscar";

import {Form, Content} from "./styles";

function Buscar({getBuscarRequest, buscar}) {
  const {buscarTexto} = useParams();
  const [busca, setBusca] = useState("");
  const delayBusca = useDebounce(busca, 1500);

  const getBuscar = useCallback(() => {
    if (busca.length > 0) {
      getBuscarRequest(busca);
    }
  }, [busca]);

  function handleSubmit(e) {
    e.preventDefault();
    getBuscar();
  }

  useEffect(() => {
    if (delayBusca) {
      getBuscar();
    }
  }, [delayBusca]);

  useEffect(() => {
    setBusca(buscarTexto);
  }, [buscarTexto]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="busca">Busque por artistas, álbums ou músicas</label>
          <input
            type="text"
            value={busca || ""}
            name="busca"
            placeholder="Comece a escrever..."
            onChange={e => setBusca(e.target.value)}
          />
        </Form>
        {buscar.data.tracks.items.length > 0 || buscar.data.albums.items.length > 0 ? (
          <Resultados resultados={buscar} />
        ) : null}
        {buscar.loading && <div className="buscando">Buscando ...</div>}
      </Content>
    </Container>
  );
}

Buscar.propTypes = {
  getBuscarRequest: PropTypes.func.isRequired,
  buscar: PropTypes.shape({
    busca: PropTypes.string.isRequired,
    data: PropTypes.shape({
      tracks: PropTypes.shape({
        items: PropTypes.any,
      }).isRequired,
      albums: PropTypes.shape({
        items: PropTypes.any,
      }).isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  buscar: state.buscar,
});

const mapDispatchToProps = dispatch => bindActionCreators(BuscarActions, dispatch);

export const BuscarTest = Buscar;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscar);

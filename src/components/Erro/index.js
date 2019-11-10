import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Creators as ErroAction} from "../../store/ducks/erro";

import Container from "./styles";

function ErroBox({erro: {message, visible, token}, hideErro, showInputToken, history, ...rest}) {
  const [inputToken, setInputToken] = useState("");

  function handleSetInputToken(e) {
    e.preventDefault();
    localStorage.setItem("token", inputToken);
    showInputToken();
    history.push("/");
  }

  return (
    <>
      {visible && (
        <Container>
          {token ? (
            <div className="form-token">
              <label htmlFor="token">Insira um token válido</label>
              <input
                type="text"
                name="token"
                id="token"
                value={inputToken}
                onChange={e => setInputToken(e.target.value)}
              />
              <button type="button" onClick={handleSetInputToken}>
                SALVAR TOKEN
              </button>
            </div>
          ) : (
            <>
              <p>{message}</p>
              <button type="button" onClick={hideErro}>
                <i className="fas fa-times" />
              </button>
            </>
          )}
        </Container>
      )}
    </>
  );
}

ErroBox.propTypes = {
  hideErro: PropTypes.func.isRequired,
  showInputToken: PropTypes.func.isRequired,
  erro: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  erro: state.erro,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErroAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ErroBox));

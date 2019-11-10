import React from "react";
import PropTypes from "prop-types";
import Erro from "../Erro";
import {Wrapper} from "./styles";
import logo from "../../assets/images/logo.png";

export default function Container({children}) {
  return (
    <Wrapper>
      <Erro />
      <img className="logo" src={logo} alt="Logo" />
      <div className="content">{children}</div>
    </Wrapper>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

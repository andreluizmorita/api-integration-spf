import React from "react";
import PropTypes from "prop-types";
import {MemoryRouter} from "react-router-dom";

export const wrapperWithRoute = ({children}) => <MemoryRouter>{children}</MemoryRouter>;

wrapperWithRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

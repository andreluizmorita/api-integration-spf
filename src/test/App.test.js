import React from "react";
import {shallow} from "enzyme";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import App from "../App";

describe("Testing App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

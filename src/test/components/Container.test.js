import React from "react";
import {shallow} from "enzyme";
import "jest-styled-components";

import Erro from "../../components/Erro";
import Container from "../../components/Container";

describe("Testing Container", () => {
  const children = <Erro />;

  it("renders without crashing children component", () => {
    shallow(<Container>{children}</Container>);
  });

  it("renders without crashing text", () => {
    shallow(<Container>text</Container>);
  });
});

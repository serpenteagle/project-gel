import React from "react";
import styled from "styled-components";
import styleInject from "style-inject";

import SpaceNav from "../src/SpaceNav/SpaceNav.js";
import Space from "../src/SpaceNav/Space.js";

styleInject(`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    #root {
        height: 100%;
        width: 100%;
    }
`);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = props => {
  return (
    <Container>
      <SpaceNav active={null}>
          <Space/>
          <Space/>
          <Space/>
      </SpaceNav>
    </Container>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import styleInject from "style-inject";
import SpaceGrid from "../src/components/SpaceGrid/SpaceGrid";
import Space from "../src/components/SpaceGrid/Space";

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
        transform: scale(.25);
    }
`);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = props => {
  return (
    <Container>
      <SpaceGrid>
        <Space area="B2"></Space>
      </SpaceGrid>
    </Container>
  );
};

export default App;

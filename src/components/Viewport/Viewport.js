import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  perspective: 18in;
  perspective-origin: center;
  overflow: hidden;
`;

const Viewport = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default Viewport;

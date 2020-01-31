import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${props => props.area};
  background: linear-gradient(45deg, black, white);
`;

const Space = props => {
  return <Container area={props.area}>{props.children}</Container>;
};

export default Space;

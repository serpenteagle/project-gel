import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, teal, yellow);
`;

const Space = props => {
  return <Container>{props.children}</Container>;
};

export default Space;

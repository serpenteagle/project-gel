import React from "react";
import styled from "styled-components";

// Transform value into an array
const arrayify = val => (Array.isArray(val) ? val : [val]);
// Find max length of subarray in an array
const maxSubarrayLength = arr =>
  arr.reduce((acc, val) => (arr.length > acc ? arr.length : acc), 1);
// Wrap string in char
const wrap = char => val => char + val + char;
//
const createTemplateAreas = areas => {
  const rows = maxSubarrayLength(areas.map(arrayify));
  const buffer = [];

  for (let i = 0; i < rows - 1; i++) {
    const line = areas
      .map(arrayify)
      .map(item => item[i] || ".")
      .join(" ");
    buffer.push(wrap('"')(line));
  }

  return buffer.join("\n");
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;

  grid-auto-columns: 100%;
  grid-auto-rows: 100%;
  grid-template-areas: ${props => createTemplateAreas(props.areas)};
`;

const SpaceGrid = props => {
  return <Container areas={props.areas}>{props.children}</Container>;
};

SpaceGrid.defaultProps = {
  areas: ["A1", ["B1", "B2"], "C1"],
  flipAxis: true
};

export default SpaceGrid;

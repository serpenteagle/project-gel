import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Rematrix from "rematrix";

const Container = styled.div`
  width: 100%;
  height: 100%;
  perspective: 18in;
  transform-style: preserve-3d;
`;
const GridWrapper = styled.div`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
`;
const Grid = styled.div`
  display: grid;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  grid-auto-columns: 100%;
  grid-auto-rows: 100%;
  /* grid-gap: 300px 300px; */
  grid-auto-flow: column;
  transform: ${({ active, mouseX, containerWidth }) => {
    if (active !== null)
      return `translate3d(${active * containerWidth * -1}px, 0, 0)`;
    // else return `translate3d(${mouseX}px, 0, -3000px)`;
    else return `translate3d(0, 0, -3000px)`;
  }};
  transition: 0.5s transform;
`;

const SpaceNav = props => {
  const containerRef = useRef(null);
  const gridWrapperRef = useRef(null);
  const gridRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  // const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    setContainerWidth(
      containerRef.current
        ? containerRef.current.getBoundingClientRect().width
        : 100
    );
  }, [containerRef]);

  useEffect(() => {
    const moveX = e => {
      const percentage = e.clientX / containerRef.current.getBoundingClientRect().width;
      const gridScrollWidth = gridRef.current.scrollWidth;
      // const gridRect= gridRef.current.getBoundingClientRect();
      // console.log(gridRef.current.scrollWidth)
      gridWrapperRef.current.style.transform = `translate3d(${percentage * gridScrollWidth * -1}px, 0, 0)`;
      // console.log(gridWrapperRef.current.style);
    };

    if (props.active === null) {
      containerRef.current.addEventListener("mousemove", moveX);
      console.log('add')
    } else {
      containerRef.current.removeEventListener("mousemove", moveX);
      console.log('remove')
    }
  }, [props.active]);

  return (
    <Container ref={containerRef}>
      <GridWrapper ref={gridWrapperRef}>
        <Grid
          ref={gridRef}
          active={props.active}
          // mouseX={mouseX}
          containerWidth={containerWidth}
        >
          {props.children}
        </Grid>
      </GridWrapper>
    </Container>
  );
};

export default SpaceNav;

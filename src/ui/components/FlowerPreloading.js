import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import random from 'lodash/random';

const CIRCLE_HUGE_DIAMETER = 300;
const CIRCLE_SMALL_DIAMETER = CIRCLE_HUGE_DIAMETER / 3;
const CIRCLE_BORDER_WIDTH = 1;

const radius = CIRCLE_SMALL_DIAMETER / 2 - CIRCLE_BORDER_WIDTH / 2;
const xOffset = 0.87;
const flower = [
  { x: 0, y: 0 },
  { x: 0, y: -radius },
  { x: radius * xOffset, y: -radius / 2 },
  { x: radius * xOffset, y: radius / 2 },
  { x: 0, y: radius },
  { x: -radius * xOffset, y: radius / 2 },
  { x: -radius * xOffset, y: -radius / 2 },
  { x: 0, y: -radius * 2 },
  { x: radius * 2 * xOffset, y: -radius * 2 / 2 },
  { x: radius * 2 * xOffset, y: radius * 2 / 2 },
  { x: 0, y: radius * 2 },
  { x: -radius * 2 * xOffset, y: radius * 2 / 2 },
  { x: -radius * 2 * xOffset, y: -radius * 2 / 2 },
];
const circles = [];

function Circle(x, y) {
  this.x = x + CIRCLE_HUGE_DIAMETER / 3;
  this.y = y + CIRCLE_HUGE_DIAMETER / 3;
}

const createCircles = () => {
  for (let i = 0; i < flower.length; i++) {
    circles.push(new Circle(flower[i].x, flower[i].y));
  }
};

createCircles();

const getOpacity = i => {
  if (i === 0) {
    return 1;
  } else if (i && i < 7) {
    return 0.8;
  } else {
    return 0.6;
  }
};

class FlowerPreloading extends PureComponent {
  state = {
    animated: false,
    visible: true,
    display: true,
  };

  componentDidMount() {
    this.setState({ animated: true });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 2600);
    setTimeout(() => {
      this.setState({ display: false });
    }, 4000);
  };

  render() {
    const { animated, visible, display } = this.state;

    return (
      <Cont visible={visible}>
        <FlowerCont {...this.props}>
          <BigCircle animated={animated} />
          {circles.map((c, i) => (
            <SmallCircle
              x={c.x}
              y={c.y}
              index={i}
              initialX={random(0, 150)}
              initialY={random(0, 150)}
              animated={animated}
            />
          ))}
        </FlowerCont>
      </Cont>
    );
  }
}

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  z-index: 9999;
  opacity: 1;
  will-change: transform, opacity;
  transition: all 1.2s ease;
  ${p => !p.visible && css`
    opacity: 0;
    visibility: hidden;
    transform: scale(1.3);
  `}
`;

const FlowerCont = styled.div`
  position: relative;
  width: ${CIRCLE_HUGE_DIAMETER}px;
  height: ${CIRCLE_HUGE_DIAMETER}px;
`;

const BigCircle = styled.div`
  position: absolute;
  width: ${CIRCLE_HUGE_DIAMETER}px;
  height: ${CIRCLE_HUGE_DIAMETER}px;
  border-radius: 1000px;
  border-style: solid;
  border-width: ${CIRCLE_BORDER_WIDTH}px;
  opacity: 0;
  border-color: ${p => rgba(p.theme.colors.primary, 0.4)};
  transform: scale(0);
  transition: all 1.8s ease;
  transform-origin: center;
  transition-delay: 1s;
  will-change: transform, opacity;
  ${p => p.animated && css`
    transform: scale(1);
    opacity: 1;
  `}
`;

const SmallCircle = styled.div`
  position: absolute;
  width: ${CIRCLE_SMALL_DIAMETER}px;
  height: ${CIRCLE_SMALL_DIAMETER}px;
  border-radius: 300px;
  border-style: solid;
  border-width: ${CIRCLE_BORDER_WIDTH}px;
  transition: all 1s ease-out;
  transition-delay: ${p => p.index * 0.12}s;
  border-color: ${p => rgba(p.theme.colors.primary, getOpacity(p.index))};
  transform: translate(${p => p.initialX}px, ${p => p.initialY}px) scale(1);
  transform-origin: center;
  will-change: transform, opacity;
  opacity: 0;
  ${p => p.animated && css`
    transform: translate(${p.x}px, ${p.y}px) scale(1);
    opacity: 1;
  `}
`;

export default FlowerPreloading;

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import PHONE from 'assets/images/iphone.png';
import { Text } from 'ui/atoms';

class Control extends PureComponent {
  render() {
    return (
      <svg id="hello" viewBox="0 0 200 200" xmlSpace="preserve" {...this.props}>
        <circle
          r="90"
          cx="100"
          cy="100"
          strokeWidth={3}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        />
        <circle
          id="bar"
          r="90"
          cx="100"
          strokeWidth={3}
          strokeLinecap="round"
          cy="100"
          stroke="#ffffff"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={400}
        />
      </svg>
    );
  }
}

class Phone extends PureComponent {
  render() {
    return (
      <Cont>
        <Day>День 1</Day>
        <Title>Осознанность</Title>
        <MeditationControl />
        <PlayIcon />
      </Cont>
    );
  }
}

const MeditationControl = styled(Control)`
  transform: scale(0.65) translateY(68%);
`;

const Cont = styled.div`
  position: relative;
  width: 276px;
  height: 550px;
  background-image: url(${PHONE});
  background-size: cover;
  ${p => p.theme.between('sm', 'md')`
    transform: translateX(-20px) scale(0.85);
  `}
  ${p => p.theme.max('sm')`
    display: none;
  `}
`;

const Day = styled(Text)`
  position: absolute;
  top: 32px;
  width: 100%;
  color: white;
  font-size: 13px;
  font-weight: 400;
  text-align:center;
  margin-bottom: 0;
  opacity: 0.8;
`;

const Title = styled(Text)`
  position: absolute;
  top: 44px;
  width: 100%;
  color: white;
  font-size: 17px;
  font-weight: 600;
  text-align:center;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 47%;
  left: 53%;
  transform: translate(-50%, -50%);
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 48px solid white;
`;

export default Phone;

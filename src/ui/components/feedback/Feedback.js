import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container } from "ui/atoms";

import FEEDBACK_BG from "assets/images/feedback-bg.jpg";
import SHAPE_1 from "assets/images/feedback-shape.png";
import SHAPE_2 from "assets/images/feedback-shape-1.png";
import SHAPE_3 from "assets/images/feedback-shape-2.png";

const SFeedback = styled.div`
  position: relative;
  height: 400px;
  padding: 40px 0;
  background-image: url(${FEEDBACK_BG});
`;

const Shape1 = styled.img`
  position: absolute;
  top: -47px;
  left: -60px;
`;
const Shape2 = styled.img`
  position: absolute;
  top: -60px;
  left: 0;
`;
const Shape3 = styled.img`
  position: absolute;
  top: -50px;
  left: -100px;
`;

class Feedback extends PureComponent {
  render() {
    return (
      <SFeedback>
        <Shape1 src={SHAPE_1} />
        <Shape2 src={SHAPE_2} />
        <Shape3 src={SHAPE_3} />
        <Container>feedback</Container>
      </SFeedback>
    );
  }
}

export default Feedback;

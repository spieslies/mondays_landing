import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Button} from "ui/atoms";

import FEEDBACK_BG from "assets/images/feedback-bg.jpg";
import SHAPE_1 from "assets/images/feedback-shape.png";
import SHAPE_2 from "assets/images/feedback-shape-1.png";
import SHAPE_3 from "assets/images/feedback-shape-2.png";

const SFeedback = styled.div`
  position: relative;
  height: 400px;
  padding: 60px 0 40px;
  background-image: url(${FEEDBACK_BG});
`;

const CustomContainer = styled(Container)`
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${p => p.theme.max("md")`
    padding: 20px;
  `}
`;

const Title = styled.h3`
  position: relative;
  display: block;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.05em;
  color: ${p => p.theme.colors.white};
  text-align: center;
  margin-bottom: 50px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -16px;
    width: 60px;
    height: 2px;
    background: ${p => p.theme.colors.white};
    opacity: 0.5;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Shape1 = styled.img`
  position: absolute;
  top: -55px;
  left: 0;
  ${p => p.theme.max("md")`
    top: -47px;
    left: -60px;
  `}
`;
const Shape2 = styled.img`
  position: absolute;
  top: -100px;
  left: 0;
  ${p => p.theme.max("md")`
    top: -60px;
    left: 0;
  `}
`;
const Shape3 = styled.img`
  position: absolute;
  top: -50px;
  left: 0;
  ${p => p.theme.max("md")`
    top: -50px;
    left: -100px;
  `}
`;

class Feedback extends PureComponent {
  render() {
    return (
      <SFeedback>
        <Shape1 src={SHAPE_1} />
        <Shape2 src={SHAPE_2} />
        <Shape3 src={SHAPE_3} />
        <CustomContainer>
          <Title>Создайте свой первый марафон</Title>
          <Button>Создать Mарафон</Button>
        </CustomContainer>
      </SFeedback>
    );
  }
}

export default Feedback;

import React, { PureComponent } from "react";
import styled from "styled-components";

import { Container, Flex, Box, SectionHeading } from "ui/atoms";

import FEEDBACK_BG from "assets/images/feedback-bg.jpg";

const SFeedback = styled.div`
  height: 400px;
  padding: 40px 0;
  background-image: url(${FEEDBACK_BG});
`;

class Feedback extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <SFeedback>
        <Container>feedback</Container>
      </SFeedback>
    );
  }
}

export default Feedback;

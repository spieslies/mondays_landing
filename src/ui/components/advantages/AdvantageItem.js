import React, { Component } from "react";
import styled from "styled-components";

import { Flex } from "ui/atoms";

const SAdvantageItem = styled.div`
  width: 420px;
  &:not(:last-child) {
    margin-right: 30px;
    ${p => p.theme.max("sm")`
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
  `}
  }
  ${p => p.theme.max("sm")`
      width: 100%;
  `}
`;
const AdvantageHead = styled.div`
  margin-bottom: 20px;
`;
const AdvantageIcon = styled.div`
  display: block;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  margin-right: 30px;
  border-radius: 100%;
  line-height: 60px;
  text-align: center;
  background-color: ${p => p.theme.colors.secondary};
  ${p => p.theme.max("sm")`
      margin-right: 0;
      margin-bottom: 20px;
  `}
`;
const AdvantageTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  ${p => p.theme.max("sm")`
      text-align: center;
  `}
`;
const AdvantageDescription = styled.div`
  font-size: 13px;
  line-height: 28px;
  color: #8e94a5;
  opacity: 0.7;
`;
const CustomFlex = styled(Flex)`
  align-items: center;
  ${p => p.theme.max("sm")`
      flex-direction: column;
  `}
`

class AdvantageItem extends Component {
  render() {
    const { title, icon, description } = this.props;
    return (
      <SAdvantageItem>
        <AdvantageHead>
          <CustomFlex>
            <AdvantageIcon>{icon}</AdvantageIcon>
            <AdvantageTitle>{title}</AdvantageTitle>
          </CustomFlex>
        </AdvantageHead>
        <AdvantageDescription>{description}</AdvantageDescription>
      </SAdvantageItem>
    );
  }
}

export default AdvantageItem;

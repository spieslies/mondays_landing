import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Container, Flex, Box, Text, SectionHeading } from 'ui/atoms';

class Myths extends PureComponent {
  render() {
    return (
      <Cont>
        <Container>
          <SectionHeading>Развенчаем основные опасения</SectionHeading>
          <MythCont>
            <MythHeading></MythHeading>
          </MythCont>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.section`
  padding: 30px 0;
`;

const MythCont = styled.div`
  margin-bottom: 20px;
`;

const MythHeading = styled.div`
  font-size: 20px;
`;

export default Myths;

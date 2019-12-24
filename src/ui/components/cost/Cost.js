import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import {
  Container,
  Flex,
  Box,
  SectionHeading as SectionHeadingAtom,
  Text
} from 'ui/atoms';
import BG from 'assets/images/footer_b.jpg';

class Cost extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <BottomBg />
        <Container>
          <SectionHeading>{t('Cost.title')}</SectionHeading>
          <Flex>
            <Box md={10} mdOffset={1}>
              <Desc dangerouslySetInnerHTML={{__html: t('Cost.description')}}/>
            </Box>
          </Flex>
        </Container>
      </Cont>
    );
  }
}

const SectionHeading = styled(SectionHeadingAtom)`
  color: white;
`;

const Cont = styled.div`
  position:relative;
  padding: 20px 0;
  background-size: cover;
  padding-bottom: 200px;
`;

const BottomBg = styled.div`
  position: absolute;
  width: 100vw;
  height: 220vh;
  bottom: 0;
  left: 0;
  background-image: url(${BG});
  background-size: cover;
  z-index: -1;
`;

const Desc = styled(Text)`
  font-size: 22px;
  text-align: center;
  color: white;
  ${p => p.theme.max('sm')`
    padding: 0 ${p.theme.general.mobilePadding};
    text-align: justify;
  `}
`;

export default withTranslation()(Cost);

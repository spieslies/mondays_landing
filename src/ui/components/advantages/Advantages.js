import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Container, Flex, Box, SectionHeading, Text } from 'ui/atoms';

class Advantages extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <Container>
          <SectionHeading>{t('Advantages.title')}</SectionHeading>
          <ItemFlex>
            <Box md={1} sm={1} xs={0}>
              <NumberCont isOne>1</NumberCont>
            </Box>
            <Box md={11} sm={11} xs={12} padded>
              <Heading>{t('Advantages.box-1.title')}</Heading>
              <Desc>{t('Advantages.box-1.description')}</Desc>
            </Box>
          </ItemFlex>
          <ItemFlex>
            <Box md={1} sm={1} xs={0}>
              <NumberCont>2</NumberCont>
            </Box>
            <Box md={11} sm={11} xs={12} padded>
              <Heading>{t('Advantages.box-2.title')}</Heading>
              <Desc>{t('Advantages.box-2.description')}</Desc>
            </Box>
          </ItemFlex>
          <ItemFlex>
            <Box md={1} sm={1} xs={0}>
              <NumberCont>3</NumberCont>
            </Box>
            <Box md={11} sm={11} xs={12} padded>
              <Heading>{t('Advantages.box-3.title')}</Heading>
              <Desc>{t('Advantages.box-3.description')}</Desc>
            </Box>
          </ItemFlex>
          <ItemFlex>
            <Box md={1} sm={1} xs={0}>
              <NumberCont>4</NumberCont>
            </Box>
            <Box md={11} sm={11} xs={12} padded>
              <Heading>{t('Advantages.box-4.title')}</Heading>
              <Desc>{t('Advantages.box-4.description')}</Desc>
            </Box>
          </ItemFlex>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.section`
  padding: 50px 0 10px;
`;

const Heading = styled.h3`
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0;
  padding-left: 12px;
  ${p => p.theme.between('sm', 'md')`
    padding-left: 40px;
  `}
  ${p => p.theme.max('sm')`
    text-align: center;
    padding: 0 ${p => p.theme.general.mobilePadding};
  `}
`;

const ItemFlex = styled(p => <Flex alignItems="center" grid {...p} />)`
  position: relative;
  &:nth-child(1) {
    ${p => p.theme.max('sm')`
      width: 0;
    `}
  }
`;

const Desc = styled(Text)`
  color: ${p => p.theme.colors.black};
  margin-top: 10px;
  margin-bottom: 40px;
  padding-left: 12px;
  ${p => p.theme.between('sm', 'md')`
    padding-left: 40px;
  `}
  ${p => p.theme.max('sm')`
    text-align: justify;
    padding: 0 ${p => p.theme.general.mobilePadding};
  `}
`;

const NumberCont = styled.p`
  width: 80px;
  overflow: hidden;
  height: 170px;
  font-size: 170px;
  font-weight: 800;
  line-height: 150px;
  padding-top: 8px;
  margin: 0;
  color: ${p => p.theme.colors.grays.light};
  opacity: 0.5;
  padding-left: ${p => p.isOne ? '33px' : 0};
  ${p => p.theme.between('sm', 'md')`
    position: relative;
    left: ${p => p.theme.general.mobilePadding};
  `}
  ${p => p.theme.max('sm')`
    position: absolute;
    top: -30px;
    width: 220px;
    padding-left: 0 !important;
    font-size: 220px;
    z-index: -1;
    padding-top: 20px;
  `}
`;

export default withTranslation()(Advantages);

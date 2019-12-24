import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Container, Flex, Box, Text } from 'core/ui/atoms';
import BG from 'core/assets/images/BgTop.jpg';
import MARKETING1 from 'core/assets/images/marketing1.png';
import MARKETING2 from 'core/assets/images/marketing2.png';
import MARKETING3 from 'core/assets/images/marketing3.png';
import WAVE from 'core/assets/images/top_wave.png';

class Marketing extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <TopOverlay />
        <Overflow>
          <TopBlock />
          <BottomBlock />
          <Container relative>
            <Flex>
              <Box md={10} sm={10} xs={12} mdOffset={1} smOffset={1} xsOffset={0}>
                <Desc dangerouslySetInnerHTML={{__html: t('Marketing.description')}}/>
              </Box>
            </Flex>
            <Flex grid>
              <ItemBox>
                <Image source={MARKETING1} />
                <Title>{t('Marketing.box-1.title')}</Title>
              </ItemBox>
              <ItemBox>
                <Image source={MARKETING2} />
                <Title>{t('Marketing.box-2.title')}</Title>
              </ItemBox>
              <ItemBox>
                <Image source={MARKETING3} />
                <Title>{t('Marketing.box-3.title')}</Title>
              </ItemBox>
            </Flex>
          </Container>
        </Overflow>
      </Cont>
    );
  }
}

const Cont = styled.section`
  position:relative;
  padding: 20px 0;
  background-image: url(${BG});
  background-size: cover;
  background-position: bottom;
  ${p => p.theme.min('md')`
    background-attachment: fixed;
  `}
  ${p => p.theme.max('md')`
    padding: 0;
  `}
`;

const Overflow = styled.div`
  overflow: hidden;
`;

const TopOverlay = styled.div`
  position: absolute;
  left: 0;
  top: -99px;
  height: 100px;
  width: 100%;
  background-image: url(${WAVE});
  z-index: 10;
  background-size: 2420px 55%;
  background-position: center bottom;
  background-repeat: no-repeat;
  ${p => p.theme.max('md')`
    background-size: 150vw 40%;
  `}
  ${p => p.theme.max('sm')`
    background-size: 200vw 38%;
  `}
`;

const TopBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 188px;
  top: 0;
  left: 0;
  background: white;
  ${p => p.theme.between('sm', 'md')`
    height: 198px;
  `}
  ${p => p.theme.max('sm')`
    height: 101%;
    width: 33vw;
    top: 0;
    left: 0;
  `}
`;

const BottomBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 154px;
  bottom: -50px;
  left: 0;
  background: white;
  ${p => p.theme.max('sm')`
    height: 101%;
    width: 33vw;
    top: 0;
    right: 0;
    left: auto;
    bottom: auto;
  `}
`;

const Desc = styled(Text)`
  text-align: center;
  font-size: 20px;
  line-height: 1.45;
  margin: 40px 0;
  ${p => p.theme.between('sm', 'md')`
    margin: 40px 0;
  `}
  ${p => p.theme.max('sm')`
    position: relative;
    top: 20px;
    font-size: 18px;
    text-align: justify;
    line-height: 1.38;
    margin: 10px 0 40px 0;
    padding: 0 ${p => p.theme.general.mobilePadding};
    z-index: 10;
  `}
`;

const Image = styled.image`
  width: 130px;
  height: 130px;
  background-image: url(${p => p.source});
  background-size: cover;
  ${p => p.theme.max('sm')`
    width: 35vw;
    height: 35vw;
  `}
`;

const ItemBox = styled(p => <Box  md={4} sm={4} xs={12} {...p} />)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    left: 50%;
    background: white;
    top: 0;
    width: 130px;
    ${p => p.theme.max('sm')`
      width: 100%;
      left: 0;
      height: 17.5vw;
    `}
  }
  &:before {
    transform: translateX(-194px);
    ${p => p.theme.max('sm')`
      transform: translate(0, calc(-17.5vw + 2px));
    `}
  }
  &:after {
    transform: translateX(64px);
    ${p => p.theme.max('sm')`
      transform: translate(0, calc(35vw - 2px));
    `}
  }
  &:first-child {
    &:before {
      ${p => p.theme.max('sm')`
        height: 270px;
        transform: translate(0, calc(-17.5vw + 2px - 200px));
      `}
      ${p => p.theme.min('sm')`
        width: 2130px;
        transform: translateX(-2194px);
      `}
    }
  }
  &:last-child {
    &:after {
      ${p => p.theme.max('sm')`
        height: 35vw;
      `}
      ${p => p.theme.min('sm')`
        width: 2130px;
      `}
    }
  }
`;

const Title = styled(Text)`
  position: relative;
  font-weight: 700;
  font-size: 20px;
  text-align:center;
  padding: 0 20px;
  z-index: 2;
  margin-top: 12px;
  ${p => p.theme.between('sm', 'md')`
    margin-top: 3px;
    padding: 0 10px;
  `}
  ${p => p.theme.max('sm')`
    padding: 0 50px;
    margin-top: 7px;
    margin-bottom: 30px;
  `}
`;

export default withTranslation()(Marketing);

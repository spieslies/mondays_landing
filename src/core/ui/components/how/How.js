import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { withTranslation } from 'react-i18next';
import { Container, Flex, Box, Text, SectionHeading as SectionHeadingAtom } from 'core/ui/atoms';

import MAIN_VIEW1 from 'core/assets/images/screenshots/screenshot1.png';
import MAIN_VIEW2 from 'core/assets/images/screenshots/screenshot2.png';
import MAIN_VIEW3 from 'core/assets/images/screenshots/screenshot3.png';
import TEXT_SCREEN1 from 'core/assets/images/screenshots/screenshot4.png';
import TEXT_SCREEN2 from 'core/assets/images/screenshots/screenshot5.png';
import FLOWER1 from 'core/assets/images/screenshots/flower1.png';
import FLOWER2 from 'core/assets/images/screenshots/flower2.png';
import FLOWER3 from 'core/assets/images/screenshots/flower3.png';
import SATI_APP_ICON from 'core/assets/images/sati_app_logo.jpg';

class Notification extends PureComponent {
  render() {
    return (
      <NotificationCont>
        <Flex alignItems="center">
          <Box grow={0} shrink={0}>
            <NotificationIcon />
          </Box>
          <Box grow={1}>
            <NotificationTitle>Sati start</NotificationTitle>
          </Box>
          <Box>
            <NotificationTime>now</NotificationTime>
          </Box>
        </Flex>
        <NotificationText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut cumque debitis ducimus eaque et ex facere itaque, nesciunt nisi numquam odit optio, praesentium, quae quos sed sunt veniam voluptatibus.</NotificationText>
      </NotificationCont>
    );
  }
}

class How extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <Container>
          <SectionHeading>{t('How.title')}</SectionHeading>
          <ItemsFlex>
            <Box md={7} sm={6} xs={12} padded>
              <MainView1 source={MAIN_VIEW1} />
              <MainView2 source={MAIN_VIEW2} />
              <MainView3 source={MAIN_VIEW3} />
            </Box>
            <Box md={5} sm={6} xs={12} padded>
              <ItemHeading>{t('How.box-1.title')}</ItemHeading>
              <ItemText>{t('How.box-1.text-1')}</ItemText>
              <ItemText>{t('How.box-1.text-2')}</ItemText>
            </Box>
          </ItemsFlex>
          <ItemsFlex reverseMobile>
            <Box md={5} sm={6} xs={12} padded>
              <ItemHeading right>{t('How.box-2.title')}</ItemHeading>
              <ItemText right>{t('How.box-2.text-1')}</ItemText>
              <ItemText right>{t('How.box-2.text-2')}</ItemText>
            </Box>
            <Box md={7} sm={6} xs={12} padded style={{ perspective: '600px' }}>
              <TextScreen1 source={TEXT_SCREEN1} />
              <TextScreen2 source={TEXT_SCREEN2} />
            </Box>
          </ItemsFlex>
          <ItemsFlex>
            <Box md={7} sm={6} xs={12} padded>
              <Notification />
              <Notification />
              <Notification />
            </Box>
            <Box md={5} sm={6} xs={12} padded>
              <ItemHeading>{t('How.box-3.title')}</ItemHeading>
              <ItemText>{t('How.box-3.text-1')}</ItemText>
            </Box>
          </ItemsFlex>
          <ItemsFlex reverseMobile>
            <Box md={5} sm={6} xs={12} padded>
              <ItemHeading right>{t('How.box-4.title')}</ItemHeading>
              <ItemText right>{t('How.box-4.text-1')}</ItemText>
              <ItemText right>{t('How.box-4.text-2')}</ItemText>
            </Box>
            <Box md={7} sm={6} xs={12} padded>
              <FlowerScreen2 source={FLOWER3} />
              <FlowerScreen3 source={FLOWER1} />
              <FlowerScreen1 source={FLOWER2} />
            </Box>
          </ItemsFlex>
        </Container>
      </Cont>
    );
  }
}

const ItemsFlex = styled(p => <Flex alignItems="center" grid {...p} />)`
  &:not(:last-child) {
    ${p => p.theme.max('sm')`
      margin-bottom: 100px;
    `}
  }
  ${p => p.reverseMobile && css`
    > div {
      &:nth-child(1) {
        ${p.theme.max('sm')`
          order: 2;
        `}
      }
      &:nth-child(1) {
        ${p.theme.max('sm')`
          order: 1;
        `}
      }
    }
  `}
`;

const ItemHeading = styled.h3`
  color: ${p => p.theme.colors.black};
  font-weight: 200;
  font-size: 42px;
  margin-bottom: 28px;
  margin-top: -30px;
  text-align: ${p => p.right ? 'right' : 'left'};
  ${p => p.theme.max('sm')`
    text-align: center;
    padding: ${p.theme.general.mobilePadding} calc(${p.theme.general.mobilePadding} * 2);
    margin-bottom: -3px;
    margin-top: 0;
    font-size: 30px;
  `}
`;

const ItemText = styled(Text)`
  text-align: ${p => p.right ? 'right' : 'left'};
  margin-bottom: 0;
  margin-top: 0;
  ${p => p.theme.max('sm')`
    text-align: justify;
    padding: 0 ${p.theme.general.mobilePadding};
  `}
`;

const Cont = styled.div`
  position: relative;
  background: white;
  z-index: 10;
  padding-bottom: 70px;
  ${p => p.theme.max('sm')`
    padding-bottom: 50px;
  `}
`;

const Screen = styled.div`
  height: 500px;
  width: 231px;
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, .2);
  transform-style: preserve-3d;
  background-image: url(${p => p.source});
  background-size: cover;
  ${p => p.theme.between('sm', 'md')`
    width: 25vw;
    height: 54.1vw;
  `}
  ${p => p.theme.max('sm')`
    width: 50vw;
    height: 108.2vw;
  `}
`;

const NotificationCont = styled.div`
  width: 400px;
  padding: 14px;
  background: #eeeeee;
  border-radius: 16px;
  margin-bottom: 18px;
  margin-left: 40px;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, .2);
  &:nth-child(2) {
    opacity: 0.75;
  }
  &:nth-child(3) {
    opacity: 0.5;
  }
  ${p => p.theme.between('sm', 'md')`
    width: 46vw;
    margin-left: ${p => p.theme.general.mobilePadding};
  `}
  ${p => p.theme.max('sm')`
    width: 90vw;
    margin-left: 5vw;
  `}
  &:last-child {
    ${p => p.theme.max('sm')`
      margin-bottom: 0;
    `}
  }
`;

const NotificationIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-image: url(${SATI_APP_ICON});
  background-size: cover;
  ${p => p.theme.max('sm')`
    width: 14px;
    height: 14px;
  `}
`;

const NotificationTitle = styled.h5`
  margin: 0;
  font-weight: 200;
  font-size: 14px;
  padding-left: 10px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  ${p => p.theme.max('sm')`
    font-size: 13px;
  `}
`;

const NotificationTime = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${p => p.theme.colors.grays.regular};
  ${p => p.theme.max('sm')`
    font-size: 12px;
  `}
`;

const NotificationText = styled(Text)`
  font-size: 14px;
  margin: 7px 0 0;
  ${p => p.theme.max('sm')`
    font-size: 12px;
  `}
`;

const MainView1 = styled(Screen)`
  position: absolute;
  transform: scale(0.77);
  filter: blur(0.66px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.77) translateX(${p.theme.general.mobilePadding});
  `}
  ${p => p.theme.max('sm')`
    filter: none;
    transform: scale(0.77) translateX(2vw);
  `}
`;

const MainView2 = styled(Screen)`
  position: absolute;
  transform: scale(0.88) translateX(136px);
  filter: blur(0.33px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.88) translateX(13vw);
  `}
  ${p => p.theme.max('sm')`
    filter: none;
    transform: scale(0.88) translateX(23vw);
  `}
`;

const MainView3 = styled(Screen)`
  transform: translateX(258px);
  ${p => p.theme.between('sm', 'md')`
    transform: translateX(23vw);
  `}
  ${p => p.theme.max('sm')`
    transform: translateX(42vw);
  `}
`;

const TextScreen1 = styled(Screen)`
  position: absolute;
  transform: scale(0.8) rotateY(9deg) translateX(100px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.8) rotateY(9deg) translateX(-1.6vw);
  `}
  ${p => p.theme.max('sm')`
    transform: scale(0.93) rotateY(8deg) translateX(7vw);
  `}
`;

const TextScreen2 = styled(Screen)`
  transform: scale(0.95) rotateY(-2deg) translateX(270px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.95) rotateY(0) translateX(20vw);
  `}
  ${p => p.theme.max('sm')`
    transform: scale(1) rotateY(0) translateX(42vw);
  `}
`;

const FlowerScreen1 = styled(Screen)`
  transform: scale(0.85) translate(370px, 28px);
  filter: blur(0.33px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.95) translate(22vw, 28px);
  `}
  ${p => p.theme.max('sm')`
    transform: scale(0.9) translate(49.8vw, 28px);
    filter: none;
  `}
`;

const FlowerScreen2 = styled(Screen)`
  position: absolute;
  transform: scale(0.85) translate(95px, -28px);
  filter: blur(0.66px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.95) translate(0, -28px);
  `}
  ${p => p.theme.max('sm')`
    transform: scale(0.9) translate(6vw, -28px);
    filter: none;
  `}
`;

const FlowerScreen3 = styled(Screen)`
  position: absolute;
  transform: scale(0.85) translateX(228px);
  ${p => p.theme.between('sm', 'md')`
    transform: scale(0.95) translateX(11vw);
  `}
  ${p => p.theme.max('sm')`
    transform: scale(0.9) translateX(27vw);
  `}
`;

const SectionHeading = styled(SectionHeadingAtom)`
  margin-top: 50px;
  margin-bottom: 100px;
  ${p => p.theme.max('sm')`
    margin-top: 10px;
    margin-bottom: 30px;
  `}
`;

export default withTranslation()(How);

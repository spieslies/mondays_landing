import React, {PureComponent} from 'react';
import styled from 'styled-components';

import {
  Section,
  Container,
  Flex,
  Text,
} from "ui/atoms";

import {
  AndroidView,
  IOSView
} from 'react-device-detect';

import BG from 'assets/images/BgBottom.jpg';
import GOOGLEPLAY from 'assets/icons/GooglePlay.png';
import APPSTORE from 'assets/icons/AppStore.png';


class Bottom extends PureComponent {

  downios = () => {
    ReactGA.event({
      category: 'desktop_events',
      action: 'down1'
    });
  };

  downandroid = () => {
    ReactGA.event({
      category: 'desktop_events',
      action: 'down2'
    });
  };

  downiosmob = () => {
    ReactGA.event({
      category: 'mobile_events',
      action: 'mdown1'
    });
  };

  downandroidmob = () => {
    ReactGA.event({
      category: 'mobile_events',
      action: 'mdown2'
    });
  };

  render() {
    return (
      <CustomSection>
        <BottomBg />
        <Container>
          <BlockBottom alignItems={'center'} justifyContent={'space-between'}>
            <SmallerText textSmaller>Copyright © Sati 2019 Все права защищены</SmallerText>
              <ButtonCont>
                <AppLink
                  href='/ios'
                  onClick={this.downios}>
                  <ButtonDownload src={APPSTORE}/>
                </AppLink>
                <AppLink
                  href='/android'
                  onClick={this.downandroid}>
                  <ButtonDownload src={GOOGLEPLAY}/>
                </AppLink>
              </ButtonCont>
              <FullVersion>
                <AndroidView>
                  <AppLink
                    href='/android'
                    onClick={this.downandroidmob}>
                    <ButtonDownloadSm src={GOOGLEPLAY}/>
                  </AppLink>
                </AndroidView>
                <IOSView>
                  <AppLink
                    href='/ios'
                    onClick={this.downiosmob}>
                    <ButtonDownloadSm src={APPSTORE}/>
                  </AppLink>
                </IOSView>
              </FullVersion>
          </BlockBottom>
        </Container>
      </CustomSection>
    );
  }
}

export default Bottom;

const CustomSection = styled(Section)`
  position: relative;
  padding: 0;
  ${p => p.theme.max('sm')`
    padding: 40px 16px;
    background-position: top;
  `}
`;

const BlockBottom = styled(Flex)`
  min-height: 296px;
  ${p => p.theme.max('md')`
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  `}
  ${p => p.theme.max('sm')`
    min-height: auto;
  `}
`;

const SmallerText = styled(Text)`
  position: relative;
  left: 160px;
  font-weight: 300;
  opacity: ${p => p.theme.opacity.null}
  margin: 0;
  ${p => p.theme.max('lg')`
    left: 25px;
  `}
  ${p => p.theme.max('md')`
    left: 0;
  `}
  ${p => p.theme.max('sm')`
    font-size: 13px;
    line-height: 15px;
    margin-top: 20px;
  `}
`;

const ButtonCont = styled.div`
    position: relative;
    right: 150px;
  ${p => p.theme.max('lg')`
    right: 0;
  `}
  ${p => p.theme.max('md')`
    right: 0;
  `}
  ${p => p.theme.max('sm')`
    display: none;
  `}
`;

const AppLink = styled.a`
  text-decoration: none;
`;

const ButtonDownload = styled.img`
  cursor: pointer;
  width: 180px;
  height: 65px;
  margin-right: 20px;
`;

const FullVersion = styled.div`
  display: none;
  ${p => p.theme.max('sm')`
     display: block !important;
     margin-top: 10px;
  `}
`;

const ButtonDownloadSm = styled.img`
  ${p => p.theme.max('sm')`
    width: 180px;
    height: 65px;
  `}
`;

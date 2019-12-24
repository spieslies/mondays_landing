import React, {PureComponent} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import i18n from 'i18next';
import {getLocale} from 'i18n';
import { withTranslation } from 'react-i18next';
import {
  AndroidView,
  IOSView
} from 'react-device-detect';
import { Parallax } from 'react-scroll-parallax';

import {
  Section,
  Container,
  Flex,
  Heading as HeadingAtom,
  Text,
  Link
} from 'core/ui/atoms';
import Phone from 'core/ui/components/top/Phone';

import LOGO from 'core/assets/icons/logo_v.png';
import BG from 'core/assets/images/BgTop.jpg';
import GOOGLEPLAY from 'core/assets/icons/GooglePlay.png';
import APPSTORE from 'core/assets/icons/AppStore.png';

class Top extends PureComponent {

  static propTypes = {
    en: PropTypes.bool,
  };

  topios = () => {
    ReactGA.event({
      category: 'desktop_events',
      action: 'up1'
    });
  };

  topandroid = () => {
    ReactGA.event({
      category: 'desktop_events',
      action: 'up2'
    });
  };

  topiosmob = () => {
    ReactGA.event({
      category: 'mobile_events',
      action: 'mup1'
    });
  };

  topandroidmob = () => {
    ReactGA.event({
      category: 'mobile_events',
      action: 'mup2'
    });
  };

  onSelectFlag = async lang => {
    const LOCALES = {US: 'en', RU: 'ru'};
    await i18n.changeLanguage(LOCALES[lang], () => {
      this.forceUpdate();
    });
  };

  render() {
    const { t } = this.props;
    return (
      <CustomSection>
        <CustomReactFlagsSelect
          defaultCountry={{ru: 'RU', en: 'US'}[getLocale()] || 'RU'}
          countries={["US", "RU"]}
          className="menu-flags"
          customLabels={{"US": "EN", "RU": "RU",}}
          onSelect={this.onSelectFlag}
        />
        <Container>
          <TopFlex>
            <BlockText>
              <Logo src={LOGO} />
              {/*<Img />*/}
              <Heading white dangerouslySetInnerHTML={{__html: t('Top.title')}}/>
              <NormalText textNormal>{t('Top.description')}</NormalText>
              <ButtonCont>
                <AppLink
                  href='/ios'
                  onClick={this.topios}>
                  <ButtonDownload src={APPSTORE}/>
                </AppLink>
                <AppLink
                  href='/android'
                  onClick={this.topandroid}>
                  <ButtonDownload src={GOOGLEPLAY} last />
                </AppLink>
              </ButtonCont>
              <FullVersion>
                <AndroidView>
                  <AppLink
                    href='/android'
                    onClick={this.topandroidmob}>
                    <ButtonDownloadSm src={GOOGLEPLAY}/>
                  </AppLink>
                </AndroidView>
                <IOSView>
                  <AppLink
                    href='/ios'
                    onClick={this.topiosmob}>
                    <ButtonDownloadSm src={APPSTORE}/>
                  </AppLink>
                </IOSView>
              </FullVersion>
            </BlockText>
            <Parallax y={[-90, 80]}>
              <Phone />
            </Parallax>
          </TopFlex>
        </Container>
      </CustomSection>
    );
  }
}

export default withTranslation()(Top);

const CustomReactFlagsSelect = styled(ReactFlagsSelect)`
  position: absolute;
  right: 0;
  padding: 15px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  && {
    .flag-options {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
    }
    .flag-option {
      &:hover {
        background: rgba(0, 0, 0, .5);
      }
    }
    .arrow-down {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const CustomSection = styled(Section)`
  background: url(${BG}) no-repeat center;
  background-color: ${p => p.theme.colors.primary};
  background-size: cover;
  ${p => p.theme.min('md')`
    background-attachment: fixed;
    background-position: bottom;
  `}
  padding: 0;
  height: 700px;
  ${p => p.theme.between('sm', 'md')`
    height: 580px;
  `}
  ${p => p.theme.max('sm')`
    height: 568px;
    padding: 0 10px;
  `}
`;

const Logo = styled.img`
  position: relative;
  width: 176px;
  height: 176px;
  z-index: ${p => p.theme.zIndex.four};
  margin: 5px;
  ${p => p.theme.max('lg')`
    left: 0;
  `}
  ${p => p.theme.max('md')`
    width: 140px; 
    height: 140px;
    margin-top: 30px;
  `}
  ${p => p.theme.max('sm')`
    width: 160px; 
    height: 160px;
    margin-top: 80px;
  `}
}
`;

const TopFlex = styled(Flex)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled(HeadingAtom)`
  font-size: 28px;
  margin-bottom: 0;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  ${p => p.theme.max('md')`
    font-size: 24px;
  `}
  ${p => p.theme.max('sm')`
    font-size: 7vw;
  `}
`;

const BlockText = styled(Flex)`
  position: relative;
  top: -45px;
  width: 450px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${p => p.theme.max('lg')`
    left: 0;
  `}
  ${p => p.theme.max('md')`
    z-index: ${p => p.theme.zIndex.three};
  `}
  ${p => p.theme.max('sm')`
    width: 100%;
    min-width: 274px;
  `}
`;

const NormalText = styled(Text)`
  color: ${p => p.theme.colors.white};
  font-weight: 300;
  ${p => p.theme.max('sm')`
    font-size: ${p => p.theme.font.size.smaller};
    line-height: ${p => p.theme.font.lineHeight.normal};
  `}
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  ${p => p.theme.max('sm')`
    font-size: 4.7vw;
  `}
`;

const ButtonCont = styled.div`
  position: relative;
  text-align: center;
  z-index: ${p => p.theme.zIndex.two};
  margin-top: 40px;
  ${p => p.theme.max('sm')`
    display: none;
  `}
`;

const AppLink = styled(Link)`
  text-decoration: none;
`;

const ButtonDownload = styled.img`
  cursor: pointer;
  width: 180px;
  height: 65px;
  margin-right: ${p => p.last ? '0' : '15px'};
`;

const FullVersion = styled.div`
  display: none;
  ${p => p.theme.max('sm')`
     display: block !important;
     margin-top: 30px;
  `}
`;

const ButtonDownloadSm = styled.img`
  ${p => p.theme.max('sm')`
    width: 180px;
    height: 65px;
  `}
`;

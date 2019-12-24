import React, {PureComponent} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { withTranslation } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';

import Top from '../components/top/Top';
import Marketing from '../components/marketing/Marketing';
import How from '../components/how/How';
import Inside from '../components/inside/Inside';
import Advantages from '../components/advantages/Advantages';
import Fits from '../components/fits/Fits';
import NoFit from '../components/nofit/NoFit';
import Faq from '../components/faq/Faq';
import Cost from '../components/cost/Cost';
// import Why from '../components/why/Why';
// import FirstStep from '../components/firststep/FirstStep';
// import Ask from '../components/ask/Ask';
// import Question from '../components/question/Question';
// import Bottom from '../components/bottom/Bottom';

// ReactGA.initialize('');
// ReactGA.pageview(window.location.pathname);

class Landing extends PureComponent {
  render() {
    return (
      <ParallaxProvider>
        <Top/>
        <Marketing />
        <How />
        <Inside />
        <Advantages />
        <Fits />
        <NoFit />
        <Faq />
        <Cost />
      </ParallaxProvider>
    );
  }
}

export default withTranslation()(Landing);

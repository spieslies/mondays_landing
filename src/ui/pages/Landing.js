import React, {PureComponent} from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';

import Top from 'ui/components/top/Top';
import Marketing from 'ui/components/marketing/Marketing';
import How from 'ui/components/how/How';
import Inside from 'ui/components/inside/Inside';
import Advantages from 'ui/components/advantages/Advantages';
import Fits from 'ui/components/fits/Fits';
import NoFit from 'ui/components/nofit/NoFit';
import Faq from 'ui/components/faq/Faq';
import Cost from 'ui/components/cost/Cost';
// import Why from '../components/why/Why';
// import FirstStep from '../components/firststep/FirstStep';
// import Ask from '../components/ask/Ask';
// import Question from '../components/question/Question';
// import Bottom from '../components/bottom/Bottom';

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

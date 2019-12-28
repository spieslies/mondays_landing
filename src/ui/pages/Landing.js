import React, {PureComponent} from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Head } from 'react-static';

import Top from 'ui/components/top/Top';
import Marketing from 'ui/components/marketing/Marketing';
import How from 'ui/components/how/How';
import Inside from 'ui/components/inside/Inside';
import Advantages from 'ui/components/advantages/Advantages';
import Fits from 'ui/components/fits/Fits';
import NoFit from 'ui/components/nofit/NoFit';
import Faq from 'ui/components/faq/Faq';
import Cost from 'ui/components/cost/Cost';
import FlowerPreloading from 'ui/components/FlowerPreloading';

class Landing extends PureComponent {
  render() {
    return (
      <ParallaxProvider>
        <Head>
          <title>40-day meditation retreat in your smartphone</title>
          <meta name="description" content="40-day meditation retreat in your smartphone" />
          <meta property="og:description" content="40-day meditation retreat in your smartphone" />
          <meta property="twitter:description" content="40-day meditation retreat in your smartphone" />
          <meta property="og:title" content="Sati" />
          <meta property="twitter:title" content="Sati" />
          <meta property="og:image" content="https://dj6wjgdqr93aw.cloudfront.net/og_image.jpg" />
          <meta property="twitter:image" content="https://dj6wjgdqr93aw.cloudfront.net/og_image.jpg" />
          <meta property="og:site_name" content="Sati" />
          <meta property="og:url" content="https://sati.app" />
          <meta property="twitter:url" content="https://sati.app" />
        </Head>
        <Top/>
        <Marketing />
        <How />
        <Inside />
        <Advantages />
        <Fits />
        <NoFit />
        <Faq />
        <Cost />
        <FlowerPreloading />
      </ParallaxProvider>
    );
  }
}

export default withTranslation()(Landing);

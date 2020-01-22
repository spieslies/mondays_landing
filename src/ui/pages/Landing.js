import React, {PureComponent} from 'react';
import { Head } from 'react-static';

import Hero from 'ui/components/hero/Hero';
import Steps from 'ui/components/steps/Steps'
import Advantages from 'ui/components/advantages/Advantages'
import Authors from 'ui/components/authors/Authors'
import Feedback from 'ui/components/feedback/Feedback';
import Footer from 'ui/components/footer/Footer';

class Landing extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title></title>
          <meta name="description" content="" />
          <meta property="og:description" content="" />
          <meta property="twitter:description" content="" />
          <meta property="og:title" content="" />
          <meta property="twitter:title" content="" />
          <meta property="og:image" content="" />
          <meta property="twitter:image" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content="" />
          <meta property="twitter:url" content="" />
        </Head>
        <Hero/>
        <Steps/>
        <Advantages/>
        <Authors/>
        <Feedback/>
        <Footer/>
      </>
    );
  }
}

export default Landing;

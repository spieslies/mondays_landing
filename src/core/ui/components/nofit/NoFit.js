import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Container, Flex, Box, SectionHeading, Text as TextAtom } from 'core/ui/atoms';
import AURA from 'core/assets/images/app_icons/aura.jpg';
import BREATHE from 'core/assets/images/app_icons/breathe.jpg';
import BUDHIFY from 'core/assets/images/app_icons/budhify.jpg';
import CALM from 'core/assets/images/app_icons/calm.jpg';
import HEADSPACE from 'core/assets/images/app_icons/headspace.jpg';
import INSIGHT from 'core/assets/images/app_icons/insight.jpg';
import MEDITOPIA from 'core/assets/images/app_icons/meditopia.jpg';
import PERCENT from 'core/assets/images/app_icons/percent.jpg';
import SIMPLE from 'core/assets/images/app_icons/simple.jpg';

class NoFit extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Cont>
        <Container>
          <SectionHeading>{t('NoFit.title')}</SectionHeading>
          <FlexCont>
            <Box md={6} sm={7} xs={12} padded>
              <AppCont>
                <AppIcon image={CALM} href="https://calm.com" target="_blank" />
                <AppIcon image={HEADSPACE} href="https://www.headspace.com" target="_blank" />
                <AppIcon image={INSIGHT} href="https://insighttimer.com/" target="_blank" />
                <AppIcon image={AURA} href="https://www.aurahealth.io/" target="_blank" />
                <AppIcon image={BUDHIFY} href="https://buddhify.com/" target="_blank" />
                <AppIcon image={BREATHE} href="https://www.stopbreathethink.com/" target="_blank" />
                <AppIcon image={SIMPLE} href="https://try.simplehabit.com/" target="_blank" />
                <AppIcon image={PERCENT} href="https://www.tenpercent.com/" target="_blank" />
                <AppIcon image={MEDITOPIA} href="https://meditopia.com/" target="_blank" />
              </AppCont>
            </Box>
            <Box md={6} sm={5} xs={12} padded>
              <Text>{t('NoFit.text-1')}</Text>
              <Text>{t('NoFit.text-2')}</Text>
            </Box>
          </FlexCont>
        </Container>
      </Cont>
    );
  }
}

const Cont = styled.section`
  padding: 20px 0;
  overflow: hidden;
`;

const Text = styled(TextAtom)`
  ${p => p.theme.max('sm')`
    text-align: justify;
    &:last-of-type {
      margin-bottom: 30px;
    }
  `}
`;

const AppIcon = styled.a`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 14px;
  margin: 20px;
  background-image: url(${p => p.image});
  background-size: 102%;
  background-position: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all .4s ease;
  ${p => p.theme.max('sm')`
    width: calc((100vw - (${p.theme.general.mobilePadding} * 4)) / 3);
    height: calc((100vw - (${p.theme.general.mobilePadding} * 4)) / 3);
    margin: 0 0 ${p.theme.general.mobilePadding} ${p.theme.general.mobilePadding};
  `}
  &:hover {
    transform: scale(1.1);
  }
`;

const FlexCont = styled(p => <Flex alignItems="center" grid {...p} />)`
  perspective: 500px;
  ${p => p.theme.max('sm')`
    > div {
      &:nth-child(2) {
        order: 1;
        padding: 0 calc(${p.theme.general.mobilePadding} + 15px);
        margin-bottom: ${p.theme.general.mobilePadding};
      }
      &:nth-child(1) {
        order: 2;
      }
    }
  `}
`;

const AppCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  transform: translateX(-18px) scale(0.92) skewX(-7deg) rotateY(-11deg);
  ${p => p.theme.max('sm')`
    transform: none;
  `}
`;

export default withTranslation()(NoFit);
